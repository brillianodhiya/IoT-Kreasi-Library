import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ExampleComponent from "./ExampleComponent";

test("ExampleComponent button onClick", async () => {
  const onClick = jest.fn();
  render(<ExampleComponent onClick={onClick} />);
  const button = screen.getByRole("button");
  // Try using fireEvent as an alternative
  fireEvent.click(button);
  // Alternatively, you can still use userEvent.click
  // await userEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

test("ExampleComponent button style", () => {
  const style = { backgroundColor: "red" };
  render(<ExampleComponent style={style} />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("ExampleComponent button type", () => {
  render(<ExampleComponent type="submit" />);
  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("type", "submit");
});

test("ExampleComponent button children", () => {
  render(<ExampleComponent>Click me</ExampleComponent>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Click me");
});
