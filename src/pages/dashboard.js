// import React from 'react'
import "./styles.css";
import userImage from "../images/icon.svg";
import BusinessIcon from "@mui/icons-material/Business";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user">
          <div className="user-image">
            <img src={userImage} alt="User" />
          </div>
          <div className="user-details">
            <h3>
              Welcome,<span> Developer</span>
            </h3>
            <h4>
              Position: <span>Employer</span>
            </h4>
            <ul className="bottom-section">
              <li>
                <div className="bottom-icon" id="bot-1">
                  <BusinessIcon className="custom-icon" />
                  <h6>ERP Africa Co</h6>
                </div>
              </li>
              <li>
                <div className="bottom-icon" id="bot-2">
                  <ManageAccountsIcon className="custom-icon" />
                  <h6>Manager</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dashboard-lowersection">dashboard-lowersection</div>
    </div>
  );
}
