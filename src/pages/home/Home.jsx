import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './home.css';

function Home() {
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const log = () => {
        navigate('/login');
    };

    const sign = () => {
        navigate('/signup');
    };
    
    const logout = () => {
        setIsLogin(false);
        setUserId(null);
        navigate('/');
    };

    useEffect(() => {
        if (location.state && location.state.userId) {
            setUserId(location.state.userId);
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [location.state]);

    if (!isLogin) {
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
                <h1>{userId}님 환영합니다</h1>
            </div>
        );
    }
}

export default Home