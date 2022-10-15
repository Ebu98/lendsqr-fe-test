import React, { useState } from "react";
import Select from "../Input/select";
import TextInput from "../Input/TextInput";
import date from "../../assests/image/date.png";
import "./main.scss";

const DropdownInput = () => {
  const [value, setValue] = useState({
    username: "",
    email: "",
    date: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const options = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
  ];

  return (
    <div className="main-input-container">
      <Select label="Organization" placeholder="Select" options={options} />
      <TextInput
        name="username"
        label="Username"
        value={value.username}
        placeholder="User"
        onChange={handleChange}
      />
      <TextInput
        name="email"
        label="Email"
        value={value.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <TextInput
        name="date"
        type=""
        label="Date"
        value={value.date}
        placeholder="Date"
        imgSrc={date}
        onChange={handleChange}
      />

      <TextInput
        name="phonenumber"
        label="Phone Number"
        type="number"
        value={value.phonenumber}
        placeholder="phone Number"
        onChange={handleChange}
      />
      <Select label="Status" placeholder="Select" options={options} />
      <div className="buttons-wrap">
        <button className="reset">Reset</button>
        <button className="filter">Filter</button>
      </div>
    </div>
  );
};
export default DropdownInput;
