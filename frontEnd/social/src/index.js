import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,Route, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Posts from './Posts';
// import Counter from './counter';
import ViewPosts from './ViewPosts';
import Register from './Register';
import CreatePost from './CreatePost';
import HomePage from './HomePage';
import Contact from './contact';
import Footer from './footer'
import About from './About'
import Option from './option';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <h1>Page Not Found</h1>
  },
  // {
  //     path: '/homePage',
  //     element :<HomePage></HomePage>
  // },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/post/:postId',
    element : <Posts></Posts>
  },
  {
    path : '/posts',
    element : <ViewPosts></ViewPosts>
  },
  {
    path : '/homePage',
    element : <HomePage></HomePage>
  },
  {
    path : '/Register',
    element : <Register></Register>
  },{
    path:'/createpost',
    element:<CreatePost></CreatePost>
  },
  {
    path:'/help',
    element:<Contact></Contact>
  },
  {
    path:'/footer',
    element:<Footer></Footer>
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/Option',
    element:<Option></Option>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>
);