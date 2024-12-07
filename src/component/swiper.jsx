import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import review1 from '../../public/img/review1.png'
import review2 from '../../public/img/review2.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return `${review1}`;
}

function imgUrl2() {
  const id = rand(1, 200);
  return `${review2}`;
}

function createSlide() {
  return (
    <SwiperSlide>
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}

function createSlidce2() {
  return (
    <SwiperSlide>
      <img className="img" src={imgUrl2()} alt="" />
    </SwiperSlide>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      centeredSlides={true}
      loop={true}
    >
      
      {createSlidce2()}
      {createSlide()}
      {createSlidce2()}
      {createSlide()}
      {createSlidce2()}
      {createSlide()}
      {createSlidce2()}
      {createSlide()}
    </Swiper>
  );
};




// const createSlide = () => (
//   <SwiperSlide>
//         <div
//       style={{
//         height: '200px',
//         backgroundImage: `url(${review1})`, // 画像を背景に設定
//         backgroundRepeat: 'no-repeat'
        
//       }}
//     >
//     </div>
//   </SwiperSlide>
// );

// const SliderComponent = () => {
//   return (
//     <Swiper
//       modules={[Pagination, Autoplay]}
//       slidesPerView={1}
//       navigation
//       autoplay={{ delay: 10000 }}
//       pagination={{ clickable: true }}
//       direction={"horizontal"}
//     >
//       {createSlide()}
//     </Swiper>
//   );
// };

// export default SliderComponent;