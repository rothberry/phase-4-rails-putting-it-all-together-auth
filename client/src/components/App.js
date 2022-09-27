import React, { useEffect, useContext } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import RecipeList from "../pages/RecipeList"
import NewRecipe from "../pages/NewRecipe"
import { Context } from "../contexts/Context"

function App() {
	// const [user, setUser] = useState(null);
	// const store = useContext(Context)
	const { user, setUser, fetchMe } = useContext(Context)

	useEffect(() => {
		// auto-login
		// fetch("/me").then((r) => {
		// 	if (r.ok) {
		// 		r.json().then((user) => setUser(user))
		// 	}
		// })
		fetchMe()
	}, [])

	if (!user) return <Login />

	return (
		<>
			<NavBar />
			<main>
				<Switch>
					<Route path="/new">
						<NewRecipe />
					</Route>
					<Route path="/">
						<RecipeList />
					</Route>
				</Switch>
			</main>
		</>
	)

	/* 
  	if (!user) return <Login setUser={setUser} />

	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<main>
				<Switch>
					<Route path="/new">
						<NewRecipe user={user} />
					</Route>
					<Route path="/">
						<RecipeList />
					</Route>
				</Switch>
			</main>
		</>
	)

  
  */
}

export default App
