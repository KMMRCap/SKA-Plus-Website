import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const AboutUs = (props) => {
    return (
        <div className='main-content'>
            <div className='landing-cont'>
                <div className='about-title pb-lg-4'>
                    <div>
                        <h1>ABOUT<span>US</span></h1>
                    </div>
                    <h6 className='mt-4 mt-sm-0'>درباره ما</h6>
                </div>
                <div className='about-text'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی
                        نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است. چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که
                        لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف
                        بهبود ابزارهای کاربردی می باشد. کتابهای
                        زیادی در شصت و سه درصد گذشته، حال و آینده
                        شناخت فراوان جامعه و متخصصان را می طلبد
                        تا با نرم افزارها شناخت بیشتری را برای
                        طراحان رایانه ای علی الخصوص طراحان خلاقی
                        و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                        <br />
                        در این صورت می توان امید داشت که تمام
                        و دشواری موجود در ارائه راهکارها و
                        شرایط سخت تایپ به پایان رسد وزمان مورد
                        نیاز شامل حروفچینی دستاوردهای اصلی و
                        جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
                <div className='about-social pt-lg-4'>
                    <AiOutlineInstagram />
                    <FaTelegramPlane />
                    <FaWhatsapp />
                    <FiFacebook />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;