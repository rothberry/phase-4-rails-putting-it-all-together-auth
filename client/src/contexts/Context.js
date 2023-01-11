import { createContext, useEffect, useState } from "react"

export const Context = createContext()

const ContextProvider = (props) => {
	const [user, setUser] = useState({})
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		fetchMe()
	}, [])

  useEffect(() => {
    fetchRecipes()
  }, [user])
	// use state
	// some functions
	const fetchMe = () => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user))
			}
		})
	}

	const handleLogoutClick = () => {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser({})
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

	const fetchRecipes = () => {
		fetch("/recipes")
			.then((r) => r.json())
			.then(setRecipes)
	}

	const store = {
		test: "testing",
		user,
		setUser,
		fetchMe,
		handleLogoutClick,
		fetchLogin,
		fetchRecipes,
		recipes,
		setRecipes,
	}

	return <Context.Provider value={store}>{props.children}</Context.Provider>
}

export default ContextProvider
