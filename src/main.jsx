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
import Countries from "./components/Home/Countries/Countries";
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
        loader:()=>fetch('http://localhost:5000/tourists')
      },
      {
        path: "/addTouristSpot",
        element:<PrivateRoute><AddTouristSpot /></PrivateRoute>,
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList /></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/tourists')
      },
      {
        path: "/carddetails/:id",
        element:<PrivateRoute><CardDetails /></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/tourists/${params.id}`)
      },
      {
        path:"/updateSpot/:id",
        element:<PrivateRoute><UpdateTouristSpot/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/tourists/${params.id}`)
        
      },
      {
        path:'/countries',
        element:<Countries></Countries>
      },
      {
        path:'/countryList/:id',
        element:<CountryList></CountryList>,
        loader:()=>fetch('http://localhost:5000/tourists')
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
