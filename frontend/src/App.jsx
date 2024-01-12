import { useState } from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Landingpage from "./Page/Landingpage/Landingpage";
import Categorypage from "./Page/Category/Categorypage";
import Productpage from "./Page/Product/Productpage";
import Layout from "./components/Layout/Layout";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme/theme";
import { paths } from "./utils";
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
      { path: paths.category, element: <Categorypage /> },
      { path: paths.product, element: <Productpage /> },
    ],
  },
]);

function App() {
  const ecommerceState = useSelector((state) => state.ecommerce);

  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
