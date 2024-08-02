
import { useState } from 'react'
import React from 'react'

const Forms = () => {
    const [data,setData] = useState({username:'',email:'',password:''})
    console.log(data);

    const inputhandle=(event)=>{
        setData({
            ...data
            [event.target.name]=event.target.value
        })
    }
    const submithandle=(e)=>{
        setData({
            username:'',
            email:'',
            password:''
        })
    }

  return (
    <>
   <h1>LoginPage</h1>
   <form onSubmit={submithandle}>
    <label htmlFor='username'>Username</label>
    <input type="text" id="username" name="username" value={data.username} onChange={inputhandle} /><br/>
    <label htmlFor='email'>Email</label>
    <input type="email" id="email" name="email" value={data.email} onChange={inputhandle} /> <br/>
    <label htmlFor='password'>Password</label>
    <input type="password" id="password" name="password" value={data.password} onChange={inputhandle} /> <br/>
    <button type="submit">Submit</button>
   </form>
   </>
  )
}

export default Forms 