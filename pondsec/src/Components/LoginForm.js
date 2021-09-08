import React, {useState} from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import validation from './validation'
import logo from '../Images/logo.png'
import BackgroundImage from '../Images/background.jpg'

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
               <div>
                <div>
            <p><Link to="/">Back to Homepage</Link>.</p>
            <p> <img src={logo} alt="pondsec logo"/></p> 
            </div>
            <h2>Login</h2>
            <form action="/login">
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
                    <Link to="#"><label>Forget password?</label></Link>
                    </p>

                <p>
                    <button onClick={handleFormSubmit}>Login</button>
                </p>
                <p>No Account Yet? <Link to="/signup">Create an account</Link>.</p>
                

            </form>
            
        </div>
 );
}

export default LoginForm;