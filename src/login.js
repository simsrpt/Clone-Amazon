
import React, { useState } from 'react'
import './login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then ( (_auth)    => {
                history.push('/')
            })
        
            .catch (error => alert(error.messsage))

        //firbase login 
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user 
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.messsage))

        //firebase register 
    }
    return (
        <div className='login'>
            <Link to='/'> 
            <img className='login-logo'
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
             </Link>
             <div className='login-container'>
                 <h1>Sign In </h1>
                 <form> 
                 <h5>
                     Email: 
                 </h5>
                 <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                 <h5>Password</h5>
                 <input type='password' value={password} onChange={e => setPassword(e.target.value)} /> <br/>
                 <button type='submit' onClick={signIn} className='loginbtn'>Sign-In</button>
 
                 </form>
                 <p>
                    By signing-in you agree to the AMAZON FAKE CLONE 
                    Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies 
                    Notice and our Interest-Based Ads Notice.
                </p>
                
                 <button onClick={register} className='registerbtn'>Create A  Account </button>
             </div>
        </div>
    )
}

export default Login
