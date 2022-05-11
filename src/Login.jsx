import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            navigate('/')
        }).catch(error => alert(error.message));
    }

    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=> {
            if(auth){
                navigate('/');
            }
        })
        .catch(error => alert(error.message));
    }
  return (
    <div className='login'>
        <Link to={'/'}>
          <img className='login_logo' src="data:image/jpeg;base64,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" alt="" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e =>setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />

                <button onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale.
                Please see our Privacy Policy, our Cookies Notice and our Internet-Based Ads Notice.
            </p>

            <button onClick={register} className='login_registerButton'>Create Your Amazon account</button>
        </div>
    </div>
  )
}

export default Login