import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import Details from "./components/Details";
import Header from "./components/header/Header";
import useBreadcrumb from "./hooks/useBreadcrumb";
import { dataActions } from "./store/slice/dataSlice";
import "./styles.css";

export default function IndexPage() {
  const dispatch = useDispatch();
  const breadcrumbs = useBreadcrumb();

  useEffect(() => {
    (async () => {
      try {
        const userRequest = fetch("https://jsonplaceholder.typicode.com/users");
        const postsRequest = fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const [userResponse, postResponse] = await Promise.all([
          userRequest,
          postsRequest
        ]);
        const [userData, postData] = await Promise.all([
          userResponse.json(),
          postResponse.json()
        ]);

        dispatch(dataActions.setUserData(userData));
        dispatch(dataActions.setPostData(postData));
      } catch (error) {
        dispatch(dataActions.setDataError(true));
      }
    })();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Details />
      {breadcrumbs.length > 1 && <Breadcrumb breadcrumbs={breadcrumbs} />}
      <Outlet />
    </div>
  );
}
