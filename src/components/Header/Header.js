import React from "react";
import { Route, Routes } from "react-router";
import HeaderAccount from "./HeaderAccount";
import HeaderLogo from "./HeaderLogo";
import HeaderNavs from "./HeaderNavs";

const Header = (props) => {

    return (
        <div className='navbar'>
            <Routes>
                {["/", "/about-us", "/contact-us"].map((path, index) =>
                    <Route path={path} element={<HeaderNavs />} key={index} />
                )}
                {/* '/market/shop-website/silver-plan',
                    '/market/shop-website/vip-plan',
                    '/market/personal-website/grade-c-plan',
                    '/market/personal-website/grade-b-plan',
                    '/market/personal-website/grade-a-plan' */}
                {["/market",
                    "/market/shop-website",
                    '/market/personal-website',
                    '/market/shop-website/gold-plan',
                    '/market/invoice'
                ].map((path, index) =>
                    <Route path={path} element={<HeaderAccount />} key={index} />
                )}
                <Route path='*' element={<div className='w-25'></div>} />
            </Routes>
            <HeaderLogo />
        </div>
    );
}

export default Header;