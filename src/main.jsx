import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/Navbar/Login";
import Register from "./components/Navbar/Register";
import AllTouristSpot from "./components/Navbar/AllTouristSpot";
import AddTouristSpot from "./components/Navbar/AddTouristSpot";
import MyList from "./components/Navbar/MyList";
import CardDetails from "./components/Home/Cards/CardDetails";
import UpdateTouristSpot from "./components/UpdateTouristSpot/UpdateTouristSpot";

import Error from "./components/Error/Error";
import CountryList from "./components/Home/CountryList";
import AuthProvider from "./components/Provider/Provider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot />,
      loader:()=>fetch('https://assignment10-mongodb-auth-server.vercel.app/tourists')
      },
      {
        path: "/addTouristSpot",
        element:<PrivateRoute><AddTouristSpot /></PrivateRoute>,
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList /></PrivateRoute>,
        loader:()=>fetch('https://assignment10-mongodb-auth-server.vercel.app/tourists')
      },
      {
        path: "/carddetails/:id",
        element:<PrivateRoute><CardDetails /></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment10-mongodb-auth-server.vercel.app/tourists/${params.id}`)
      },
      {
        path:"/updateSpot/:id",
        element:<PrivateRoute><UpdateTouristSpot/></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment10-mongodb-auth-server.vercel.app/tourists/${params.id}`)
        
      },
     
      {
        path:'/countryList/:id',
        element:<CountryList></CountryList>,
        loader:()=>fetch('https://assignment10-mongodb-auth-server.vercel.app/tourists')
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>
);
