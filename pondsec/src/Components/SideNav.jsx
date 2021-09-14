import React from 'react'
import Logo from '../Images/logo-2.png'
import { Link } from 'react-router-dom'
import home from '../Images/vector-home.png'
import pond from '../Images/vector-pond.png'
import report from '../Images/vector-report.png'
import logout from '../Images/vector-logout.png'
import news from '../Images/vector-news.png'

function SideNav() {
    return (
        <>
              <div className="homepage__side"> 
            <div id="logo">
                <img src={Logo} alt="pondsec logo" />
            </div>
            <div className="homepage__side-nav">
                <ul className="homepage__side-nav-links">
                    <li>
                        <Link to='/home' className="nav-link"> 
                        <img src={home} alt="home" />
                        Home</Link>
                    </li>
                    <li>
                        <Link to='/pond' className="nav-link"> 
                        <img src={pond} alt="link to pond" />Pond</Link>
                    </li>
                    <li>
                        <Link to='/news' className="nav-link">
                        <img src={news} alt="link to news" />News</Link>
                    </li>
                    <li>
                        <Link to='/report' className="nav-link"> 
                        <img src={report} alt="link to reports" />Report</Link>
                    </li>
                </ul>
                <div className="homepage__side-bottom">
                <Link to='/login' className="nav-link"> 
                <img src={logout} alt="link to logout" />Logout</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideNav
