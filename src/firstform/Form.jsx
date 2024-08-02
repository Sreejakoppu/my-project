import React from 'react'
import { useState } from 'react'
import './form.css'
const Form = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        contact:'',
        gender:'',
        subject:'',
        resume:'',
        url:'',
        comments:'',
        textarea:''

    })
    console.log(data);
    const inputhandle=(e)=>{
        setData({
            ...data,
        [e.target.name]:e.target.value
        })
    }
    const submithandle=(e)=>{
        e.preventDefault();
        setData({
        username:'',
        email:'',
        contact:'',
        gender:'',
        subject:'',
        resume:'',
        url:'',
        comments:'',
        textarea:''
        })
    }

  return (
    <>
    <div class="container">
    <h1>Login Page</h1>
    <form onSubmit={submithandle}>
        <label htmlFor='Username'>Username</label>
        <input type="text" name="username" id="username" onChange={inputhandle}/> <br/>

        <label htmlFor='email'>Email</label>
        <input type="text" name="email" id="email" onChange={inputhandle}/> <br/>

        <label htmlFor='contact'>Contact</label>
        <input type="tel" name="contact" id="contact" onChange={inputhandle}/> <br/>

       <label htmlFor='gender'>Gender</label>
       <input type="radio" name="gender" id="gender" onChange={inputhandle}/>Male 
       <input type="radio" name="gender" id="gender" onChange={inputhandle}/>Female
       <input type="radio" name="gender" id="gender" onChange={inputhandle}/>Others <br/>

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={inputhandle}>
            <option value="DBMS">DBMS</option>
            <option value="DSA">DSA</option>
            <option value="OOP">OOP</option>
            <option value="OS">OS</option>
        </select> <br/>

      {/* file selection */}
      <label htmlFor="Resume">Resume</label>
      <input type="file" placeholder="Choose file" name="resume" id="resume" onChange={inputhandle}/> <br/>

      <label htmlFor="url">Github /</label>
      <input type="text" placeholder="GithubLink" name="url" id="url" onChange={inputhandle}/> <br/>

      <label htmlFor="comments">Comments</label>
      <textarea name="comments" id="comments" cols="30" rows="10" placeholder="add yourcomments" onChange={inputhandle}/> <br/>

      <button type="button" >Reset</button>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Form