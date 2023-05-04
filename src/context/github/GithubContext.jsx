import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) =>{
const initialState = {
    users: [],
    loading:true
}

const [state, dispatch]= useReducer(GithubReducer,initialState)


    const fetchUser = async () =>{
        const response = await fetch(`${GITHUB_URL}/users`)
        const data = await response.json()

      dispatch({
        type: "GET_USERS",
        payload:data,
      })
    }

    return <GithubContext.Provider value={{users: state.users, loading: state.loading,fetchUser}}>{children}</GithubContext.Provider>
}
export default GithubContext