import { useEffect, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import { useParams } from "react-router-dom"


const User = () => {
    const param = useParams()
    const {user, getUser} = useContext(GithubContext)

 useEffect(()=>{getUser(param.login)},[])
  return (
    <div>{user.login}</div>
  )
}

export default User