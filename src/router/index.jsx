import { createBrowserRouter } from "react-router-dom";
import Header from "../components/organisms/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  }
])





