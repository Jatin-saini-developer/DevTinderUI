import React from 'react'
import { CardDemo } from './CardDemo'
 
const LoginPage = () => {
  return (
    <div>
      
        <div><h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">DevTinder</h1></div>
       
        <div className='flex justify-evenly'>
            <p className="text-sm font-medium">Code</p>
            <p className="text-sm font-medium">Connect</p>
            <p className="text-sm font-medium">Match</p>
        </div>

        <div>
            <p className="text-gray-600 text-lg font-medium">Find your coding soulmate</p>
        </div>

        <div><CardDemo/></div>
    </div>
  )
}

export default LoginPage