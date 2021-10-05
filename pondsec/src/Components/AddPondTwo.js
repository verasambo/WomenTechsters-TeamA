import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaWifi} from 'react-icons/fa'
import { FaSquare } from 'react-icons/fa'
import '../Styles/Reg.css'
import backgroundImage from '../Images/background.jpg'


const AddPondTwo = () => {

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
            <form action="/add-pond">

            <p>
                    <Link to ="/microcontroller"><button className="sub_btn" onClick={handleFormSubmit}> <FaWifi/>                                       Connect Micro-controller</button> </Link>
                </p>

               <hr/>

               
                <p>
                    <label>Device ID</label><br/>
                    <input type="text" className="input" name="name" placeholder="Enter pond name" value={values.name} onChange={handleChange}/>
                </p>



                <p>
                    <button className="submit" onClick={handleFormSubmit}>Add Pond</button>
                </p>
               </form>

                
            
        </div>
        </div>
    )
}

export default AddPondTwo;
