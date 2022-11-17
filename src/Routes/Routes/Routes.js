import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Appointment from "../../Page/Appointment/Appointment"
import Home from "../../Page/Home/Home/Home"
import Login from "../../Page/Home/Login/Login"
export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element:<Home></Home>
               },
               {
                    path:'/login',
                    element:<Login></Login>
               },
               {
                    path:'/appointment',
                    element:<Appointment></Appointment>
               }
          ]

     }
])
export default router