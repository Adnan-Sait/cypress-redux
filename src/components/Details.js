import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const { userData, postData } = useSelector((state) => state.data);

  return (
    <div className="app-details">
      <p>Location: {location.pathname}</p>
      <p>Users: {userData.length}</p>
      <p>Posts: {postData.length}</p>
    </div>
  );
}

export default Details;
