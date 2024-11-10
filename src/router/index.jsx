import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/molecules/ProductCard/ProductCard";
import Createproduct from "../components/pages/Createproduct/Createproduct";
import Productsmarket from "../components/pages/Productsmarket/Productsmarket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <ProductCard />
      },
      {
        path: "/Createproduct",
        element: <Createproduct />
      },
      {
        path: "/",
        element: <Productsmarket />
      }
    ]
  }
])





