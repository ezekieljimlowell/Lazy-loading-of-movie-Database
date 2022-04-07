import { render } from "@testing-library/react";
import { ReactDOM } from "react";
import { Pagination } from "./Pagination";

test("initial renering", () => {
    render(<Pagination />)
    const backButton = screen.getByText("Back");
    const frontButton = screen.getByText("Next");
    const buttonOne = screen.getByText("495");
    const buttonFive = screen.getByText("499");

    expect(backButton).toBeInTheDocument();
    expect(frontButton).toBeInTheDocument();
    expect(buttonOne).toBeInTheDocument();
    expect(buttonFive).toBeInTheDocument();
})