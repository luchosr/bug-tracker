import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Bug Tracker title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bug Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
