import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from "react-router-dom";
import App from "./App";
import IndexPage from "./IndexPage";
import UserInfo from "./template/UserInfo";
import Users from "./template/Users";

function AppRoutes() {
  return (
    <Route id="home" element={<IndexPage />}>
      <Route index element={<App />} />
      <Route id="user" path="users">
        <Route id="viewAll" index element={<Users />} />
        <Route id="userInfo" path=":userId" element={<UserInfo />} />
      </Route>
    </Route>
  );
}

const router = createBrowserRouter(createRoutesFromElements(AppRoutes()));
export default router;
