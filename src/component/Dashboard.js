import React from "react";
import Table from './Table'
import "./Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import Cards from "./Cards";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardHeader />      
      <Cards />
      <Table />
    </div>
  );
};

export default Dashboard;