import { createContext } from "react"
import { useContext, useState } from "react"

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [loading, setLoading] = useState(false)

    return (
        <GlobalContext.Provider value={{ loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }
