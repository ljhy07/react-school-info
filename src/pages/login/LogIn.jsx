import './login.css';
import * as api from '../../api/user';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import googleImg from '../../assets/google-img.png';

function LogIn(){
    const navigate = useNavigate();

    const sign = () => { 
        navigate('/signup');
    }

    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');

    const handleLogin = () => {
        const userData = JSON.parse(localStorage.getItem(userId));
        if (userData && userData.password === pwd) {
            navigate('/', { state: { userId: userId } });
        } else {
            alert("로그인 실패");
            window.location.reload();
        }
    };

    return (
        <div id="login">
            <div className='login-text-box'>
                <p className='login-text'>Log in</p>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='id' onChange={(e) => setUserId(e.target.value)} />
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
            <div className='signup-link-box' onClick={sign}>
                <p className='signup-text'>계정이 없으신가요? <a className='signup-href-text'>그러면 회원가입을 하세요.</a></p>
            </div>
            <div className='submit-box'>
                <button type='submit' className='submit-button' onClick={handleLogin}>Log in</button>
            </div>
        </div>
    );
}

export default LogIn;
