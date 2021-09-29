import React from 'react'
import bell from '../Images/bell (1).png'
import user from '../Images/homepage-user.png'

function HomePageHeader() {
    return (
        <div className="homepage__main-top">
        <div className="homepage__user">
            <img src={bell} alt="notification alert" />
            <img src={user} alt="user" />
            <p>Jane Doe</p>
        </div>
    </div>
    )
}

export default HomePageHeader
