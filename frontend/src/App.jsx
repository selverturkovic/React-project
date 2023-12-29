import { useEffect, useState } from "react";

// import "./App.css";
import Button from "@mui/material/Button";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Landingpage from "./Page/Landingpage/Landingpage";
import Categorypage from "./Page/Category/Categorypage";
import Productpage from "./Page/Product/Productpage";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { index: true, element: <Landingpage /> },
      { path: "category/:id", element: <Categorypage /> },
      { path: "products", element: <Productpage /> },
    ],
  },
]);

function App() {
  const blogsState = useSelector((state) => state.ecommerce);

  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:1337/api/products");
  //       const responseData = await response.json();
  //       console.log(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </div>
  );
}

export default App;
