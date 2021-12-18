import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

const Landing = (props) => {

    useEffect(() => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[0].classList.add('active')
    }, [])

    const handleNavbar = () => {
        $('.nav-logo')[0].style.color = "black";
        $('.page-badge').removeClass('active')
        $('.page-badge')[1].classList.add('active')
    }

    return (
        <div className='main-content'>
            <div className='landing-cont d-flex justify-content-center'>
                <div className='d-inline-block pt-5 mt-5'>
                    <h1>UNLOCK YOUR</h1>
                    <h1>ONLINE GROWTH</h1>
                    <h1>POTENTIAL</h1>
                    <Link onClick={handleNavbar} to='/auth'>
                        <button className='btn auth-page-button'>Click To Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;