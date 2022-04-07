import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { MovieDbLazyLoad } from "./MovieDbLazyLoad";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
})



it("initial rendering", async () => {
    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const backButton = screen.getByRole("button", { name: /Back/i });
    const frontButton = screen.getByRole("button", { name: /Next/i });
    const buttonOne = screen.getByRole("button", { name: /1/i });
    const buttonFive = screen.getByRole("button", { name: /5/i });
    /*const movieTitle = await screen.findByText(/Spider-Man: No Way Home/i);
    expect(movieTitle).toBeVisible();*/

    expect(backButton).toBeInTheDocument();
    expect(frontButton).toBeInTheDocument();
    expect(buttonOne).toBeInTheDocument();
    expect(buttonFive).toBeInTheDocument();
})

it("testing onclick functionality of back and next button", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const backButton = screen.getByRole("button", { name: /Back/i });
    const frontButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(frontButton);
    const currentPageFront = screen.getByText(/Page number: 6/i);
    expect(currentPageFront).toBeInTheDocument();

    userEvent.click(backButton);
    const currentPageBack = screen.getByText(/Page number: 1/i)
    expect(currentPageBack).toBeInTheDocument();
})

it("testing back button disabled when page number lesser than 6", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const backButton = screen.getByRole("button", { name: /Back/i });
    expect(backButton).toBeDisabled();
    const buttonFive = screen.getByRole("button", { name: /1/i });
    userEvent.click(buttonFive);
    expect(backButton).toBeDisabled();

})

it("testing for back button not disabled page is greater than 5 and next button for lesser than 496", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const backButton = screen.getByRole("button", { name: /Back/i });
    const frontButton = screen.getByRole("button", { name: /Next/i });
    function clickMultipleTimes() {
        userEvent.click(frontButton);
    }
    for (let i = 0; i < 98; i++) {
        clickMultipleTimes();
    }
    expect(backButton).not.toBeDisabled();
    expect(frontButton).not.toBeDisabled();

})



it("testing front button disabled when page number greater than 495", () => {

    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const frontButton = screen.getByRole("button", { name: /Next/i });
    function clickMultipleTimes() {
        userEvent.click(frontButton);
    }
    for (let i = 0; i <= 98; i++) {
        clickMultipleTimes();
    }
    expect(frontButton).toBeDisabled();

})

it("testing pagination buttons functionality", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const backButton = screen.getByRole("button", { name: /Back/i });
    const frontButton = screen.getByRole("button", { name: /Next/i });
    const buttonTwo = screen.getByRole("button", { name: /2/i });
    const buttonFive = screen.getByRole("button", { name: /5/i });

    userEvent.click(buttonFive);
    const headerPageNumberFive = screen.getByText(/Page number: 5/i)
    expect(headerPageNumberFive).toBeInTheDocument();

    userEvent.click(buttonTwo);
    const headerPageNumberTwo = screen.getByText(/Page number: 2/i);
    expect(headerPageNumberTwo).toBeInTheDocument();

    userEvent.click(frontButton);
    const buttonEight = screen.getByRole("button", { name: /8/i });
    userEvent.click(buttonEight);
    const headerPageNumberEight = screen.getByText(/Page number: 8/i);
    expect(headerPageNumberEight).toBeInTheDocument();

    userEvent.click(frontButton);
    userEvent.click(frontButton);
    userEvent.click(backButton);
    const buttonEleven = screen.getByRole("button", { name: /11/i });
    expect(buttonEleven).toBeInTheDocument();
    const buttonThirteen = screen.getByRole("button", { name: /13/i });
    userEvent.click(buttonThirteen);
    const headerPageNumberThirteen = screen.getByText(/Page number: 13/i);
    expect(headerPageNumberThirteen).toBeInTheDocument();
})

