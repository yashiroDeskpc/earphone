// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/scrollbar';

// // Import required modules
// import { Scrollbar } from 'swiper/modules';

// export default function Checked() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3} // スライドを3つ表示
//         spaceBetween={10} // スライド間の余白
//         scrollbar={{
//           draggable: true, // スクロールバーをドラッグ可能にする
//         }}
//         modules={[Scrollbar]} // 使用するモジュールを指定
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from 'swiper/modules';


export default function RecentProducts() {
  const products = [
    { id: 1, image: "product1.jpg", name: "商品名A", company: "B社", price: "¥65,540(税込み)", points: "120pt", rating: "4.0" },
    { id: 2, image: "product2.jpg", name: "商品名B", company: "B社", price: "¥65,540(税込み)", points: "120pt", rating: "4.0" },
    { id: 3, image: "product3.jpg", name: "商品名C", company: "B社", price: "¥65,540(税込み)", points: "120pt", rating: "4.0" },
    { id: 4, image: "product4.jpg", name: "商品名D", company: "B社", price: "¥65,540(税込み)", points: "120pt", rating: "4.0" },
    { id: 5, image: "product5.jpg", name: "商品名D", company: "B社", price: "¥65,540(税込み)", points: "120pt", rating: "4.0" },
  ];

  return (
    <div className="recent-products">
        <img src="" alt="" />
      <h2>最近チェックした商品</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        scrollbar={{
        draggable: true, 
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide 
          key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="badge-container">
                  <span className="badge new">新品</span>
                </div>
                <p className="company">{product.company}</p>
                <p className="product-name">{product.name}</p>
                <p className="rating">★★★★ {product.rating}</p>
                <p className="points">{product.points}</p>
                <p className="price">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
