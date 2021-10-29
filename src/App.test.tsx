import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText(
    `Welcome to the ${process?.env?.REACT_APP_COMPANY || ''}: Front End Test Suite`
  );
  expect(titleElement).toBeInTheDocument();
});
