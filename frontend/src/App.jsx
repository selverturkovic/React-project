import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Landingpage from "./Page/Landingpage/Landingpage";
import Categorypage from "./Page/Category/Categorypage";
import Productpage from "./Page/Product/Productpage";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme/theme";
import { paths } from "./utils";
import Searchpage from "./Page/Search/searchPage";
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
      { path: paths.search, element: <Searchpage /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
