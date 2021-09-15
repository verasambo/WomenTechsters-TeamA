import React, {useState} from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import validation from './validations'
import '../Styles/Reg.css'
import backgroundImage from '../Images/background.jpg'



const LoginForm = () => {

 const [values, setValues] = useState({
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
            <p className="app-home"><Link to="/">Back to Homepage</Link></p>

            <p className="app-logo"> <img src={logo} alt="pondsec logo"/></p> 

            </div>

            <h2 className="title">Login</h2>
            <form action="/login">
                <p>
                    <label className="email"> Email </label><br/>
                    <input className="input" type="text" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="error"> {errors.email}</p>}
                </p>

                <p>
                    <label className="password">Password</label><br/>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>{errors.password && <p className="error"> {errors.password}</p>}

                    <br/>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span> Remember Me
                    
                    </span>
                    <Link to="#"><label className="forgot-password">Forgot password?</label></Link>
                    </p>

                <p>
                    <button className="submit" onClick={handleFormSubmit}>Login</button>
                </p>
                <p className="account-check">No account yet? <Link to="/signup">Create one</Link></p>
                

            </form>
            </div>
            
        </div>
        
 );
}

export default LoginForm;