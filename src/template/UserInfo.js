import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function UserInfo() {
  const { userData: users } = useSelector((state) => state.data);
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  const selectedUser = users.find((user) => user.id === Number(userId));

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const postData = await postsResponse.json();
      setPosts(postData);
    })();
  }, [userId]);

  useEffect(() => {
    if (posts.length > 0) {
      const postsStr = posts.length > 0 ? ` (${posts.length})` : "";
      navigate(location.pathname, {
        replace: true,
        state: { breadcrumb: { pageName: `${selectedUser?.name}${postsStr}` } }
      });
    }
  }, [posts]);

  return (
    <div>
      {selectedUser?.name} {posts.length > 0 && `(${posts.length})`}
    </div>
  );
}

export default UserInfo;
