import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assests/icon/logo.svg";
import { ReactComponent as Image } from "../../assests/image/image.svg";
import Button from "../../Components/Button/Button";
import "./Login.scss";


// interface Place{
//   email:string,
//   password:string
// }
const LoginPage = () => {
  const [inputs, setInputs] = useState({ email:"", password:""});
  const navigate = useNavigate();

  const onChange = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (inputs.email && inputs.password) navigate("/users");
  };
  
  return (
    <div className="login-page">
      <div className="logo-container">
        <LogoIcon />
        <div className="image-container">
          <Image />
        </div>
      </div>
      <div className="input-container">
        <div className="form-wapper">
        <div className="form-text">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="container">
              <div className="input_space">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={onChange}
                  autoComplete="on"
                />
              </div>
              <div className="input_space">
                
                <input
                  placeholder="Password"
                  type="password"
                  autoComplete="on"
                  name="password"
                  onChange={onChange}
                />
              </div>
              <p>Forgot PASSWORD?</p>
              <Button>Login In</Button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
