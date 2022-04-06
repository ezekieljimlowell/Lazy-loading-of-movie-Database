import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
//import LazyLoad from "react-lazy-load";

export const LazyLoading = () => {
    const [images, setImages] = useState([]);

    const IMAGE_URL = "https://api.unsplash.com/photos/?client_id=WR182ATdHQDJumt_NpWPtzNh4SnPTdsrFLqHVPedC-E";

    async function fetchImages() {
        const response = await fetch(IMAGE_URL);
        console.log(response);
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    useEffect(() => {
        fetchImages().then(data => setImages(data));
        console.log(images);
    }, [])

    return (
        <>
            <h3>Lazy loading of images</h3>
            {images.length > 0 && images.map(data => <LazyLoad offset={1000}>
                <img src={data.urls.regular} class="img-responsive"></img>
            </LazyLoad>)}
        </>
    )
}