import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 const routesConfig = createBrowserRouter([
    {
      path : "/",
      element : <App />
    },
  ]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routesConfig}/>
)