it("testing all functionalities for back and next button onclick handler", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<>
            <MovieDbLazyLoad />
        </>);
    });

    const backButton = screen.getByRole("button", { name: /Back/i });
    const frontButton = screen.getByRole("button", { name: /Next/i });

    //Front Button
    //2
    const buttonTwo = screen.getByRole("button", { name: /2/i });
    userEvent.click(buttonTwo);
    const headerPageNumberTwo = screen.getByText(/Page number: 2/i);
    expect(headerPageNumberTwo).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumberSix = screen.getByText(/Page number: 6/i);
    expect(headerPageNumberSix).toBeInTheDocument();
    //7
    const buttonSeven = screen.getByRole("button", { name: /7/i });
    userEvent.click(buttonSeven);
    const headerPageNumberSeven = screen.getByText(/Page number: 7/i);
    expect(headerPageNumberSeven).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumberEleven = screen.getByText(/Page number: 11/i);
    expect(headerPageNumberEleven).toBeInTheDocument();
    //13
    const buttonThirteen = screen.getByRole("button", {name: /13/i});
    userEvent.click(buttonThirteen);
    const headerPageNumberThirteen = screen.getByText(/Page number: 13/i);
    expect(headerPageNumberThirteen).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumberSixteen = screen.getByText(/Page number: 16/i);
    expect(headerPageNumberSixteen).toBeInTheDocument();
    //18
    const buttonEighteen = screen.getByRole("button", {name: /18/i});
    userEvent.click(buttonEighteen);
    const headerPageNumberEighteen = screen.getByText(/Page number: 18/i);
    expect(headerPageNumberEighteen).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumber21 = screen.getByText(/Page number: 21/i);
    expect(headerPageNumber21).toBeInTheDocument();
    //24
    const button24 = screen.getByRole("button", {name: /24/i});
    userEvent.click(button24);
    const headerPageNumber24 = screen.getByText(/Page number: 24/i);
    expect(headerPageNumber24).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumber26 = screen.getByText(/Page number: 26/i);
    expect(headerPageNumber26).toBeInTheDocument();
    //29
    const button29 = screen.getByRole("button", {name: /29/i});
    userEvent.click(button29);
    const headerPageNumber29 = screen.getByText(/Page number: 29/i);
    expect(headerPageNumber29).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumber31 = screen.getByText(/Page number: 31/i);
    expect(headerPageNumber31).toBeInTheDocument();
    //35
    const button35 = screen.getByRole("button", {name: /35/i});
    userEvent.click(button35);
    const headerPageNumber35 = screen.getByText(/Page number: 35/i);
    expect(headerPageNumber35).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumber36 = screen.getByText(/Page number: 36/i);
    expect(headerPageNumber36).toBeInTheDocument();
    //40
    const button40 = screen.getByRole("button", {name: /40/i});
    userEvent.click(button40);
    const headerPageNumber40 = screen.getByText(/Page number: 40/i);
    expect(headerPageNumber40).toBeInTheDocument();
    userEvent.click(frontButton);
    const headerPageNumber41 = screen.getByText(/Page number: 41/i);
    expect(headerPageNumber41).toBeInTheDocument();

    //Back button
    //42
    const button42 = screen.getByRole("button", {name: /42/i});
    userEvent.click(button42);
    const pageNumber42 = screen.getByText(/Page number: 42/i);
    expect(pageNumber42).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumber36).toBeInTheDocument();
    //37
    const button37 = screen.getByRole("button", {name: /37/i});
    userEvent.click(button37);
    const pageNumber37 = screen.getByText(/Page number: 37/i);
    expect(pageNumber37).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumber31).toBeInTheDocument();
    //33
    const button33 = screen.getByRole("button", {name: /33/i});
    userEvent.click(button33);
    const pageNumber33 = screen.getByText(/Page number: 33/i);
    expect(pageNumber33).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumber26).toBeInTheDocument();
    //28
    const button28 = screen.getByRole("button", {name: /28/i});
    userEvent.click(button28);
    const pageNumber28 = screen.getByText(/Page number: 28/i);
    expect(pageNumber28).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumber21).toBeInTheDocument();
    //24
    const secondButton24 = screen.getByRole("button", {name: /24/i});
    userEvent.click(secondButton24);
    const pageNumber24 = screen.getByText(/Page number: 24/i);
    expect(pageNumber24).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumberSixteen).toBeInTheDocument();
    //19
    const button19 = screen.getByRole("button" ,{name: /19/i});
    userEvent.click(button19);
    const pageNumber19 = screen.getByText(/Page number: 19/i);
    expect(pageNumber19).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumberEleven).toBeInTheDocument();
    //15
    const button15 = screen.getByRole("button", {name: /15/i});
    userEvent.click(button15);
    const pageNumber15 = screen.getByText(/Page number: 15/i);
    expect(pageNumber15).toBeInTheDocument();
    userEvent.click(backButton);
    expect(headerPageNumberSix).toBeInTheDocument();
    //10
    const button10 = screen.getByRole("button", {name: /10/i});
    userEvent.click(button10);
    const pageNumber10 = screen.getByText(/Page number: 10/i);
    expect(pageNumber10).toBeInTheDocument();
    userEvent.click(backButton);
    const firstPage = screen.getByText(/Page number: 1/i);
    expect(firstPage).toBeInTheDocument();
})
