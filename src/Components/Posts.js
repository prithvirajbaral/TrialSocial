import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [postCount, setPostCount] = useState(0);



    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => {
                setPosts(res.data);
                setPostCount(res.data.length); // set the post count to the length of the fetched data
            })
            .catch(err => console.log(err));

        axios.get(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);
    return (
        <div className='container my-1'>
             <h1 className='text-center' style={{ color: "blue", fontWeight: "bold" }}><u>POST</u></h1>
                    <p style={{ fontSize: '30px', fontWeight: "bold" }}>Number of Posts: ({postCount})</p>

            {posts.map(post => (
                
                   
                    <div key={post.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title"><div className="badge bg-primary text-wrap">TITLE</div>-{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <h6 className="badge bg-danger text-wrap">Comments:</h6>
                            <ol className="list-group">
                                {comments.filter(comment => comment.postId === post.id).map(comment => (
                                    <li key={comment.id} className="list-group-item list-group-item-secondary">{comment.body}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
            ))}
        </div>
    );
};

export default Posts;
