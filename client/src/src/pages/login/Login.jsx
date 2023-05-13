import React, { useState } from 'react'
import axios from "axios"
import "./Login.scss"
import newRequest from '../../utils/newRequest.js';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post("/auth/login", {
                username,
                password
            })
            localStorage.setItem("currentUser", JSON.stringify(res.data))
            navigate("/")
        } catch (err) {
            setError(err);
            console.log(err);
        }
    }
    return (
        <div className='login'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor=''>Username</label>
                <input name="username" type='text' placeholder='ezgi' onChange={e => setUserName(e.target.value)} />

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder='ezgi@gmail.com'
                    onChange={e => setPassword(e.target.value)}
                ></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login