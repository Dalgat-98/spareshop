import "./styles/main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/ErrorPage/ErrorPage";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CardProduct from "./pages/CardProduct";
import CardProductInformation from "./components/CardProductDescription/CardProductInformation/CardProductInformation";
import CardProductCharacteristicn from "./components/CardProductDescription/CardProductCharacteristicn/CardProductCharacteristicn";
import CardProductPickup from "./components/CardProductDescription/CardProductPickup/CardProductPickup";
import Basket from "./pages/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/cardproduct",
    element: <CardProduct />,
    children: [
      {
        path: "/cardproduct/cardProductInformation",
        element: <CardProductInformation />,
      },
      {
        path: "/cardproduct/cardProductCharacteristics",
        element: <CardProductCharacteristicn />,
      },
      {
        path: "/cardproduct/cardProductPickup",
        element: <CardProductPickup />,
      },
    ],
  },
  {
    path: "/basketlist",
    element: <Basket />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
