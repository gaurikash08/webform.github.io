import React, { useState } from 'react'
import "./style.css"

const Form = () => {
  const [name,setName] =useState("");
  const[mobile,setMobile]=useState("")
  const[email,setEmail]=useState("");

  const onSubmitForm=()=>{
    
  }

  const onInputChange=(e)=>{
    setName(e.target.value)
    setMobile(e.target.value)
    setEmail(e.target.value)
  }
  
  return (
    <>
    <form action="">
    <label htmlFor="Name">Name
    <input className="input"  type="text"  value={name} onChange={onInputChange}/></label><br />

    <label htmlFor="Mobile">Mobile
    <input className="input" type="Number"value={mobile} onChange={onInputChange} /></label><br />

    <label htmlFor="Email">Email
    <input className="input" type="email" value={email} onChange={onInputChange}/></label><br />
    <button className='button-submit' type='submit' onSubmit={onSubmitForm}>Submit</button>
    </form>
    </>
  )
}

export default Form