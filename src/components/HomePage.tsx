import React from 'react';
import {  Link  } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        
<section className="flex items-center justify-center h-screen bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize:'cover'}}>
  <div className="flex p-36 m-36">
    <div className="text-center justify-center ">
      <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Demo Project On CMS</h1>

      <p className="mt-6 lg:text-lg text-white">Do visit and explore!</p>

      <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                       
                        <Link to="/signup">
                            <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Signup</button>
                        </Link>
        {/* <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Notify Me</button> */}
      </div>
      <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        {/* Change button to login button and link it to login page */}
                        <Link to="/login">
                            <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Login</button>
                        </Link>
       </div>
    </div>
  </div>
  
</section>
    );
};


export default HomePage;
