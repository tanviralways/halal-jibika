import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Favourites from "../pages/Favourites/Favourites";
import Contact from "../pages/Contact/Contact";
import Jobs from "../pages/Jobs/Jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
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
    ],
  },
]);
export default router;
