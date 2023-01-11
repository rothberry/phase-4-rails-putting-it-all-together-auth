import React, { useEffect, useContext } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Login from "../pages/Login"
import RecipeList from "../pages/RecipeList"
import NewRecipe from "../pages/NewRecipe"
import { Context } from "../contexts/Context"

function App() {
	// const [user, setUser] = useState(null);

	const { user, setUser, fetchMe } = useContext(Context)

	useEffect(() => {
		console.log({ user, setUser })
	}, [])

	// useEffect(() => {
	// 	// auto-login
	// 	// fetch("/me").then((r) => {
	// 	// 	if (r.ok) {
	// 	// 		r.json().then((user) => setUser(user))
	// 	// 	}
	// 	// })
  //   fetchMe()
	// }, [])

	if (!user.id) return <Login />

	return (
		<>
			<NavBar />
			<main>
				<Switch>
					<Route path="/new">
						<NewRecipe />
					</Route>
					<Route path="/">
						<RecipeList re={"re"}/>
					</Route>
				</Switch>
			</main>
		</>
	)

	// return (
	//   <>
	//     <NavBar />
	//     <main>
	//       <Switch>
	//         <Route path="/new" component={NewRecipe} />
	//         <Route path="/" component={RecipeList} />
	//       </Switch>
	//     </main>
	//   </>
	// );
}

export default App
