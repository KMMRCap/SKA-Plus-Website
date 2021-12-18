import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Contexts } from './../../../context/Context';

const PlansDetails = () => {

    const { plan, type, color } = useContext(Contexts);

    return (
        <div className='plans d-flex justify-content-center align-items-center pe-lg-4 pt-xl-0'>
            <div className='d-flex flex-lg-column flex-row text-right ps-lg-5'>
                <div>
                    <div className='d-flex flex-row-reverse justify-content-end'>
                        <h1 style={{color}} className='me-2'>{plan.toUpperCase()}</h1>
                        <h1 className='text-white'>PLAN</h1>
                    </div>
                    <h5 className='text-white-50'>شما
                        {type === 'shop' ? ' وب سایت فروشگاهی'
                            : ' وب سایت شخصی'}
                    </h5>
                    <h5 className='text-white-50'>پلن {plan.toUpperCase()} را انتخاب کرده اید</h5>
                    <hr className='spliter' />
                </div>
                <div className='pe-lg-0 pe-sm-5 pe-4'>
                    {type === 'shop' ?
                        <NavLink className='d-grid mt-4' to='/market/shop-website'>
                            <button className='btn text-white-50'>وب سایت فروشگاهی</button>
                        </NavLink>
                        :
                        <NavLink className='d-grid mt-4' to='/market/personal-website'>
                            <button className='btn text-white-50'>وب سایت شخصی</button>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    );
}

export default PlansDetails;