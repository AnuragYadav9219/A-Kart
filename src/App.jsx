import React from 'react';
import Navbar from './components/Navbar';
import Layout from './Layout';
import Services from './components/Services';
import Products from './components/Products';
import Cart from './components/Cart';
import Payment from './components/Payment';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Categories, Home, Login, SignUp, DefaultCategoryContent } from './components/Routers';
import { Fashion, Electronics, Spectacles, Grocery, Beauty, Sports } from './components/CategoryPage';


const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Navbar />
              <Home />
            </>
          )
        },
        {
          path: "/login",
          element: (
            <>
              <Navbar />
              <Login />
            </>
          )
        },
        {
          path: "/signup",
          element: (
            <>
              <Navbar />
              <SignUp />
            </>
          )
        },
        {
          path: "/cart",
          element: (
            <>
              <Navbar />
              <Cart />
            </>
          )
        },
        {
          path: "/products",
          element: (
            <>
              <Navbar />
              <Products />
            </>
          )
        },
        {
          path: "/services",
          element: (
            <>
              <Navbar />
              <Services />
            </>
          )
        },
        {
          path: "/payment",
          element: (
            <>
              <Navbar />
              <Payment />
            </>
          )
        },
        {
          path: "/categories",
          element: (
            <>
              <Navbar />
              <Categories />
            </>
          ),

          children: [
            {
              index: true,
              element: <DefaultCategoryContent />
            },
            {
              path: "fashion",
              element: <Fashion />
            },
            {
              path: "electronics",
              element: <Electronics />
            },
            {
              path: "spectacles",
              element: <Spectacles />
            },
            {
              path: "grocery",
              element: <Grocery />
            },
            {
              path: "beauty",
              element: <Beauty />
            },
            {
              path: "sports",
              element: <Sports />
            }

          ]

        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;

};

export default App;