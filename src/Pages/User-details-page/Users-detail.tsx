import React,{useState, useEffect} from "react";
import UsersDetail from "../../Components/Users-detail/Detail";
import User from "../../Components/Users-detail/User";
import axios from 'axios'
import "./Users-detail.scss";

const DetailsDashboard = () => {
  
  const [userData, setUserData] = useState([])
  const fetchUserData = () =>{
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then((response) => {setUserData(response.data) 
      
    
    })
    .catch ((err)=>{
      console.log(err.response)
    })
  }
  
  useEffect(() =>{
    fetchUserData()
  },[])
  return (
    <div className="dashboard-details">
      <User />
      <UsersDetail details={userData}/>
    </div>
  );
};

export default DetailsDashboard;
