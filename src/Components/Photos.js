import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Photos() {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    const [photoCount, setphotoCount] = useState(0);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const photosRes = await axios.get(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
                );
                setPhotos(photosRes.data);
                setphotoCount(photosRes.data.length);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPhotos();
    }, [id]);
    return (
        <div className='container my-3'>
            <h1 className='text-center' style={{ color: "red", fontWeight: "bold" }}><u>PHOTOS</u></h1>
            <p style={{ fontSize: '30px', fontWeight: "bold" }}>Number of Posts: ({photoCount})</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="col">
                        <div className="card mb-3">
                            <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: '20px', fontWeight: "bold" }}>{photo.title}</p>
                                <Link to={photo.url} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">View Large Photo</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Photos