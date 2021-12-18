import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const ContactUs = (props) => {
    return (
        <div className='main-content'>
            <div className='landing-cont'>
                <div className='about-title'>
                    <div>
                        <h1>CONTACT<span>US</span></h1>
                    </div>
                    <h6 className='mt-4 mt-sm-0'>تماس با ما</h6>
                </div>
                <div className='about-text py-2 py-sm-4'>
                    <p>دفتر مرکزی : تهران ، خیابان وزرا ، خیابان هفتم
                        پلاک 22 ، طبقه 3 ، کد پستی : 123123123</p>
                </div>
                <div className='about-text py-2 py-sm-4'>
                    <p>
                        شماره تلفن : 071372727272
                        <br />
                        شماره فکس : 071372727272
                    </p>
                </div>
                <div className='about-text py-2 py-sm-4'>
                    <p>شبکه های اجتماعی</p>
                    <div className='contact-social'>
                        <AiOutlineInstagram />
                        <FaTelegramPlane />
                        <FaWhatsapp />
                        <FiFacebook />
                    </div>
                </div>
                <div className='contact-form pt-2 pt-sm-4'>
                    <p>
                        جهت مشاوره رایگان شماره تماس خود را در کادر زیر وارد کنید.
                        <br />
                        کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت :
                    </p>
                    <input type='tel' placeholder='09.....' />
                    <button className='btn'>ثبت</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;