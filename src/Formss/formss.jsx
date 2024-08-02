import React from 'react'
import { useState } from 'react'

const Forms = () => {
    const [data,setData] = useState({username : '',email:''})
    console.log(data);

    const handleinput = (event) =>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        setData({
            username:'',
            email:''
        })
    }

  return (
    <>
        <h1>Login Form</h1>
        <form onSubmit={handlesubmit}>
            <label htmlFor='username'>UserName</label>
            <input type="text" id="username" name="username" value={data.username} onChange={handleinput}/>
            <br/>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" name="email" value={data.email} onChange={handleinput}/> <br/>

            <button type="Submit">Submit</button>
        </form>
    </>
  )
}

export default Forms