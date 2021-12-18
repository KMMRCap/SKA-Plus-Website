import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from 'react-icons/fa';
import $ from 'jquery'
import MarketDetails from './Landing/MarketDetails';
import { Contexts } from "../../context/Context";

const PersonalWebsite = () => {

    const { setPlan, setType, setColor } = useContext(Contexts)

    useEffect(() => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[2].classList.add('active')
    }, [])

    const handlePlanPadge = (plan, color) => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[3].classList.add('active')
        setPlan(plan);
        setType('presonal');
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
                                onClick={() => handlePlanPadge('grade c', '#c2f1ff')}
                                className='w-75'
                                to='/market/plans/?plan=grade%20c'
                            >
                                <button className='btn btn4 px-0 w-100'>GRADE C</button>
                            </Link>
                            <label className='text-white pt-3'>500,000 تومان</label>
                        </div>

                        <div className='col-3 d-flex flex-column align-items-center'>
                            <Link
                                onClick={() => handlePlanPadge('grade b', '#81e2ff')}
                                className='w-75'
                                to='/market/plans/?plan=grade%20b'
                            >
                                <button className='btn btn5 px-0 w-100'>GRADE B</button>
                            </Link>
                            <label className='text-white pt-3' >1,000,000 تومان</label>
                        </div>

                        <div className='col-3 d-flex flex-column align-items-center'>
                            <Link
                                onClick={() => handlePlanPadge('grade a', '#00c4ff')}
                                className='w-75'
                                to='/market/plans/?plan=grade%20a'
                            >
                                <button className='btn btn6 px-0 w-100'>GRADE A</button>
                            </Link>
                            <label className='text-white pt-3' >1,500,000 تومان</label>
                        </div>
                        
                    </div>
                    <div className='row mt-sm-4 mt-2 mb-3 w-100 table-responsive'>
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

export default PersonalWebsite;