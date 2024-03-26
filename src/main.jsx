import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './mainLayout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
    {
      path: '/',
      element:<Home></Home>,
      loader: () => fetch('fakeData.json')
    }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
