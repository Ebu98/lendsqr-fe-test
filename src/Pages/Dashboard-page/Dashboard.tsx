import React from "react";
import CardList from "../../Components/Card/CardList";
import DashboardComponent from "../../Components/Dashboard";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <h3 className="header-title">Users</h3>
      <CardList />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
