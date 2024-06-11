import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from './Signup';
import LogIn from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<SignIn/>} />
            <Route path='/login' element={<LogIn/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
