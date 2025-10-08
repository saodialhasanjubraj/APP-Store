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
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("EightApps.json"),
      },
      {
        path: "/appsComponent",
        Component: AppsComponent,
        loader: () => fetch("largeDataFile.json"),
      },
      { path: "/installApps", element: <InstallApps /> },
    ],
  },
]);
