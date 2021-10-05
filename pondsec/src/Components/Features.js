import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaWifi} from 'react-icons/fa'
import { FaSquare } from 'react-icons/fa'
import '../Styles/Reg.css'
import backgroundImage from '../Images/background.jpg'


const Features = () => {

 const [values, setValues] = useState({
  name:"",
  textarea:"",
 })
const handleChange = (event) => {
 setValues({
  ...values,
  [event.target.name]: event.target.value,
 });
};

 const handleFormSubmit = (event) => {
  event.preventDefault();
 };

    return (
     <div className="container" style={{
                   background: `url(${backgroundImage})`,
                   backgroundPosition: `center`,
                   backgroundSize: `cover`,
                   backgroundRepeat: `no-repeat`
                   }} >
      <div className="app-wrapper">
             <h2 className="title">Add Pond</h2>
            <form action="/features">

                <p>
                    <label> Farm Name</label><br/>
                    <input type="text" className="input" name="name" placeholder="Enter pond name" value={values.name} onChange={handleChange}/>
                </p>

                <p>
                    <label>Number of Ponds</label><br/>
                    <input type="number" className="input" name="name" placeholder="Enter number of ponds" value={values.name} onChange={handleChange}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea placeholder="Enter pond description"  cols="30" rows="5" className="textarea"> </textarea>
                    </p>
                    
                <p>
                    <button className="submit" onClick={handleFormSubmit}>Next</button>
                </p>
                

            </form>
            
        </div>
        </div>
    )
}

export default Features;
