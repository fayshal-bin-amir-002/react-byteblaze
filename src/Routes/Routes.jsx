import {
    createBrowserRouter
  } from "react-router-dom"
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Blogs from "../Components/Blogs";
import Bookmarks from "../Components/Bookmarks";
import Blog from "../pages/Blog";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/blogs",
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element: <Blogs></Blogs>
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>
        },
        {
          path: "/blog/:id",
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          element: <Blog></Blog>,
          children: [
            {
                index: true,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Content></Content>
            },
            {
                path: "author",
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Author></Author>
            },
          ]
        }
      ]
    },
]);