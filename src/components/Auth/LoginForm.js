import React from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import AuthInputs from './AuthInputs';
import $ from 'jquery';

const LoginForm = (props) => {
    
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/market')
        $('.nav-logo')[0].style.color='white';
        $('.page-badge').removeClass('active');
        $('.page-badge')[2].classList.add('active');
        
    }

    return (
        <div className="log-cont">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberCheck: false,
                }}

                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'اجباری';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'ایمیل اشتباه';
                    }

                    if (!values.password) {
                        errors.password = 'اجباری';
                    } else if (values.password.length < 6) {
                        errors.password = 'حداقل 6 کاراکتر';
                    }

                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div className='form-header'>
                        <h4 className='text-white pb-lg-4 pt-lg-0 pt-2' onClick={handleRedirect} >ورود به سایت</h4>
                    </div>
                    <div className='form-detail pt-sm-3 pt-2'>
                        <p className='text-white m-0'>اگر قبلا ثبت نام کرده اید ،
                            لطفا با استفاده از ایمیل یا شماره موبایل . کلمه عبور خود ، وارد سایت شوید</p>
                    </div>
                    <AuthInputs
                        id="loginemail"
                        name="email"
                        placeholder="آدرس ایمیل / شماره موبایل"
                        type="email"
                    />
                    <AuthInputs
                        id="loginpassword"
                        name="password"
                        placeholder="کلمه عبور"
                        type="password"
                    />
                    <div className='forget-row'>
                        <a href='/'>بازیابی رمز عبور</a>
                        <div className='d-flex align-items-center'>
                            <Field type="checkbox" name="rememberCheck" />
                            <label>مرا به خاطر بسپار</label>
                        </div>
                    </div>
                    <div className="submit-row pt-lg-5 m-lg-5 m-0 p-0">
                        <button type="submit" className="btn mt-lg-5">ورود</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default LoginForm;