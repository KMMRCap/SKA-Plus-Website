import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from 'react-icons/fa';
import $ from 'jquery'
import MarketDetails from './Landing/MarketDetails';
import { Contexts } from "../../context/Context";

const ShopWebsite = () => {

    const { setPlan, setType, setColor } = useContext(Contexts)

    useEffect(() => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[2].classList.add('active')
    }, [])

    const handlePlanBadge = (plan, color) => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[3].classList.add('active')
        setPlan(plan);
        setType('shop');
        setColor(color)
    }

    return (
        <div className='market-main d-flex'>
            <div className='market-table px-2 px-sm-0'>
                <div className='shop-table container'>
                    <div className='row w-100 shop-buttons'>
                        <div className='col-3 p-0'>
                            <p className='text-white-50'>پلن مورد نظر خود را انتخاب کنید :</p>
                        </div>

                        <div className='col-3 d-flex flex-column align-items-center'>
                            <Link
                                onClick={() => handlePlanBadge('silver', 'white')}
                                className='w-75'
                                to='/market/plans/?plan=silver'
                            >
                                <button className='btn btn1 px-0 w-100'>SILVER</button>
                            </Link>
                            <label className='text-white pt-3' >1,600,000 تومان</label>
                        </div>

                        <div className='col-3 d-flex flex-column align-items-center'>
                            <Link
                                onClick={() => handlePlanBadge('gold', 'gold')}
                                className='w-75'
                                to='/market/plans/?plan=gold'
                            >
                                <button className='btn btn2 px-0 w-100'>GOLD</button>
                            </Link>
                            <label className='text-white pt-3' >2,500,000 تومان</label>
                        </div>

                        <div className='col-3 d-flex flex-column align-items-center'>
                            <Link
                                onClick={() => handlePlanBadge('vip', 'pink')}
                                className='w-75'
                                to='/market/plans/?plan=vip'
                            >
                                <button className='btn btn3 px-0 w-100'>VIP</button>
                            </Link>
                            <label className='text-white pt-3' >3,400,000 تومان</label>
                        </div>

                    </div>
                    <div className='row mt-sm-4 pt-2 mb-3 w-100 table-responsive'>
                        <table className="table table-hover table-sm table-dark ">
                            <tbody>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaTimes color='red' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                                <tr>
                                    <th scope="row">فروش اقساطی</th>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                    <td><FaCheck color='lightGreen' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <MarketDetails />
        </div>
    );
}

export default ShopWebsite;