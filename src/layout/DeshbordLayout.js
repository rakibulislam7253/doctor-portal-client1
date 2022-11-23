import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';
import Header from '../Page/Home/Sheard/Header/Header';

const DeshbordLayout = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet/>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to={'/deshbord'} >My Appointment</Link></li>
                        <li><Link to={'/deshbord/allusers'} >All users</Link></li>
                   
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default DeshbordLayout;