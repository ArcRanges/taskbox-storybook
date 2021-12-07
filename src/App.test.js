import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const appTitle = screen.getByText(/Taskbox/i);
  expect(appTitle).toBeInTheDocument();
});
