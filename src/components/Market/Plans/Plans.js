import React, { useContext, useEffect } from "react";
import PlansDetails from "./PlansDetails";
import $ from 'jquery';
import { useNavigate, useLocation } from "react-router-dom";
import { Contexts } from './../../../context/Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Plans = () => {

    const { plan, setPlan, color, setColor, setType } = useContext(Contexts)

    const navigate = useNavigate();

    const location = useLocation()

    useEffect(() => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[3].classList.add('active')
        const queryParams = new URLSearchParams(location.search)
        const getPlan = queryParams.get('plan')
        setPlan(getPlan)
        if (getPlan === ('vip' || 'gold' || 'silver')) {
            setType('shop')
        } else {
            setType('personal')
        }

        if (getPlan === 'vip') {
            setColor('pink')
        }
        else if (getPlan === 'gold') {
            setColor('gold')
        }
        else if (getPlan === 'silver') {
            setColor('white')
        }
        else if (getPlan === 'grade a') {
            setColor('#00c4ff')
        }
        else if (getPlan === 'grade b') {
            setColor('#81e2ff')
        }
        else if (getPlan === 'grade c') {
            setColor('#c2f1ff')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='market-main d-flex'>
            <div className='market-table'>
                <div className='shop-table container px-1 px-sm-2 mx-2 mx-sm-0'>
                    <div className='row w-100 shop-buttons p-0 justify-content-end'>
                        <div className='col-3'>
                            <button style={{ background: color }} className='btn text-black btn2 w-100'>{plan.toUpperCase()}</button>
                        </div>
                    </div>
                    <div className='plan-detail w-100 my-3'>
                        <Formik
                            initialValues={{
                                siteNameFa: '',
                                siteNameEn: '',
                                domainCheck: 'no',
                                domainPass: '.ir',
                                siteDomain: '',
                                siteNumber: '',
                                siteAddress: '',
                                siteNamad: 'no',
                                sitePort: 'no'
                            }}

                            validate={values => {
                                const errors = {};

                                if (!values.siteNameFa) {
                                    errors.siteNameFa = 'اجباری';
                                } else if (values.siteNameFa.match(/^[A-Za-z]+$/)) {
                                    errors.siteNameFa = 'فارسی نیست';
                                }

                                if (!values.siteNameEn) {
                                    errors.siteNameEn = 'اجباری';
                                } else if (values.siteNameEn.match(/^[\u0600-\u06FF\s]+$/)) {
                                    errors.siteNameEn = 'انگلیسی نیست'
                                }

                                if (!values.siteDomain) {
                                    errors.siteDomain = 'اجباری';
                                }

                                if (!values.siteNumber) {
                                    errors.siteNumber = 'اجباری';
                                } else if (values.siteNumber.match(/^[A-Za-z]+$/)) {
                                    errors.siteNumber = 'باید عدد باشد'
                                } else if (values.siteNumber.length < 11) {
                                    errors.siteNumber = 'حداقل 11 کاراکتر';
                                }

                                if (!values.siteAddress) {
                                    errors.siteAddress = 'اجباری';
                                }

                                return errors;
                            }}

                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                                setTimeout(() => {
                                    $('.page-badge').removeClass('active')
                                    $('.page-badge')[4].classList.add('active')
                                    navigate({
                                        pathname: '/market/invoice/',
                                        search: '?plan=' + plan
                                    });
                                }, 1000)
                            }}
                        >
                            <Form>
                                <div className='row w-100 mt-3 pt-xxl-0'>
                                    <p className='text-white-50'>برای تکمیل فرآیند سفارش ، لطفا موارد زیر را به دقت تکمیل نمایید</p>
                                    <hr className='spliter me-3 my-3' />
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 align-items-center pt-xxl-4'>
                                    <div className='col-2'>
                                        <h6 className='text-white'>نام سایت</h6>
                                    </div>
                                    <div className='col-5 position-relative'>
                                        <Field id="siteNameFa" name="siteNameFa" type='text' className='w-100' placeholder='به فارسی' />
                                        <span className="text-danger">
                                            <ErrorMessage name='siteNameFa' />
                                        </span>
                                    </div>
                                    <div className='col-5 position-relative'>
                                        <Field id="siteNameEn" name="siteNameEn" type='text' className='w-100' placeholder='به انگلیسی' />
                                        <span className="text-danger">
                                            <ErrorMessage name='siteNameEn' />
                                        </span>
                                    </div>
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 mt-2 pt-xxl-4'>
                                    <div className='col-8'>
                                        <h6 className='text-white'>آیا دامنه (آدرس سایت) توسط شما خریداری شده ؟</h6>
                                    </div>
                                    <div role='group' className='col-4 justify-content-evenly align-items-center d-flex'>
                                        <label className='text-white'>
                                            بله
                                            <Field className='me-2' name="domainCheck" id='domainCheck1' value="yes" type='radio' />
                                        </label>
                                        <label className='text-white'>
                                            خیر
                                            <Field className='me-2' name="domainCheck" id='domainCheck2' value="no" type='radio' />
                                        </label>
                                    </div>
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 mt-2 pt-xxl-4'>
                                    <div role='group' className='col-6 justify-content-evenly align-items-center d-flex'>
                                        <label className='text-white'>
                                            net.
                                            <Field className='me-2' name="domainPass" id='domainPass1' value='.net' type='radio' />
                                        </label>
                                        <label className='text-white'>
                                            com.
                                            <Field className='me-2' name="domainPass" id='domainPass2' value='.com' type='radio' />
                                        </label>
                                        <label className='text-white'>
                                            ir.
                                            <Field className='me-2' name="domainPass" id='domainPass3' value='.ir' type='radio' />
                                        </label>
                                    </div>
                                    <div className='col-6 position-relative'>
                                        <Field id="siteDomain" name="siteDomain" type='url' className='w-100' style={{ direction: 'ltr' }} placeholder='www.' />
                                        <span className="text-danger">
                                            <ErrorMessage name='siteDomain' />
                                        </span>
                                    </div>
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 mt-2 pt-xxl-4'>
                                    <div className='col-6'>
                                        <h6 className='text-white'>شماره موبایل جهت ارتباط با مدیر سایت</h6>
                                    </div>
                                    <div className='col-6 position-relative'>
                                        <Field id="siteNumber" name="siteNumber" type='tel' className='w-100' placeholder='09...' style={{ direction: 'ltr' }} />
                                        <span className="text-danger">
                                            <ErrorMessage name='siteNumber' />
                                        </span>

                                    </div>
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 mt-2 pt-xxl-4'>
                                    <div className='col-3'>
                                        <h6 className='text-white'>آدرس</h6>
                                    </div>
                                    <div className='col-9 position-relative'>
                                        <Field id="siteAddress" name="siteAddress" type='text' className='w-100' />
                                        <span className="text-danger">
                                            <ErrorMessage name='siteAddress' />
                                        </span>
                                    </div>
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 mt-2 pt-xxl-4'>
                                    <div className='col-8 col-xl-6'>
                                        <h6 className='text-white'>آیا وب سایت شما ای نماد دارد ؟</h6>
                                    </div>
                                    <div role='group' className='col-4 justify-content-evenly align-items-center d-flex'>
                                        <label className='text-white'>
                                            بله
                                            <Field className='me-2' name="siteNamad" id='siteNamad1' value='yes' type='radio' />
                                        </label>
                                        <label className='text-white'>
                                            خیر
                                            <Field className='me-2' name="siteNamad" id='siteNamad2' value='no' type='radio' />
                                        </label>
                                    </div>
                                </div>
                                <div className='row w-100 mx-0 pt-1 pt-sm-3 pt-md-4 mt-2 pt-xxl-4'>
                                    <div className='col-8 col-xl-6'>
                                        <h6 className='text-white'>آیا وب سایت شما درگاه بانکی دارد ؟</h6>
                                    </div>
                                    <div role='group' className='col-4 justify-content-evenly align-items-center d-flex'>
                                        <label className='text-white'>
                                            بله
                                            <Field className='me-2' name="sitePort" id='sitePort1' value='yes' type='radio' />
                                        </label>
                                        <label className='text-white'>
                                            خیر
                                            <Field className='me-2' name="sitePort" id='sitePort2' value='no' type='radio' />
                                        </label>
                                    </div>
                                </div>
                                <hr className='spliter2 mt-4' />
                                <div className='row w-100 py-4'>
                                    <div className='col-8 col-sm-9'>
                                        <h6 className='text-white-50'>برای تکمیل فرآیند سفارش شما ، به درگاه بانکی هدایت خواهید شد</h6>
                                    </div>
                                    <div className='col-4 col-sm-3 text-center'>
                                        <button type='submit' className='btn final'>ثبت نهایی</button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <PlansDetails />
        </div>
    );
}

export default Plans;