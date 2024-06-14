import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from './Signup';
import LogIn from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<SignIn/>} />
            <Route path='/login' element={<LogIn/>} />
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
