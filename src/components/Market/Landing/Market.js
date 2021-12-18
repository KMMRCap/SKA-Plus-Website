import React, { useEffect } from "react";
import MarketDetails from './MarketDetails';
import MarketDecor from "./MarketDecor";
import $ from 'jquery'

const Market = () => {

    useEffect(() => {
        $('.page-badge').removeClass('active')
        $('.page-badge')[2].classList.add('active')
    }, [])

    return (
        <>
            <div className='market-main d-flex'>
                <MarketDecor />
                <MarketDetails />
            </div>
        </>
    );
}

export default Market;