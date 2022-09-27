import { createContext, useState } from "react"

export const FetchContext = createContext()

const FetchContextProvider = (props) => {
	const fetchStore = {
		fetching: "FETCHING",
	}
	return (
		<FetchContext.Provider value={fetchStore}>
			{props.children}
		</FetchContext.Provider>
	)
}

export default FetchContextProvider
