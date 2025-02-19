import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../User/Home/Home";

 

const router = createBrowserRouter([
  {
    path : "/",
    element :<Home/>,
    children :[
        {
          
        }
    ]
  }
]);

function Routes() {
    return <RouterProvider router={router} />;
}

export default Routes;
