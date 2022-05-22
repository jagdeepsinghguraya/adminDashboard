import React, { useState } from "react";
import "./Menu.css";
import {SidebarData, SidebarContact, SidebarAccount} from './data/Data.js'
import { UilBars } from '@iconscout/react-unicons';
import { motion } from "framer-motion";


const Sidebar  = (props) => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >      

      <div className="menu">
      <div className="logo">
        <span>
          <span>Dash</span>board
        </span>
      </div>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <h4 className="heading">Contact</h4>
        <div className="Updates">
      {SidebarContact.map((SidebarContact, index) => {
        return (
          <div  
          key={SidebarContact.name} className="SidebarContact">
            <div className="left">
              <img src={SidebarContact.img} alt="profile" />
            </div>
            <div className="right">
              <h3>{SidebarContact.name}</h3>
            </div>
          </div>
        );
      })}
      
      {SidebarAccount.map((item, index) => {
          return (
            <div className={"menuItem"} key={index} >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
    </div>
      </div>
      </motion.div>
    </>
  );
};

export default Sidebar ;