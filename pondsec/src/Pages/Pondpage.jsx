import '../Styles/homepage.css'
import HomePageHeader from '../Components/HomePageHeader'
import SideNav from '../Components/SideNav'
import { Link } from 'react-router-dom'
import arrow from '../Images/arrow.png'
import greenArrow from '../Images/growth-arrow.png'
import sideImg from '../Images/side-design.png'
import sideImgB from '../Images/side-design(blue).png'
import weightImg from '../Images/vector1.png'
import TempImg from '../Images/vector-temp.png'
import waterScale from '../Images/water-temp.png'
import waterTemp from '../Images/water-temp2.png'
import activityTracker from '../Images/activity-tracker.png'
import pondImage from '../Images/pond-image.png'
import pondImg from '../Images/pond-img.png'
import twosixtydegcircle from  '../Images/260red.png'
import alarm from '../Images/alarm.png'
import inflow from '../Images/vector-green.png'
import outflow from '../Images/vector-red.png'
import pHlogo from '../Images/VectorpH.png'
import sideImgC from '../Images/side-design(long).png'


function Pondpage() {
    return (
        <div className="homepage__container">
            <SideNav/>
        <div className="homepage__main">
            <HomePageHeader/>
            <div className="homepage__intro">
            <div className="homepage__intro-name">
              <h2 className="bold_text"> Pond</h2>
              <div className="pond_actions">
                  <button className="pond_name"> Pond Alpha <span className="expand"> <img src={arrow} alt="expand" /></span> </button>
                  <button className="export_btn"> Export </button>
              </div>
            </div>
              <div className="homepage_button">
                  <button className="intro-btn"> <Link className="link-btn" to="/pond"> Add Pond </Link></button>
              </div>
            </div>
            <div className="pondpage">
            <div className="pondpage_pond-data data-left">
                <div className="pond-data">
                    <div className="pond-data-top">
                        <div className="homepage-mini-header">
                            <h6><img src={weightImg} alt="temp" className="mini-logo"/>Weight</h6></div>
                        <button className="duration">Monthly <span className="expand"> <img src={arrow} alt="expand" /></span></button>
                    </div>
                    <div className="pond-weight">
                      <h4>4080<span className="weight-metric">kg</span></h4>
                     
                      <div className="growth">
                          <p> <span className="growth-value"><img src={greenArrow} alt="growth" /></span>+2kg</p>    
                  </div>   
                </div>
                <img className="side_design" src={sideImg} alt="deisgn"/>
                </div>
                <div className="pond-data">
                <div className="pond-data-top">
                        <div className="homepage-mini-header">
                            <h6> <img src={TempImg} alt="temp" className="mini-logo"/>Temperature</h6></div>
                        <button className="duration">Monthly <span className="expand"> <img src={arrow} alt="expand" /></span></button>
                    </div> 
                    <div className="temperature_scale">
                    <img className="waterScale" src={waterScale} alt="scale" />
                    <img className="waterScale2" src={waterTemp} alt="scale" />
                </div>
                <img className="side_design" src={sideImgB} alt="deisgn"/>
                </div>
                <div className="pond-data">
                <div className="homepage-mini-header">
                    <h6>Distance to pond</h6>
                </div>
               <div className="pond-distance">
               <div className="distance">
                    <img src={activityTracker} alt="activity"/>
                    <p>No activity</p>
                </div>
                <div className="homepage__pond-image">
                    <img src={pondImg} alt="pond" className="pondImgOut"/>
                    <img src={pondImage} alt="pond" className="pondImg"/>
                    <div className="round-circle">
                        <div className="alarmContainer">
                        <img src={twosixtydegcircle} alt="alarm" className="alarmCont"/>
                        <img src={alarm} alt="alarm" className="alarm" />
                        </div>
                       
                    </div>
                </div>
               </div>
                </div>
                <div className="pond-data">
                    <div className="homepage-mini-header">
                        <h6>Water Control</h6>
                    </div>
                    <p>Drains and Refills in 1 hour 30 minutes</p>
                    <div className="pond-control">
                        <div className="flows">
                            <div className="flow">
                            <img src={inflow} alt="water inflow display" />
                            </div> 
                            <h6>Inflow</h6>
                        </div>
                        <div className="flows">
                        <div className="flow">
                            <img src={outflow} alt="water inflow display" />
                            <img src={twosixtydegcircle} alt="" className="red-circle" />
                            </div> 
                            <h6>Outflow</h6>
                        </div>
                    </div>
                </div>
                <div className="pond-data distance-graph">
                <div className="pond-data-top">
                        <div className="homepage-mini-header">
                            <h6>Distance to pond</h6></div>
                        <button className="duration">Monthly <span className="expand"> <img src={arrow} alt="expand" /></span></button>
                    </div> 
                </div>
            </div>
            <div className="pondpage-pondpH">
               <div className="pondpH">
               <div className="pond-data-top">
                        <div className="homepage-mini-header">
                            <h6> <img src={pHlogo} alt="temp" className="mini-logo"/>pH Levels</h6></div>
                        <button className="duration">Monthly <span className="expand"> <img src={arrow} alt="expand" /></span></button>
                    </div>
                    <img className="side_design" src={sideImgC} alt="deisgn"/>  
               </div>
            </div>
            </div>
           
        </div>
        </div>
    )
}

export default Pondpage
