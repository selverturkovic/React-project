import { useState } from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Landingpage from "./Page/Landingpage/Landingpage";
import Categorypage from "./Page/Category/Categorypage";
import Productpage from "./Page/Product/Productpage";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </Layout>
    ),
    children: [
      { index: true, element: <Landingpage /> },
      { path: "category", element: <Categorypage /> },
      { path: "product/:id", element: <Productpage /> },
    ],
  },
]);

function App() {
  const blogsState = useSelector((state) => state.ecommerce);

  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
