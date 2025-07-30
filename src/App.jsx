import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
