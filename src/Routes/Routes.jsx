import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import { ErrorPage } from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AppsComponent from "../pages/Apps Component/AppsComponent";
import InstallApps from "../pages/InstallApps/InstallApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/appsComponent", Component: AppsComponent },
      { path: "/installApps", element: <InstallApps /> },
    ],
  },
]);
