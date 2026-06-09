import { createBrowserRouter, Navigate, replace } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AdminMainLayout from '../Dashboard/layout/AdminMainLayout'
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Product from "../Pages/Products/Products/Shop";
import Cart from "../Pages/Cart/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist/Wishlist";
import Orders from "../Pages/Orders/Orders/Orders";
import OurCategory from "../Pages/OurCategories/OurCategory/OurCategory";
import VariableProduct from "../Component/Product/VariableProduct";
import SimpleProduct from "../Component/Product/SimpleProduct";
import Dashboard from "../Dashboard/Pages/Dashboard";
import User from "../Dashboard/Pages/User";
import MainContent from "../Dashboard/component/MainContent";





const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            // {
            //     path: '/',
            //     element: <Home />
            // },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Product />,
                // loader: ()=> fetch('/products.json')
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/category/:category',
                element: <OurCategory />
            },
            {
                path: '/orders/:category',
                element: <Orders />
            },
            {
                path: '/orders',
                element: <Navigate to="/orders/electronic" replace />,
            },

            {
                path: '/login',
                errorElement: <Error />,
                element: <Login />
            }
            ,
            {
                path: '/register',
                errorElement: <Error />,
                element: <Register />
            }
            ,
            {
                path: '/product/:id',
                errorElement: <Error />,
                element: <VariableProduct />
            }
            ,

        ]

    },
    {
        path: '/admin',
        element: <AdminMainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/admin/dashboard',
                errorElement: <Error />,
                element: <Dashboard></Dashboard>
            },
            {
                path: '/admin',
                errorElement: <Error />,
                element: <MainContent></MainContent>
            },
            {
                path: '/admin/user',
                errorElement: <Error />,
                element: <User></User>
            }
        ]
    },
])
export default Router;