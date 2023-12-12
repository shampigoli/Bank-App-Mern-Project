import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../services/Api';
import { getCurrentUser } from '../../redux/features/auth/authAction';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const dispatch=useDispatch();
    // get current user
    useEffect(()=>{
       getUser()
    },[])
    const getUser= async () =>{

        try {
            const {data}= await api.get('/auth/current-user')
            if(data?.success){
                dispatch(getCurrentUser(data))
            }
        } catch (error) {
            console.log(error)
        }
    }
    if(localStorage.getItem('token')){
        return children
    }else{
        return <Navigate to='/login'/>
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
