import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './mainLayout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BookDetails from './components/BookDetails.jsx';

import ListedBooks from './pages/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead.jsx';
import toast, { Toaster } from 'react-hot-toast';
import ReadBooks from './components/ReadBooks.jsx';
import WishlistBooks from './components/WishlistBooks.jsx';
import Error from './components/Error.jsx';
import SortBy from './components/SortBy.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
    {
      path: '/',
      element:<Home></Home>,
      loader: () => fetch('/fakeData.json')
    },
    {
      path: '/book/:id',
      loader:() => fetch('/fakeData.json'),
      element:<BookDetails></BookDetails>
    },
    {
      path:"/listed-book",
      element:<ListedBooks></ListedBooks>,
      children:[
        {
          path:'',
          element:<ReadBooks></ReadBooks>,
        },
        {
          path:'wishlist',
          element:<WishlistBooks></WishlistBooks>,
        },
         {
          path:'sort',
          element:<SortBy></SortBy>
         }
      ]
    },
    {
      path:"/pages-to-read",
      element:<PagesToRead></PagesToRead>
    }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
