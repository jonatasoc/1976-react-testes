import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should show the bank name when the app is opened", () => {
    render(<App />);

    const bankText = screen.getByRole("heading", {
      name: /bytebank/i,
    });

    expect(bankText).toBeInTheDocument();
  });
});
