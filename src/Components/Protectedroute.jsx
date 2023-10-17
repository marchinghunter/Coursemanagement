import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protectedroute = ({User,Component}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(User){
            navigate('/')
          }
    },[User])
  return (
    <>
        <Component/>
    </>
  )
}

export default Protectedroute