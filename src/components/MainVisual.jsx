import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';

import './styles.css';

import bg1 from '../img/mainbg01.jpg'
import bg2 from '../img/mainbg02.jpg'
import bg3 from '../img/mainbg03.jpg'
import bg4 from '../img/mainbg04.jpg'



export default function MainVisual() {
    const bgImges = [
        {
            id: 1,
            bg: bg1,
            title: '공식몰 단독 신규회원 혜택',
            text: '1만원 이상 첫 구매 시 스타터 키트 증정'
        },
        {
            id: 2,
            bg: bg2,
            category: 'magic press',
            title: 'Sugar Pop',
            text: 'NEW 컬러 출시 풀컬러 페디 ~33%OFF'
        },
        {
            id: 3,
            bg: bg3,
            category: 'one gel',
            title: 'NEW! Launching',
            text: '퀵&이지 젤 폴리시 원젤 네일 스티커+LED 램프 증정'
        },
        {
            id: 4,
            bg: bg4,
            category: 'glaze',
            title: 'Amazing Spring',
            text: '글레이즈 단독 혜택 인기 봄 디자인 ~50% OFF'
        }
    ]

    return (
        <>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >

                {bgImges.map((img, id) => (
                    <SwiperSlide key={id} >
                        <img src={img.bg} alt={img.text} />
                        <div className="titleArea">
                            <h2>{img.category}</h2>
                            <strong>{img.title}</strong>
                            <p>{img.text}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}

