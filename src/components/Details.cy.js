import React from "react";
import Details from "./Details";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    userData: [{ name: "Adnan" }],
    postData: [{ title: "Description" }],
  },
});
const store = configureStore({ reducer: { data: dataSlice.reducer } });

describe("<Details />", () => {
  const routes = [
    {
      path: "/",
      element: <Details />,
    },
  ];
  const memoryRouter = createMemoryRouter(routes);
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <RouterProvider router={memoryRouter} />
      </Provider>
    );
  });
});
