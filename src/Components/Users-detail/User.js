import React from "react";
import user from "../../assests/image/user-profile.png";
import { ReactComponent as StarFilledIcon } from "../../assests/icon/star-filled.svg";
import { ReactComponent as StarIcon } from "../../assests/icon/star.svg";
import "./User.scss";

function User() {
  return (
    <div className="user-container">
      <div className="user-profile-infor">
        <div className="profile-image">
          <img src={user} alt="" />
        </div>
        <div className="profile-text">
          <div>
            <h3>Grace Effiom</h3>
            <p>LSQFf587g90</p>
          </div>
          <div className="line" />
          <div>
            <p>User’s Tier</p>
            <div className="stars">
              <StarFilledIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <div className="line" />
          <div>
            <h3>₦200,000.00</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
      </div>
      <div className="user-infor-wrapper">
        <div className="user-infor">
          <h4 className="active">General Details</h4>
          <h4>Documents</h4>
          <h4>Bank Details</h4>
          <h4>Loans</h4>
          <h4>Savings</h4>
          <h4>App And System</h4>
        </div>
      </div>
    </div>
  );
}

export default User;
