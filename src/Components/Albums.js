import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Albums = () => {
    const [Albums, setAlbums] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchTodos = async () => {
            const Albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
            setAlbums(Albums.data);
        };
        fetchTodos();
    }, [id]);

    return (
        <div className='container my-1'>
            <h1 className='text-center' style={{ color: "black", fontWeight: "bold" }}><u>ALBUM</u></h1>
            <table className="table table-dark table-bordered  mb-1">
                <thead>
                    <tr>
                        <th scope="col" style={{ color: "red", fontWeight: "bold" }}><h3>TITLE</h3></th>
                        <th scope="col" style={{ color: "red", fontWeight: "bold" }}><h3>PHOTOS</h3></th>

                    </tr>
                </thead>
                {Albums.map(album => (
                    <tbody  key={album.id}>
                        <tr>
                            <td>
                                <p style={{ fontWeight: "bold" }}>{album.title}</p>
                            </td>
                            <td>
                            <Link to={`/photos/${album.id}`}  style={{ color: "DodgerBlue", fontWeight: "bold" }}>VIEW PHOTO</Link><br/>
                            </td>
                        </tr>
                    </tbody>


                ))}
            </table>
        </div>
    );
};

export default Albums;
