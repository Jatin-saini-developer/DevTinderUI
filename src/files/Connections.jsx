import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Connections = () => {


    const fetchConnections = async()=>{
        const res = await axios.get("http://localhost:7777/connections", {withCredentials : true} )
        console.log(res);
        
    }    

    useEffect(()=>{
        fetchConnections()
    },[])
    
  return (

    
    
    <div>
        <Navbar/>

        
    </div>
  )
}

export default Connections