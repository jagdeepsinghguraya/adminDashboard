import React from 'react'
import './DashboardHeader.css'
const DashboardHeader = () => {
  return (
    <>
    <div className="DashboardHeader">      
      <div className="left">
        <h1>Application</h1>
      </div>
      <div className="right">
        <div className="box">Edit</div>
        <div className="box">Delete</div>
      </div>
    </div>

    <ul>
      <li><a href="#">All Files</a></li>
      <li><a href="#">Shared</a></li>
      <li><a href="#">File Requests</a></li>
    </ul>
    </>
  )
}

export default DashboardHeader