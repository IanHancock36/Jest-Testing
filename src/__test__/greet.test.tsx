import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/greet";

// describe is how you group tests together. 

describe("Greet", () => {
 it(" renders correctly", () => {
    render(<Greet />);

    const helloTextElement = screen.getByText(/hello/i);
    expect(helloTextElement).toBeInTheDocument;
  });
  // you can nest tests inside a describe 

  describe("Nested", () => {
  it("renders with a name", () => {
    render(<Greet name="Ian" />);
    const textElement = screen.getByText("Hello Ian");
    expect(textElement).toBeInTheDocument();
  });
})
});
