import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRes = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(usersRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);


  return (
    <table className="table">
    <thead className = 'table-dark'>
        <tr>
            <th scope="col">User ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Person Name</th>
            <th scope="col">Details</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.company.name}</td>
            <td>{user.name}</td>
            <td>
              <div><span style={{fontWeight: "bold" }}>UserName-</span>{user.username}</div>
              <div><span style={{fontWeight: "bold" }}>Email:</span> {user.email}</div>
              <div><span style={{fontWeight: "bold" }}>Street:</span>{user.address.street}</div>
              <div><span style={{fontWeight: "bold" }}>Suite:</span>{user.address.suite}</div>
              <div><span style={{fontWeight: "bold" }}>City:</span>{user.address.city}</div>
              <div><span style={{fontWeight: "bold" }}>ZipCode:</span>{user.address.zipcode}</div>
              <div><span style={{fontWeight: "bold" }}>Phone:</span>{user.phone}</div>
              <div><span style={{fontWeight: "bold" }}>Website:</span> {user.website}</div>
            </td>
            <td>
              <Link to={`/posts/${user.id}`}  style={{ color: "blue", fontWeight: "bold" }}>POST</Link><br/>
              <Link to={`/todos/${user.id}`}  style={{ color: "green", fontWeight: "bold" }}>TODO</Link><br/>
              <Link to={`/albums/${user.id}`}  style={{ color: "red", fontWeight: "bold" }}>ALBUMS</Link><br/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
