import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import "./index.css";
import Login from './pages//users/Login';
import Home from './pages/Home';
import Register from './pages/users/Register';

import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () =>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path:'/',
      element:<Home/>
    },
    {
      path:'/',
      element:<Home/>
    },{
      path:'/',
      element:<Home/>
    }
  
  ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>  
    </div>
  );
}

export default App;
