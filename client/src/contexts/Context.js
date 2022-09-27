import { createContext,  useState } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
	const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState([])

  const fetchMe = () => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user))
			}
		})
	}

	const fetchLogin = (username, password, setIsLoading, setErrors) => {
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			setIsLoading(false)
			if (r.ok) {
				r.json().then((user) => setUser(user))
			} else {
				r.json().then((err) => setErrors(err.errors))
			}
		})
	}

	const handleLogoutClick = () => {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null)
			}
		})
	}

	const fetchNewRecipe = ({
		setIsLoading,
		setErrors,
		title,
		instructions,
		minutesToComplete,
		history,
	}) => {
		setIsLoading(true)
		fetch("/recipes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				instructions,
				minutes_to_complete: minutesToComplete,
			}),
		}).then((r) => {
			setIsLoading(false)
			if (r.ok) {
				history.push("/")
			} else {
				r.json().then((err) => setErrors(err.errors))
			}
		})
	}
	const fetchAllRecipes = () => {
		fetch("/recipes")
			.then((r) => r.json())
			.then(setRecipes)
	}

	const store = {
		test: "testing",
		func: () => console.log("hi"),
		// user: user,
		user,
		setUser,
		fetchMe,
		fetchLogin,
		handleLogoutClick,
		fetchAllRecipes,
		recipes,
		setRecipes,
	}

	return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
