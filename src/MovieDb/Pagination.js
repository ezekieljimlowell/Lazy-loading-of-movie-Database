import React, { useEffect, useState } from "react";
import styles from './Pagination.module.css';

export const Pagination = ({ pageNumber, setPageNumber }) => {
    const [numberOfPages, setNumberOfPages] = useState([]);
    // const [isBackButtonClicked, setBackClick] = useState(false);
    // const [isNextButtonClicked, setNextClick] = useState(false);

    useEffect(() => {
        let number = []
        for (let i = pageNumber; i < pageNumber + 5; i++) {
            number.push(i);
        }
        setNumberOfPages(number);
        //console.log(numberOfPages);
    }, []);

    const changePages = (change) => {
        let moveToNextOrBack = [];
        setPageNumber(change);
        for (let i = change; i < change + 5; i++) {
            moveToNextOrBack.push(i);
            setNumberOfPages(moveToNextOrBack)
        }
    }

    const backButton = () => {
        //setBackClick(true);
        switch (true) {
            case (pageNumber % 10 === 2 || pageNumber % 10 === 7):
                let decreasePageCase1 = pageNumber - 6;
                changePages(decreasePageCase1);
                break;
            case (pageNumber % 10 === 3 || pageNumber % 10 === 8):
                let decreasePageThree = pageNumber - 7;
                changePages(decreasePageThree);
                break;
            case (pageNumber % 10 === 4 || pageNumber % 10 === 9):
                let decreasePageFour = pageNumber - 8;
                changePages(decreasePageFour);
                break;
            case (pageNumber % 10 === 5 || pageNumber % 10 === 0):
                let decreasePageFive = pageNumber - 9;
                changePages(decreasePageFive);
                break;
            default:
                let decreasePageDefault = pageNumber - 5;
                changePages(decreasePageDefault);
                break;
        }
    }

    const nextButton = () => {
        //console.log(pageNumber);
        //setNextClick(true);
        switch (true) {
            case (pageNumber % 10 === 2 || pageNumber % 10 === 7):
                let increasePageCase1 = pageNumber + 4;
                changePages(increasePageCase1);
                break;
            case (pageNumber % 10 === 3 || pageNumber % 10 === 8):
                let increasePageThree = pageNumber + 3;
                changePages(increasePageThree);
                break;
            case (pageNumber % 10 === 4 || pageNumber % 10 === 9):
                let increasePageFour = pageNumber + 2;
                changePages(increasePageFour);
                break;
            case (pageNumber % 10 === 5 || pageNumber % 10 === 0):
                let increasePageFive = pageNumber + 1;
                changePages(increasePageFive);
                break;
            default:
                let increasePageDefault = pageNumber + 5;
                changePages(increasePageDefault);
                break;
        }

    }

    const paginationHandle = (page) => {
        // setBackClick(false);
        // setNextClick(false);
        setPageNumber(page);
    }

    return (
        <div className={styles.giveButtonStyles}>
            <button type="button" disabled={pageNumber > 5 ? false : true} onClick={backButton} className={styles.back}>Back</button>
            {numberOfPages.length > 0 && numberOfPages.map(page =>
                <button key={page} type="text" onClick={() => paginationHandle(page)} className={styles.pagination}>{page}</button>
            )}
            <button type="button" onClick={nextButton} className={styles.next} disabled={pageNumber > 495}>Next</button>
        </div>
    )
}