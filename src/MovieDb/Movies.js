import React from "react";
import LazyLoad from "react-lazy-load";
import styles from './Movies.module.css';

const imageApi = "https://image.tmdb.org/t/p/original";

export const Movies = (props) => {
    const { movieTitle, releaseDate, imagePath, vote, voteCount } = props;

    return (
        <>
            <div className={styles.makeBorders}>
                <LazyLoad>
                    <img src={`${imageApi}${imagePath}`} alt={movieTitle} height="300px" width="300px"></img>
                </LazyLoad>
                <h5>{movieTitle}</h5>
                <h5>{releaseDate}</h5>
                <h5>{vote}</h5>
                <h5>{voteCount}</h5>
            </div>
        </>
    )
}