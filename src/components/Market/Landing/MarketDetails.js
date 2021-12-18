import React from "react";
import { NavLink } from "react-router-dom";
import $ from 'jquery'

const MarketDetails = () => {

    const handlePageBadge = () => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[2].classList.add('active')
    }

    return (
        <div className='plans d-flex justify-content-center align-items-center pe-lg-4 pt-xl-0'>
            <div className='d-flex flex-column'>
                <div className='text-center text-lg-end' style={{width:'95%'}}>
                    <h2 className='text-white'>SELECT YOUR
                        <span className='text-success ps-2'>PLAN</span>
                    </h2>
                    <h3 className='text-white-50'>جهت مشاهده پلن ها <br className='d-none d-lg-block' /> نوع وب سایت خود را انتخاب کنید</h3>
                    <hr className='spliter mx-auto mx-lg-0 mt-1 mt-sm-2' />
                </div>
                <div className='d-flex d-lg-block justify-content-evenly pe-0 pe-sm-5 pe-lg-0'>
                    <NavLink onClick={handlePageBadge} className='d-grid mt-1 mt-sm-4' to='/market/shop-website'>
                        <button className='btn text-white-50'>وب سایت فروشگاهی</button>
                    </NavLink>
                    <NavLink onClick={handlePageBadge} className='d-grid mt-1 mt-sm-4' to='/market/personal-website'>
                        <button className='btn text-white-50'>وب سایت شخصی</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MarketDetails;