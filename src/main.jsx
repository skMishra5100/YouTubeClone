import {StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Video from './pages/Video'


const router = createBrowserRouter([

  {
    path: "/", element: <App />
  },{
   path:"/video/:categoryID/:videoID" ,element:<Video/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);




