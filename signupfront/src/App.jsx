import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import "./app.css"

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
        const initialState = {
            name : "",
            username: "",
            email: "",
            password: ""
          };
        const clearState = () => {
            setInputs({ ...initialState });
        };
        

        axios.post('http://localhost:4000/app/signup',register)
        .then((response) => {console.log(response.data)},
        clearState(),
        alert("successfully login")
        )
    }

    // setInputs({
    //     name : "",
    //     username :"",
    //     email : "",
    //     password : ""
    // })

    const handleChange = (event)=> {
        const name = event.target.name 
        const value = event.target.value
        setInputs(values => ({...values,[name]:value}))
    }

    return(
        

        <div className='form-div'>
            <form className='form' onSubmit={handleSubmit}>
                <label className='inputClass'>Input your name here : 
                    <input className='inputField'
                    type='name'
                    name= 'name'
                    value={inputs.name || ""}
                    onChange = {handleChange}  />
                </label>
                <label className='inputClass'>Input your username :
                    <input className='inputField'
                    type= "text" 
                    name='username'
                    value={inputs.username || ""}
                    onChange = {handleChange} />
                </label>
                <label className='inputClass'>Input your email here : 
                    <input className='inputField'
                    type='email'
                    name= 'email'
                    value={inputs.email || ""}
                    onChange = {handleChange}  />
                </label>
                <label className='inputClass'>Input your password here :
                    <input className='inputField'
                    type='password' 
                    name= 'password'
                    value={inputs.password || ""}
                    onChange = {handleChange}  />
                </label>
                <input className='submitButton' type="submit"/>
                

            </form>
        </div>
    )
}

 
export default App;