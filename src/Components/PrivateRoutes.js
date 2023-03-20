import React, { Children } from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import Cookie from 'js-cookie'

const PrivateRoutes = () => {
    const auth = Cookies.get('auth');
    return (
        auth.token ? <Outlet/> : <Navigate to='/' />
    )
}


export default PrivateRoutes
