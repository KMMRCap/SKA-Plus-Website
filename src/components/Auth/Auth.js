import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import $ from 'jquery'

const Auth = (props) => {

    useEffect(() => {
        if(window.location.href.split('/').at(-1) === 'auth'){
            $('.nav-logo')[0].style.color='black'
        }
        $('.page-badge').removeClass('active')
        $('.page-badge')[1].classList.add('active')
    }, [])
    
    return (
        <>
            <LoginForm />
            <SignUpForm />
        </>
    );
}

export default Auth;