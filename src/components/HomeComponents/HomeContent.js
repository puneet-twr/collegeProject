import React from 'react';
import './HomeContent.css';
function HomeContent({phone,email}) {
  return (
    <div className="HomeContent">
        <div className="userInfo">
        Logged in as {email || phone}
        </div>
    </div>
  )
}

export default HomeContent;