import { getSession, signOut, useSession } from "next-auth/react"
import { createContext } from "react"

export const GestorContext = createContext()

export function GestorContextProvider(props){

    const {data: session} = useSession()

    function handleSignOut(){
    signOut()
    }
    
    return(
        <GestorContext.Provider value={{session,handleSignOut}}>
            {props.children}
        </GestorContext.Provider>
    )
}
