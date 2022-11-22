import { createBrowserRouter } from "react-router-dom"
import DeshbordLayout from "../../layout/DeshbordLayout"
import Main from "../../layout/Main"
import Appointment from "../../Page/Appointment/Appointment"
import Deshbord from "../../Page/Deshbord/Deshbord/Deshbord"
import MyAppointment from "../../Page/Deshbord/MyAppointment"
import Home from "../../Page/Home/Home/Home"
import Login from "../../Page/Home/Login/Login"
import Signup from "../../Page/Home/signup/Signup"
import Privaterouter from "../PrivateRouter/Privaterouter"
export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/signup',
                    element: <Signup></Signup>
               },
               {
                    path: '/appointment',
                    element: <Appointment></Appointment>
               }
          ]

     },

     {
          path: "/deshbord",
          element: <Privaterouter><DeshbordLayout></DeshbordLayout></Privaterouter>,
          children:[
               {
                    path:'/deshbord',
                    element:<MyAppointment></MyAppointment>
               }
          ]

     }
])
export default router