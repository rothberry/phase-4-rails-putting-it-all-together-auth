import React, { useState } from "react"
import { Button, Error, Input, FormField, Label } from "../styles"

function LoginForm({ onLogin }) {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isUser, setIsUser] = useState(true)

	function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		const endpoint = isUser ? "/login" : "/login_student"
		fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			setIsLoading(false)
			if (r.ok) {
				r.json().then((user) => onLogin(user))
			} else {
				r.json().then((err) => setErrors(err.errors))
			}
		})
	}

	return (
		<>
			<h1>{isUser ? "Teacher" : "Student"} Login</h1>
			<form onSubmit={handleSubmit}>
				<FormField>
					<Label htmlFor="username">Username</Label>
					<Input
						type="text"
						id="username"
						autoComplete="off"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</FormField>
				<FormField>
					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormField>
				<FormField>
					<Button variant="fill" color="primary" type="submit">
						{isLoading ? "Loading..." : "Login"}
					</Button>
					<label text="User?">
						User?
						<input
							type="checkbox"
							onChange={() => setIsUser(!isUser)}
							defaultChecked={true}
						/>
					</label>
				</FormField>
				<FormField>
					{errors.map((err) => (
						<Error key={err}>{err}</Error>
					))}
				</FormField>
			</form>
		</>
	)
}

export default LoginForm
