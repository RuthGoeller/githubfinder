import { useContext } from 'react'
import AlertContext from '../../context/github/alert/AlertContext'

const Alert = () => {

    const {alert} = useContext(AlertContext)
  return (
    alert !== null && (
        <p className="flex item-start mb-4 space-x-2">
            {alert.msg}
        </p>
    )
  )
}

export default Alert