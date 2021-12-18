import React from "react";
import { BsPlusLg } from 'react-icons/bs';
import { Link } from "react-router-dom";
import $ from 'jquery'

const HeaderLogo = (props) => {

    const handleLogoColor = () =>{
        $('.nav-logo')[0].style.color='white';
        $('.page-badge').removeClass('active')
        $('.page-badge')[0].classList.add('active')
        $('.main')[0].style.background = 'unset'
    }

    return (
        <Link onClick={handleLogoColor} className='nav-logo ms-md-5 ms-3' to='/'>
            <h2>PLUS</h2>
            <h1>SKA</h1>
            <BsPlusLg size='1.5rem' color='#1ef25f' />
        </Link>
    );
}

export default HeaderLogo;