import React from "react";
import { Link } from "react-router-dom";

const UsersLayout = () => {
  const users = [
    { id: 0, name: "User 0" },
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ];

  return (
    <>
      <h1>UsersLayout</h1>
      <Link to="/">Main page</Link>
      <h2>User list Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersLayout;
