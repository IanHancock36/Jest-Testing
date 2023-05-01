import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// describe is how you group tests together. 

describe("Greet", () => {
  test(" renders correctly", () => {
    render(<Greet />);

    const helloTextElement = screen.getByText(/hello/i);
    expect(helloTextElement).toBeInTheDocument;
  });

  test("renders with a name", () => {
    render(<Greet name="Ian" />);
    const textElement = screen.getByText("Hello Ian");
    expect(textElement).toBeInTheDocument();
  });
});
