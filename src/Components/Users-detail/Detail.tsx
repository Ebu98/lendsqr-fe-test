import React from "react";
import "./detail.scss";

function UsersDetail({details}:any) {
  return (
    <section className="user-detail">
    {details.map((detail:any) => { 
        return(
    <div >
      <h5>personal information</h5>
      
        
      <div className="personal-info">
        <div>
          <p>Full Name</p>
          <h4>{detail.profile.firstName}{detail.profile.lastName}</h4>
        </div>
        <div>
          <p>Phone Number</p>
          <h4>{detail.profile.phoneNumber}</h4>
        </div>
        <div>
          <p>Email Address</p>
          <h4>{detail.email}</h4>
        </div>
        <div>
          <p>Bvn</p>
          <h4>{detail.profile.bvn}</h4>
        </div>
        <div>
          <p>Gender</p>
          <h4>{detail.profile.gender}</h4>
        </div>
        <div>
          <p>Marital Status</p>
          <h4>{detail.maritalStatus}</h4>
        </div>
        <div>
          <p>children</p>
          <h4>None</h4>
        </div>
        <div>
          <p>Type of residence</p>
          <h4>{detail.maritalStatus}</h4>
        </div>
      </div>
      
      <div className="line" />
      <h5>Education and Employment</h5>
      <div className="personal-info education-employment">
        <div>
          <p>level of education</p>
          <h4>{detail.education.level}</h4>
        </div>
        <div>
          <p>employment status</p>
          <h4>{detail.education.employmentStatus}</h4>
        </div>
        <div>
          <p>sector of employment</p>
          <h4>{detail.education.sector}</h4>
        </div>
        <div>
          <p>Duration of employment</p>
          <h4>{detail.education.duration}</h4>
        </div>
        <div>
          <p>office email</p>
          <h4>{detail.education.officeEmail}</h4>
        </div>
        <div>
          <p>Monthly income</p>
          <h4>{detail.education.monthlyIncome}</h4>
        </div>
        <div>
          <p>loan repayment</p>
          <h4>{detail.education.loanRepayment}</h4>
        </div>
      </div>
      <div className="line" />
      <h5>Socials</h5>
      <div className="personal-info">
        <div>
          <p>Twitter</p>
          <h4>{detail.socials.twitter}</h4>
        </div>
        <div>
          <p>Facebook</p>
          <h4>{detail.socials.facebook}</h4>
        </div>
        <div>
          <p>Instagram</p>
          <h4>{detail.socials.instagram}</h4>
        </div>
      </div>
      <div className="line" />

      <h5>Guarantor</h5>
      <div className="personal-info">
        <div>
          <p>Full Name</p>
          <h4>{detail.guarantor.firstName} {detail.guarantor.lastName}</h4>
        </div>
        <div>
          <p>Phone Number</p>
          <h4>{detail.guarantor.phoneNumber}</h4>
        </div>
        <div>
          <p>Address</p>
          <h4>{detail.guarantor.address}</h4>
        </div>
        <div>
          <p>Relationship</p>
          <h4>Single</h4>
        </div>
      </div>
      <div className="line" />
      <div className="personal-info" />
      <div className="personal-info">
      <div>
          <p>Full Name</p>
          <h4>{detail.guarantor.firstName} {detail.guarantor.lastName}</h4>
        </div>
        <div>
          <p>Phone Number</p>
          <h4>{detail.guarantor.phoneNumber}</h4>
        </div>
        <div>
          <p>Address</p>
          <h4>{detail.guarantor.address}</h4>
        </div>
        <div>
          <p>Relationship</p>
          <h4>Single</h4>
        </div>
      </div>
      
    </div>
    )})}
    </section>
  );
}

export default UsersDetail;
