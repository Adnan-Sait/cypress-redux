import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function App() {
  const { userData: users, postData: posts } = useSelector(
    (state) => state.data
  );

  return (
    <section className="app-card-section">
      <Link to="/users" className="app-card">
        <p className="app-card-count">{users.length}</p>
        <p className="app-card-label">Users</p>
      </Link>
    </section>
  );
}
