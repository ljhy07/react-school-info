import './signup.css';
import * as api from '../../api/user';
import { useNavigate } from "react-router-dom";

import googleImg from '../../assets/google-img.png';

function SignUp(){
    const navigate = useNavigate();

    const log = () => {
        navigate('/login');
    }

    return (
        <div id="signup">
            <div className='signup-text-box'>
                <p className='signup-text'>Sign Up</p>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='id' />
                <input type='text' placeholder='email' />
                <input type='text' placeholder='password' />
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
                <button type='submit' className='submit-button' onClick={api.signup}>Log in</button>
            </div>
        </div>
    );
}

export default SignUp;