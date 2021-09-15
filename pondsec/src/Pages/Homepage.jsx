import '../Styles/homepage.css'

import bell from '../Images/bell (1).png'
import user from '../Images/homepage-user.png'
import arrow from '../Images/arrow.png'
import greenArrow from '../Images/growth-arrow.png'
import activityTracker from '../Images/activity-tracker.png'
import pondImage from '../Images/pond-image.png'
import cloudImage from '../Images/cloud-image.png'
import cloudImage2 from '../Images/cloud2.png'
import phScale from '../Images/ph-scale.png'
import waterScale from '../Images/water-temp.png'
import SideNav from '../Components/SideNav'

function Homepage() {
    return (
        <div className="homepage__container">
      <SideNav/>
        <div className="homepage__main">
          <div className="homepage__main-top">
              <div className="homepage__user">
                  <img src={bell} alt="notification alert" />
                  <img src={user} alt="user" />
                  <p>Jane Doe</p>
              </div>
          </div>
          <div className="homepage__intro">
              <div className="homepage__intro-name">
              <h2> Hello, <span className="name">Jane</span></h2>
              <p>Manage the affairs of your fish pond</p>
              </div>
              <div className="homepage__intro">
                  <button className="intro-btn">Add Pond</button>
              </div>
          </div>
          <div className="homepage__pond-data">
              <div className="homepage__pond-weight">
                  <div className="homepage-mini-header">
                      <h6>Pond Alpha <span className="expand"> <img src={arrow} alt="expand" /></span></h6>
                     
                  </div>
                  <div className="pond-weight">
                      <h4>1280 <span className="weight-metric">kg</span></h4>
                     
                      <div className="growth">
                          <p> <span className="growth-value"><img src={greenArrow} alt="growth" /></span>+2kg</p>    
                  </div>   
                </div>
              </div>
              <div className="homepage__pond-distance">
                <div className="homepage-mini-header">
                    <h6>Distance to pond</h6>
                </div>
                <div className="distance">
                    <img src={activityTracker} alt="activity"/>
                    <p>No activity</p>
                </div>
                <div className="homepage__pond-image">
                    <img src={pondImage} alt="" />
                </div>
                </div>
          </div>
        <div className="homepage__pond-data2">
            <div className="homepage__pond-ph">
               <div className="homepage-mini-header">
                    <h6>Pond pH Level</h6>
                </div>
                <div className="pond-ph-i">
                    <img src={cloudImage} alt="" />
                    <img src={cloudImage2} alt="" />
                </div>
                <div className="homepage__ph-tracker">
                    <div className="tracker"></div>
                    <div className="ph-scale">
                        <img src={phScale} alt="pH scale" />
                        <ul className="ph-info">
                            <li> A pH level  &lt;7 is acidic</li>
                            <li>pH level of 7 is neutral</li>
                            <li>pH level  &gt;7 is alkaline</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="homepage__water-temp">
                <div className="homepage-mini-header">
                    <h6>Water Temperature</h6>
                </div>
                <div className="temperature_scale">
                    <img src={waterScale} alt="" />
                </div>

            </div>
        </div>
      
        </div>
        </div>
    )
}

export default Homepage
