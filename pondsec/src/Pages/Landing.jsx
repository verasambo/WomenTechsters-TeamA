import React from 'react'
import Header from '../Components/Header'
import Button from '../Components/Button'
import '../Styles/landing.css'
import fish from '../Images/image1.png'
import fish2 from '../Images/feature-fish.png'
import fish3a from '../Images/feature-fish1a.png'
import fish3b from '../Images/feature-fish1b.png'

function Landing() {
    return (
        <>
        <Header />
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="sub-header">
                    Fish Farming management<br/> at your fingertips
                </h1>
                <p className="sub-text">
                    Increased fish output while minimising your operational cost
                </p>
                <Button className="register-btn">Get Started</Button>
            </div>
         
        </section>

        <section className="description-section">
            <div className="dots desc-top-dots">
                <div className="line 1">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 2">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 3">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 4">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 5">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                
            </div>
            <div className="desc-bg-circles">
                <div className="circle big">
                <div className="circle small">
                <div className="circle smaller"></div>
                </div>
                </div>
               
                
            </div>

            <div className="description">
                <div className="desc-image">
                <img src={fish} alt="fish" />
                </div>
                <div className="desc-text">
                    <h1 className="sub-header">
                    Proven solution for fish farmers
                    </h1>
                    <p className="sub-text">
                    PondSec acts as your eyes and ears in the pond, so you can enjoy more detail on what's happening in your backyard and beyond. PondSec is a helpful tool for pond owners that want access to real-time updates of their ponds.
                    </p>
                </div> 
            </div>
            <div className="dots desc-bottom-dots">
            <div className="line 1">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 2">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 3">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 4">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="line 5">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </section>
        <section className="features">
        <div className="feature-text">
            <h1 className="sub-header">
                Features
            </h1>
            <p className="sub-text">
            Securely monitor your pond with Pondsec. Learn, share and compare information, upload your pond’s photos, and become part of a community.
            </p>

        </div>
        <div className="feature__list">
        <div className="feature_block">
                <div className="feature_figure">

                </div>
                <div className="feature-desc">
                    <h2 className="mini-sub-header">
                        
                    </h2>
                    <p className="mini-sub-text">
                        
                    </p>
                </div>
            </div>
            <div className="feature_block">
                <div className="feature_figure">
                    <img src={fish2} alt="a fish" />
                </div>
                <div className="feature-desc">
                    <h2 className="mini-sub-header">
                    Automate the fish health analytics 
                    </h2>
                    <p className="mini-sub-text">

                    Fish farmers want to know quickly when their fish are sick so they can take action. We’re helping them by developing an app to spot diseases quickly.
                    We’re trying to help fish farmers by collecting data to make sure their fish are healthy.
                    </p>
                </div>
            </div>
            <div className="feature_block">
                <div className="feature_figure">
                    <img src={fish3a} alt="a fish" />
                    <img src={fish3b} alt="a fish" />
                </div>
                <div className="feature-desc">
                    <h2 className="mini-sub-header">
                    Ensure optimal living quality for your fish  
                    </h2>
                    <p className="mini-sub-text">
                    Ensuring that your fish live in optimal conditions, including the right climate, the right amount of food, and the right type of water.   
                    </p>
                </div>
            </div>
            <div className="feature_block">
                <div className="feature_figure">

                </div>
                <div className="feature-desc">
                    <h2 className="mini-sub-header">
                        
                    </h2>
                    <p className="mini-sub-text">
                        
                    </p>
                </div>
            </div>
        </div>
        <Button className="feature-register-btn" > Create an account </Button>
        </section>
        </>
    )
}

export default Landing
