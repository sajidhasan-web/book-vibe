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
import Book from './components/Book.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
      element:<ListedBooks></ListedBooks>
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
  </React.StrictMode>
);
