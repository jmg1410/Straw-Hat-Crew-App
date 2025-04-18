import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../redux/authSlice';
import jolly from '../Assets/jolly.jpg'

const Login = () => {
    const [creds, setCreds] = useState({username:'', password:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
// with handle change keeps track on changes when user types
    
const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name] : e.target.value
        })
    }
//simulated log in
const handleSubmit = async (e) => {
    e.preventDefault();
    if(creds.username === 'luffy' && creds.password === 'gomugomuno') {
        const fakeToken = 'strawhat-crew-123';
        localStorage.setItem('token', fakeToken);
        dispatch(setToken(fakeToken));
        navigate('/dashboard');
    } else {
        alert('Login failed: Invalid credentials')
    }
}
return (
    <div className='login-page' style={{backgroundImage: `url(${jolly})`}}>
        <form className='login-form-container'
        onSubmit={handleSubmit} 
        autoComplete='off'
        autoSave='off'
        >
        <h2 className='login-form-container'>Login to access the Straw Hat crew</h2>
         <input
         type='text'
         name='username'
         placeholder='username'
         value={creds.username}
         onChange={handleChange}
         /><br />
         <input 
         type='password'
         name='password'
         placeholder='password'
         value={creds.password}
         onChange={handleChange}
         /><br />
         <button type='submit' data-testid='loginBtn'>Login</button>
         
        </form>
    </div>
)
}

export default Login;