import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LinkMain from "./linkMain";

const Edit = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Edit user page</h1>
      <ul>
        <li>
          <Link onClick={handleClick}>User profile page</Link>
        </li>
        <li>
          <Link to={`/users/${Number(userId) + 1}`}>Another user</Link>
        </li>
        <li>
          <LinkMain />
        </li>
      </ul>
    </>
  );
};

export default Edit;
