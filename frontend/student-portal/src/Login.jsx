import React, {useState} from "react";
import '../src/App.css';
import Time from './Time';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

      ///function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', {email, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home');
            }
        })
        .catch(err => console.log(err));
    }

     return (
        <>
        <div className="container vh-100 d-flex">
            <div className="row justify-content-center rounded p-3">
                <div className="col-md-12">
                    <h5 className="text-white"><Time/> Please Log In</h5>
                    <form onSubmit={handleSubmit}>
                        <div mb-3>
                           <label for="exampleInputEmail1" className="form-label">Email:</label>
                           <input type="email" placeholder='Enter Email' className="form-control" name='email'
                                id="InputEmail1" aria-describedby="emailHelp"
                              onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div mb-3>
                           <label for="exampleInputEmail1" className="form-label">Password:</label>
                           <input type="password" placeholder='Enter Password' className="form-control" name='userName'
                                id="InputPassword" aria-describedby="emailHelp"
                              onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-success w-100 pb-2'>Log In</button>
                        <p>Create an account?</p>
                    </form>
                    <Link to="/signup" className='btn btn-default bg-light w-100 pb-2'>
                    Sign Up
                 </Link>
                </div>
                   
            </div>
    </div>   
        </>
    )
}

export default Login;