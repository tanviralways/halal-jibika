import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Favourites from "../pages/Favourites/Favourites";
import Contact from "../pages/Contact/Contact";
import Jobs from "../pages/Jobs/Jobs";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";
import NotFound from "../NotFound/NotFound";
import SignOut from "../pages/SignOut/SignOut";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return fetch("/data.json");
        },
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: () => {
          return fetch("/data.json");
        },
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`/data.json/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favourite",
        element: <Favourites />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signout",
        element: <SignOut />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
