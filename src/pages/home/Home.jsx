import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

import * as api from '../../api/user';

function Home(){
    const [is_login, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const log = () => {
        navigate('/login');
    }

    const sign = () => {
        navigate('/signup');
    }
    
    const logout = () => {
        setIsLogin(false);
        navigate('/')
    }

    // useEffect(()=>{
    //     let cookie = getCookie();
        
    //     if (cookie) setIsLogin(true);
    //     else setIsLogin(false);
    // }, []);

    if (is_login == false){
        return (
            <div id="home">
                <nav className="nav">
                    <button onClick={log}>Login</button>
                    <button onClick={sign}>SignUp</button>
                </nav>
            </div>
        );
    } else {
        return (
            <div id="home">
                <nav className="nav">
                    <button onClick={logout}>LogOut</button>
                </nav>
                <h1>{}님 환영합니다</h1>
                <h2>이메일 : {}</h2>
                <h2>비밀번호 : {}</h2>
            </div>
        );
    }
}

export default Home;