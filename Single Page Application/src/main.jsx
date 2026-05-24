import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobils from './Components/Mobils/Mobils.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index:true, Component: Home},
      {path:"mobile", Component:Mobils}
    ]
  },{
    path:"about",
    element: <div>Hellow Geys I Am MD Hafizul Islam</div>
  },{
    path:"app",
    Component: App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
