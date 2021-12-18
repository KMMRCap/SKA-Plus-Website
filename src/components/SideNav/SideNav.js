import React from "react";
import { BsCircle, BsSquare } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import $ from 'jquery'

const SideNav = (props) => {
    
    const handleLogoColor = (color) => {
        $('.nav-logo')[0].style.color= color;
    }

    return (
        <div className='side-nav-cont'>
            <div className='side-nav'>
                <div className='position-relative'>
                    <Link onClick={() => handleLogoColor('white')} to='/'>
                        <BsCircle color='white' className='page-badge active' />
                    </Link>
                    <span className='page-number'>1</span>
                    <span className='home-badge'>Home</span>
                </div>
                <hr className='line' />
                <div className='position-relative'>
                    <Link onClick={() => handleLogoColor('black')} to='/auth'>
                        <BsCircle color='white' className='page-badge' />
                    </Link>
                    <span className='page-number'>2</span>
                </div>
                <hr className='line' />
                <div className='position-relative'>
                    <Link onClick={() => handleLogoColor('white')} to='/market'>
                        <BsCircle color='white' className='page-badge' />
                    </Link>
                    <span className='page-number'>3</span>
                </div>
                <hr className='line' />
                <div className='position-relative'>
                    <BsCircle color='white' className='page-badge' />
                    <span className='page-number'>4</span>
                </div>
                <hr className='line' />
                <div className='position-relative'>
                    <BsCircle color='white' className='page-badge' />
                    <span className='page-number'>5</span>
                </div>
                <hr className='line' />
                <div className='position-relative'>
                    <BsSquare color='white' className='page-badge' />
                    <span className='complete-badge'>Complete</span>
                </div>
                <div className='cart-cont'>
                    <Link to='/'>
                        <FaShoppingCart size='1.5rem' color='white' />
                        سبد خرید
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideNav;