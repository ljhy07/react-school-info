import './signup.css';
import * as api from '../../api/user';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import googleImg from '../../assets/google-img.png';

function SignUp(){
    const navigate = useNavigate();

    const log = () => {
        navigate('/login');
    }

    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <div id="signup">
            <div className='signup-text-box'>
                <p className='signup-text'>Sign Up</p>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='id' onChange={(e) => setUserId(e.target.value)} />
                <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' onChange={(e) => setPwd(e.target.value)} />
            </div>
            <div className='line-box'>
                Or continue with <div className='line' />
            </div>
            <div className='oauth-box' onClick={api.oauth}>
                <div className='img-box'>
                    <img className='img' src={googleImg} alt='googleOauth' />
                </div>
            </div>  
            <div className='login-link-box' onClick={log}>
                <p className='login-text'>계정이 있으신가요? <a className='login-href-text'>그러면 로그인을 하세요.</a></p>
            </div>
            <div className='submit-box'>
                <button type='submit' className='submit-button' onClick={() => {
                    console.log(userId, email, pwd);
                    localStorage.setItem(userId, JSON.stringify({"email": email, "password":pwd}));
                    alert("회원가입 완료");
                    navigate('/');
                }}>Log in</button>
            </div>
        </div>
    );
}

export default SignUp;