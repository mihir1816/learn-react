import React from 'react'
import { useDispatch } from 'react-redux' 
import authService from '../../Auth/auth'
import { logout } from '../../store_and_slice/authSlice';



function LogOut() {

    const dispatch = useDispatch() ; 

    const handler = () => {
        authService.logout().then(()=>{
            dispatch(logout()) ; 
        })
    }
     
  return (
   <button 
   onClick={handler}
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >LogOut</button>
  )
}

export default LogOut