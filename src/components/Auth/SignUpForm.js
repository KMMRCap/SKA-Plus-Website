import React from 'react';
import { Formik, Form, Field } from 'formik';
import AuthInputs from './AuthInputs';

const SignUpForm = () => {

    return (
        <div className="sign-cont">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: '',
                    authCode: '',
                    password: '',
                    passwordRepeat: '',
                    reference: '',
                    terms: false
                }}

                validate={values => {
                    const errors = {};

                    if (!values.name) {
                        errors.name = 'اجباری';
                    } else if (values.name.match(/\d+/g)) {
                        errors.name = 'باید یک متن باشد'
                    }

                    if (!values.email) {
                        errors.email = 'اجباری';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'ایمیل اشتباه';
                    }

                    if (!values.phoneNumber) {
                        errors.phoneNumber = 'اجباری';
                    } else if (values.phoneNumber.match(/^[A-Za-z]+$/)) {
                        errors.phoneNumber = 'باید عدد باشد'
                    } else if (values.phoneNumber.length < 11) {
                        errors.phoneNumber = 'حداقل 11 کاراکتر';
                    }

                    if (!values.authCode) {
                        errors.authCode = 'اجباری';
                    }

                    if (!values.password) {
                        errors.password = 'اجباری';
                    } else if (values.password.length < 6) {
                        errors.password = 'حداقل 6 کاراکتر';
                    }

                    if (!values.passwordRepeat) {
                        errors.passwordRepeat = 'اجباری';
                    } else if (values.passwordRepeat !== values.password) {
                        errors.passwordRepeat = 'پسورد ها یکی نیستند';
                    }

                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    if (values.terms) {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }else{
                        alert("برای ثبت نام باید توافق نامه را بپذیرید")
                    }
                }}
            >
                <Form>
                    <div className='form-header'>
                        <h4 className='text-black-50 pb-lg-4 pt-lg-0 pt-0'>ثبت نام</h4>
                    </div>
                    <AuthInputs
                        id="name"
                        name="name"
                        placeholder="نام و نام خانوادگی"
                        type="text"
                    />
                    <AuthInputs
                        id="signUpemail"
                        name="email"
                        placeholder="آدرس ایمیل"
                        type="email"
                    />
                    <div className='d-flex num-row'>
                        <AuthInputs
                            className='w-50'
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="شماره موبایل"
                            type="tel"
                            max='11'
                        />
                        <div className='d-flex align-items-center w-50'>
                            <a className='text-black-50 w-100 mt-3 m-2 mb-0' href='/'>دریافت کد تایید</a>
                            <AuthInputs
                                id="authCode"
                                name="authCode"
                                placeholder="- - - -"
                                type="tel"
                                max='4'
                            />
                        </div>
                    </div>
                    <div className='d-flex' style={{width:'80%'}}>
                        <AuthInputs
                            className='ms-2'
                            id="signUppassword"
                            name="password"
                            placeholder="کلمه عبور"
                            type="password"
                        />
                        <AuthInputs
                            className='me-2'
                            id="passwordRepeat"
                            name="passwordRepeat"
                            placeholder="تکرار کلمه عبور"
                            type="password"
                        />
                    </div>
                    <div className='d-flex align-items-center ref-row'>
                        <label className='w-25 m-1 mt-3 mb-0 text-black-50 text-center'>کد معرف :</label>
                        <AuthInputs
                            className='w-75'
                            id="reference"
                            name="reference"
                            placeholder=""
                            type="text"
                        />
                    </div>
                    <div className='d-flex mt-3 mb-3 align-items-center justify-content-center'>
                        <Field type="checkbox" name='terms' />
                        <label className='text-black-50 me-2'>
                            <label className='text-danger ms-1'> توافق نامه اسکاپلاس</label>
                            را مطالعه و تمام شرایط آن را میپذیرم .
                        </label>
                    </div>
                    <div className="submit-row">
                        <button type="submit" className="btn mt-sm-2">ثبت نام</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUpForm;