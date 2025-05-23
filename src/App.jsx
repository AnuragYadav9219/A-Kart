import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Layout from './Layout';
import Services from './components/Services';
import Products from './components/Products';
import Cart from './components/Cart';
import Payment from './components/Payment';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import Contact from './components/Contact';
import ShippingInfo from './components/ShippingInfo';
import Return from './components/Return';
import { Popular } from './components/Popular';
import FAQs from './components/Faq';
import { Categories } from './components/Categories';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, SignUp } from './components/Routers';


// import { Fashion, Electronics, Spectacles, Grocery, Beauty, Sports } from './components/CategoryPage';


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
          path: "/privacyPolicy",
          element: (
            <>
              <Navbar />
              <PrivacyPolicy />
            </>
          )
        },
        {
          path: "/about",
          element: (
            <>
              <Navbar />
              <About />
            </>
          )
        },
        {
          path: "/contact",
          element: (
            <>
              <Navbar />
              <Contact />
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
          path: "/popular/*",
          element: (
            <>
              <Navbar />
              <Popular />
            </>
          )
        },

        {
          path: "/shippingInfo",
          element: (
            <>
              <Navbar />
              <ShippingInfo />
            </>
          )
        },
        {
          path: "/return",
          element: (
            <>
              <Navbar />
              <Return />
            </>
          )
        },
        {
          path: "/faq",
          element: (
            <>
              <Navbar />
              <FAQs />
            </>
          )
        },

        {
          path: "/categories/:categoryName?",
          element: (
            <>
              <Navbar />
              <Categories />
            </>
          )
        }

      ]
    }
  ]);

  return <RouterProvider router={router} />;

};

export default App;