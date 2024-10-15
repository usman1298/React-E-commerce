import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyContext from './context/Store'

const PrivateRoute = () => {
  const {isUserLogin} = useContext(MyContext)

  if(!isUserLogin){

    return <Outlet/>
  } else{

    <Navigate to={'/login'}/>
  }


    
 
}

export default PrivateRoute