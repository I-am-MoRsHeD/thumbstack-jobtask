import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/portfolio',
            element: <Portfolio></Portfolio>
        },
        {
            path: '/skills',
            element: <Skills></Skills>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
      ]
    },
  ]);