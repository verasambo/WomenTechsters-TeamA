import React, {useState} from "react";
import validation from "./validations";
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'

const SignupForm = () => {

 const [values, setValues] = useState({
  fullname:"",
  email:"",
  password:"",
 })

 const [errors, setErrors] = useState({});


const handleChange = (event) => {
 setValues({
  ...values,
  [event.target.name]: event.target.value,
 });
};

 const handleFormSubmit = (event) => {
  event.preventDefault();
  setErrors(validation(values));
 };
 return(
  <div>
                <div>
            <p className=""><Link to="/"> Back to Homepage</Link>.</p>
            <p> <img src={logo} alt="pondsec logo"/></p> 
            </div>
            <h2>Signup</h2>
            <form action="/signup">
                <p>
                    <label> Email </label><br/>
                    <input type="text" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="error"> {errors.email}</p>}
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={values.password} onChange={handleChange}/>{errors.password && <p className="error"> {errors.password}</p>}

                    <br/>
                    <input type="checkbox" name="checkbox" id="checkbox" required /><span> Remember Me
                    
                    </span>
                    
                    </p>

                <p>
                    <button onClick={handleFormSubmit}>Signup</button>
                </p>
                <p>Have an Account? <Link to="/login">Login</Link>.</p>
                

            </form>
            
        </div>
 );
}

export default SignupForm