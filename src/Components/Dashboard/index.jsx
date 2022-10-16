import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ReactComponent as DropIcon } from "../../assests/icon/dropdown.svg";
import { ReactComponent as DotsIcon } from "../../assests/icon/v-dots.svg";
import { ReactComponent as EyeIcon } from "../../assests/icon/view-eye.svg";
import { ReactComponent as BlacklistIcon } from "../../assests/icon/blacklist-user.svg";
import { ReactComponent as ActivateIcon } from "../../assests/icon/activate-user.svg";
import "./dashboard.scss";
import DropdownInput from "../Filter/DropdownInput";


const DotTD = () => {
  const [tableDrop, setTableDrop] = useState(false);
  return (
    <td className="dot">
      <div
        className={`dropdown ${tableDrop ? "show" : ""}`}
        onClick={() => setTableDrop(!tableDrop)}
      >
        <DotsIcon />
        <div className="dropdown-content">
          <p>
            <EyeIcon /> View Details
          </p>
          <p>
            <BlacklistIcon /> Blacklist User
          </p>
          <p>
            <ActivateIcon /> Activate User
          </p>
        </div>
      </div>
    </td>
  );
};

const HeaderDropdown = ({ text, icon: Icon }) => {
  const [tableDrop, setTableDrop] = useState(false);
  return (
    <th key={text}>
      <div className={`dropdown ${tableDrop ? "show" : ""}`}>
        <div onClick={() => setTableDrop(!tableDrop)}>
          {text} <Icon />
        </div>
        <div className="dropdown-content">
          <DropdownInput />
        </div>
      </div>
    </th>
  );
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const status = ["pending", "active", "inactive", "blacklisted"];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const fetchUsers = () => {
      setLoading(true);
      axios
        .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((response) => {
          setLoading(false);
          const format = response.data?.map(
            ({ id, orgName, userName, phoneNumber, email, createdAt }) => ({
              id,
              orgName,
              userName,
              phoneNumber,
              email,
              createdAt: moment(createdAt).format("LLL"),
              status: status[getRandomInt(0, 3)],
            })
          );
          setUsers(format);
          console.log(response.data);
        })
        .catch((error) => {
          setLoading(false);
          setErrors(error?.response?.data || "Sorry, something went wrong!");
        });
    };
    fetchUsers();
  }, []);
  const titles = [
    {
      icon: DropIcon,
      text: "organization",
      col: "orgName",
    },
    {
      icon: DropIcon,
      text: "Username",
      col: "userName",
    },
    {
      icon: DropIcon,
      text: "Email",
      col: "email",
    },
    {
      icon: DropIcon,
      text: "Phone number",
      col: "phoneNumber",
    },
    {
      icon: DropIcon,
      text: "Date joined",
      col: "createdAt",
    },
    {
      icon: DropIcon,
      text: "Status",
      col: "status",
    },
  ];

  return (
    <section className="mainContents">
      {users.length && !loading ? (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {titles.map(({ text, icon }) => (
                  <HeaderDropdown key={text} text={text} icon={icon} />
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  {titles.map(({ col }) => (
                    <td key={col} className={col}>
                      {col === "status" ? (
                        <button className={user[col]}>{user[col]}</button>
                      ) : (
                        user[col]
                      )}
                    </td>
                  ))}
                  <DotTD />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {!users.length && !loading ? <p>No data to display</p> : null}
      {loading && <p>Loading...</p>}
    </section>
  );
};

export default UsersPage;
