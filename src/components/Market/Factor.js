import React, { useContext, useEffect } from "react";
import $ from 'jquery'
import { Contexts } from './../../context/Context';
import { useLocation } from "react-router";

const Factor = () => {

    const { plan, setPlan, color, setColor, setType } = useContext(Contexts)

    const location = useLocation()

    useEffect(() => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[4].classList.add('active')
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
        <div className='market-main d-flex flex-column align-items-center'>
            <div className='row w-75 factor-table justify-content-center mt-xxl-5 mt-xl-4 mt-sm-5 mt-4'>
                <div className='w-100 text-center title-cont'>
                    <h5 className='fator-title'>فاکتور نهایی</h5>
                </div>
                <div className='row w-100'>
                    <p className='text-white-50 mb-2'>برای تکمیل خرید ، موارد زیر را به دقت تکمیل کنید</p>
                    <hr className='spliter me-3 my-1 my-sm-3 my-xl-2 my-xxl-3' />
                </div>
                <div className='table-responsive'>
                    <table className="table table-bordered table-hover table-sm table-dark">
                        <thead>
                            <tr>
                                <th className='table-number' scope="col">ردیف</th>
                                <th className='table-name' scope="col">سفارشات</th>
                                <th className='table-number' scope="col">تعداد</th>
                                <th className='table-cost' scope="col">قیمت واحد</th>
                                <th className='table-cost' scope="col">قیمت کل</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>وب سایت فروشگاهی پلن Gold</td>
                                <td>1</td>
                                <td>7,000,000 تومان</td>
                                <td>7,000,000 تومان</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>خرید دامنه www.skaplus.ir</td>
                                <td>1</td>
                                <td>15,000 تومان</td>
                                <td>15,000 تومان</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>خرید دامنه www.skaplus.com</td>
                                <td>1</td>
                                <td>55,000 تومان</td>
                                <td>55,000 تومان</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>سفارش ساخت قالب اختصاصی</td>
                                <td>2</td>
                                <td>1,300,000 تومان</td>
                                <td>1,300,000 تومان</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row w-75 justify-content-between pt-xxl-5 pt-xl-3 pt-4'>
                <div className='col-4'>
                    <div className='d-flex flex-row-reverse justify-content-center pb-2 pb-sm-4'>
                        <h2 style={{ color }}>{plan.toUpperCase()}
                            <span className='text-white ms-1'>PLAN</span>
                        </h2>
                    </div>
                    <div className='text-center'>
                        <a className='print' href='/'>پرینت فاکتور</a>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='row w-100 justify-content-around align-items-center me-0'>
                        <div className='col text-center'>
                            <h6 className='text-white'>9 درصد مالیات بر ارزش افزوده</h6>
                        </div>
                        <div className='col text-center'>
                            <h4 className='text-white'>500,000 تومان</h4>
                        </div>
                    </div>
                    <div className='row w-100 justify-content-around align-items-center me-0 pt-2 pt-sm-4 pt-xl-2 pt-xxl-4'>
                        <div className='col text-center'>
                            <h6 className='text-white'>جمع نهایی پرداختی</h6>
                        </div>
                        <div className='col text-center'>
                            <h4 className='total'>7,500,000 تومان</h4>
                        </div>
                    </div>
                    <hr className='spliter3 mt-2 mt-sm-4 mt-xl-2 mt-xxl-4' />
                    <div className='d-flex pt-sm-4 pt-2 align-items-center justify-content-between'>
                        <h6 className='text-white-50 w-50'>برای تکمیل فرآیند سفارش شما ، به درگاه بانکی هدایت خواهید شد</h6>
                        <button className='btn bank-btn'>پرداخت</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Factor;