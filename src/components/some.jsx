import React from "react";
import { Link, useParams } from "react-router-dom";
import LinkMain from "./linkMain";

const Some = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>Main page</h1>
      <ul>
        <li>
          <LinkMain />
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit this user</Link>
        </li>
      </ul>
      <span>{`user: ${userId}`}</span>
    </>
  );
};

export default Some;
