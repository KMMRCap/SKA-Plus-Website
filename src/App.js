import React from "react";
import { Route, Routes } from "react-router";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Landing from './components/Main/Landing';
import AboutUs from './components/Main/AboutUs';
import ContactUs from './components/Main/ContactUs';
import Market from './components/Market/Landing/Market';
import ShopWebsite from './components/Market/ShopWebsite';
import PersonalWebsite from './components/Market/PersonalWebsite';
import Plans from './components/Market/Plans/Plans';
import Factor from "./components/Market/Factor";

const App = () => {

  return (
    <div className="layout">
      <Header />
      <div className='main-cont'>
        <SideNav />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/market' element={<Market />} />
            <Route path='/market/personal-website' element={<PersonalWebsite />} />
            <Route path='/market/shop-website' element={<ShopWebsite />} />
            <Route path='/market/plans' element={<Plans />} />
            <Route path='/market/invoice' element={<Factor />} />
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;