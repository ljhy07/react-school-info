import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<section><LogIn /></section>} />
          <Route path='signup' element={<section><SignUp/></section>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App