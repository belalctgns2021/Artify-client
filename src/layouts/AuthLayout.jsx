import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
      <nav>
          <Navbar></Navbar>
      </nav>
      <main className='w-11/12 mx-auto py-5'>
     <Outlet></Outlet>
      </main>
      </div>
    );
};

export default AuthLayout;