import React, { useEffect, useState } from "react";
import { Pagination } from './Pagination';
import { Movies } from "./Movies";
import axios from "axios";
import styles from './MovieDbLazyLoad.module.css';

export const apiFunction = (API) => API;

export const MovieDbLazyLoad = () => {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState("");

    const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=534595d4dcb4b9bd70b8132302e37b1a&page=${pageNumber}&adult=false`;

    const fetchMovies = async () => {
        const moviesResponse = await axios.get(MOVIE_API);
        return moviesResponse;
    }

    useEffect(() => {
        fetchMovies().then(data => setMovies(data.data.results)).catch(error => setError(error));
        apiFunction(MOVIE_API);
    }, [movies])

    return (<>
        <h1>Page number: {pageNumber}</h1>
        <div className={styles.makeFit}>
            <div>{error}</div>
            {movies.length > 0 && movies.map(movie =>
                <Movies
                    key={movie.id}
                    movieTitle={movie.title}
                    releaseDate={movie.release_date}
                    imagePath={movie.poster_path}
                    vote={movie.vote_average}
                    voteCount={movie.vote_count}
                />
            )}
        </div>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </>)
}