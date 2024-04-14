import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "./../../styles/Dashboard.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <h1>Dashboard</h1>
      <div className="container-fluid m-3 p-3 dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{auth?.user?.name}</h3>
                <p className="card-text">Email: {auth?.user?.email}</p>
                <p className="card-text">Address: {auth?.user?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
