import React, { useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/ConnectionSlice'

const Connections = () => {

  const connections = useSelector((store)=> store.connections)
  const dispatch = useDispatch();

    const fetchConnections = async()=>{
        const res = await axios.get("http://localhost:7777/connections", {withCredentials : true} )
        console.log(res.data.data);
        dispatch(addConnection(res.data.data))
        
    }    

    useEffect(()=>{
        fetchConnections()
    },[]);

    if (!connections) return;

    if (connections.length === 0) return <h1> No Connections Found</h1>;

    
  return (

    
    
    <div>
        <Navbar/>

        
    </div>
  )
}

export default Connections