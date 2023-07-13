import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Users() {
  const { userData: users, postData: posts } = useSelector(
    (state) => state.data
  );

  function combineData() {
    const userPostData = [];
    users.forEach((user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);
      userPostData.push({ user: user, posts: userPosts });
    });
    return userPostData;
  }

  const userPosts = combineData();

  return (
    <section className="app-card-section">
      {userPosts.map((user) => {
        return (
          <Link to={"" + user.user.id} className="app-card">
            <p>{user.user.name}</p>
            <section class="app-posts-count">
              <p>{user.posts.length}</p>
              <p>Posts</p>
            </section>
          </Link>
        );
      })}
    </section>
  );
}
