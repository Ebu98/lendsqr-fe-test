import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Pages/Login-page/Login"
import { BrowserRouter } from "react-router-dom";

const MockConfirmation = () => {
  return (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
  );
};
afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MockConfirmation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders welcome text", () => {
  render(<MockConfirmation />);
  const welcomeElement = screen.getByText("Welcome!");
  expect(welcomeElement).toBeInTheDocument();
});

test("renders email field", () => {
  render(<MockConfirmation />);
  const emailElement = screen.getByPlaceholderText(/Email/i);
  expect(emailElement).toBeInTheDocument();
});

test("renders email input", () => {
  render(<MockConfirmation />);
  const emailElement = screen.getByPlaceholderText(/Email/i);
  fireEvent.change(emailElement, { target: { value: "test@gmail.com" } });
  expect(emailElement.value).toBe("test@gmail.com");
});

