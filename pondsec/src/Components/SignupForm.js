import React, {useState} from "react";
import validation from "./validations";
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import '../Styles/Reg.css'
import backgroundImage from '../Images/background.jpg'
import { FaAngleLeft } from 'react-icons/fa'

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
         <div className="container" style={{
                   background: `url(${backgroundImage})`,
                   backgroundPosition: `center`,
                   backgroundSize: `cover`,
                   backgroundRepeat: `no-repeat`
                   }}>

                   <div className="app-wrapper">

                <div className="home-log">
            <p className="app-home"><Link to="/"> <FaAngleLeft/> Back to Homepage</Link>.</p>
            <p className="app-logo"> <img src={logo} alt="pondsec logo"/></p>

            </div>

            <h2 className="title">Signup</h2>

            <form action="/signup">
                <p>
                    <label className="email"> Email </label><br/>
                    <input className="input" type="text" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="error"> {errors.email}</p>}
                </p>
                <p>
                    <label>Password</label><br/>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>{errors.password && <p className="error"> {errors.password}</p>}

                    <br/>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></span>.
                    
            </p>

                <p>
                    <button className="submit" onClick={handleFormSubmit}>Signup</button>
                </p>

                <p className="account-check">Have an account? <Link to="/login">Login</Link>.</p>
                

            </form>
            </div>
            
        </div>
 );
}

export default SignupForm