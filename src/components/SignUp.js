import React,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import baseURL from "../config";


const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        //password_confirmation: '',
       
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
//console.log(handleChange);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
            console.log(response.data);
            // Handle successful registration
        } catch (error) {
            // Handle registration error
            console.error(error);
        }
       
    
    };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 my-5 offset-md-3">
          <div className="card">
            <div className="card-header text-center">Signup</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
            
                <div className="form-group my-1">
                  <label htmlFor="name">Name</label>
                 
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={handleChange}/>
                </div>
                <div className="form-group my-1">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange}/>
                </div>
                <div className="form-group my-1">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary my-2 text-center" onClick={Signup}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;