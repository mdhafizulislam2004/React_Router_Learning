import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobils from './Components/Mobils/Mobils.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';


const UserData=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())


const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index:true, Component: Home},
      {path:"mobile", Component:Mobils},
      {path:"laptop", Component: Laptops},
      {
        path:"users",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        Component:Users
      },
      {
        path:"users2", 
        element:<Suspense fallback={<span>Loading....</span>}>
          <Users2 UserData={UserData}></Users2>
        </Suspense>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
