import React, { useState } from 'react'
import MyContext from './Store'
const UserAuth = (props) => {

    const [isUserLogin,setIsUserLogin]=useState("");


   

 return (
    <MyContext.Provider value={{ isUserLogin,setIsUserLogin}}>
      {props.children}
    </MyContext.Provider>
    
  )
}

export default UserAuth;