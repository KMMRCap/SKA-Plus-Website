import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillCaretLeft } from 'react-icons/ai';

const HeaderNavs = (props) => {
    return (
        <ul className='nav-links me-md-5 me-3 ps-0 ps-sm-3'>
            <li className='mx-sm-3 mx-1'>
                <NavLink to='/'>ثبت نام / ورود
                    <AiFillCaretLeft color='#1ef25f' size='1.8rem' />
                </NavLink>
            </li>
            <li className='mx-sm-3 mx-1'>
                <NavLink to='/about-us'>درباره ما</NavLink>
            </li>
            <li className='mx-sm-3 mx-1'>
                <NavLink to='/contact-us'>تماس با ما</NavLink>
            </li>
        </ul>
    );
}

export default HeaderNavs;