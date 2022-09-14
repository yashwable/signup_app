import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

function App(){
    
    const [inputs,setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const register = {
            fullName : inputs.name,
            username : inputs.username,
            email : inputs.email,
            password : inputs.password
        }

        axios.post('http://localhost:4000/app/signup',register)
        .then((response) => {console.log(response.data)})
    }

    const handleChange = (event)=> {
        const name = event.target.name 
        const value = event.target.value
        setInputs(values => ({...values,[name]:value}))
    }

    return(
        

        <div className='form-div'>
            <form className='form' onSubmit={handleSubmit}>
            <label>Input your name here 
                    <input 
                    type='name'
                    name= 'name'
                    value={inputs.name || ""}
                    onChange = {handleChange}  />
                </label>
                <label>Input your username
                    <input 
                    type= "text" 
                    name='username'
                    value={inputs.username || ""}
                    onChange = {handleChange} />
                </label>
                <label>Input your email here 
                    <input 
                    type='email'
                    name= 'email'
                    value={inputs.email || ""}
                    onChange = {handleChange}  />
                </label>
                <label>Input your password here 
                    <input 
                    type='password'
                    name= 'password'
                    value={inputs.password || ""}
                    onChange = {handleChange}  />
                </label>
                <input type="submit"/>
                

            </form>
        </div>
    )
}

 
export default App;