import React, { useCallback, useEffect, useState } from "react";
import styles from './Pagination.module.css';

export const Pagination = ({ pageNumber, setPageNumber }) => {
    const [numberOfPages, setNumberOfPages] = useState([]);
    const [isBackButtonClicked, setBackClick] = useState(false);
    const [isNextButtonClicked, setNextClick] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isBackButtonClicked && !isNextButtonClicked) {
            let number = []
            for (let i = pageNumber; i < pageNumber + 5; i++) {
                number.push(i);
            }
            setNumberOfPages(number);
        }
        //console.log(numberOfPages);
    }, []);

    const backButton = () => {
        setBackClick(true);
        switch (true) {
            case pageNumber === 5:
                let decreasePageCase1 = pageNumber - 4;
                let previousSetCase1 = [];
                for (let i = decreasePageCase1; i < pageNumber; i++) {
                    previousSetCase1.push(i);
                    setNumberOfPages(previousSetCase1);
                }
                setPageNumber(decreasePageCase1);
                break;
            case pageNumber === 4:
                let decreasePageCase2 = pageNumber - 3;
                let previousSetCase2 = [];
                for (let i = decreasePageCase2; i < pageNumber; i++) {
                    previousSetCase2.push(i);
                    setNumberOfPages(previousSetCase2);
                }
                setPageNumber(decreasePageCase2);
                break;
            case pageNumber === 3:
                let decreasePageCase3 = pageNumber - 2;
                let previousSetCase3 = [];
                for (let i = decreasePageCase3; i < pageNumber; i++) {
                    previousSetCase3.push(i);
                    setNumberOfPages(previousSetCase3);
                }
                setPageNumber(decreasePageCase3);
                break;
            case pageNumber === 2:
                let decreasePageCase4 = pageNumber - 1;
                let previousSetCase4 = [];
                for (let i = decreasePageCase4; i < pageNumber; i++) {
                    previousSetCase4.push(i);
                    setNumberOfPages(previousSetCase4);
                }
                setPageNumber(decreasePageCase4);
                break;
            default:
                let decreasePageDefault = pageNumber - 5;
                let previousSetDefault = [];
                for (let i = decreasePageDefault; i < pageNumber; i++) {
                    previousSetDefault.push(i);
                    setNumberOfPages(previousSetDefault);
                }
                setPageNumber(decreasePageDefault);
                break;
        }
    }

    const nextButton = () => {
        console.log(pageNumber);
        setNextClick(true);
        switch (true) {
            case (pageNumber % 10 === 2 || pageNumber % 10 === 7):
                let increasePageCase1 = pageNumber + 4;
                let nextSetCase1 = [];
                setPageNumber(increasePageCase1);
                for (let i = increasePageCase1; i < increasePageCase1 + 5; i++) {
                    nextSetCase1.push(i);
                    setNumberOfPages(nextSetCase1)
                }
                break;
            case (pageNumber % 10 === 3 || pageNumber % 10 === 8):
                let increasePageThree = pageNumber + 3;
                let nextSetThree = [];
                setPageNumber(increasePageThree);
                for (let i = increasePageThree; i < increasePageThree + 5; i++) {
                    nextSetThree.push(i);
                    setNumberOfPages(nextSetThree)
                }
                break;
            case (pageNumber%10===4 || pageNumber%10===9):
                let increasePageFour = pageNumber + 2;
                let nextSetFour = [];
                setPageNumber(increasePageFour);
                for (let i = increasePageFour; i < increasePageFour + 5; i++) {
                    nextSetFour.push(i);
                    setNumberOfPages(nextSetFour)
                }
                break;
            case (pageNumber%10===5 || pageNumber%10===0):
                let increasePageFive = pageNumber + 1;
                let nextSetFive = [];
                setPageNumber(increasePageFive);
                for (let i = increasePageFive; i < increasePageFive + 5; i++) {
                    nextSetFive.push(i);
                    setNumberOfPages(nextSetFive)
                }
                break;
            case pageNumber === 500:
                let samePage = pageNumber;
                let singleArray = [];
                singleArray.push(pageNumber);
                setNumberOfPages(singleArray);
                setPageNumber(samePage);
            default:
                let increasePageDefault = pageNumber + 5;
                setPageNumber(increasePageDefault);
                let nextSetDefault = [];

                for (let i = increasePageDefault; i < increasePageDefault + 5; i++) {
                    nextSetDefault.push(i);
                    setNumberOfPages(nextSetDefault)
                }

        }

    }

    const paginationHandle = (page) => {
        setBackClick(false);
        setNextClick(false);
        setPageNumber(page)
    }

    return (
        <div className={styles.giveButtonStyles}>
            <div>{error}</div>
            <button type="button" disabled={pageNumber > 1 ? false : true} onClick={backButton} className={styles.back}>Back</button>
            {numberOfPages.length > 0 && numberOfPages.map(page =>
                <button key={page} type="text" onClick={() => paginationHandle(page)} className={styles.pagination}>{page}</button>
            )}
            <button type="button" onClick={nextButton} className={styles.next} disabled={pageNumber > 495}>Next</button>
        </div>
    )
}