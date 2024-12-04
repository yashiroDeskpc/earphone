import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const data = ["Card 1", "Card 2", "Card 3", "Card 4"];

const Home = () => {
  return (
    <>
     <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {data.map((d) => (
          <SwiperSlide>
            <div style={{ background: "yellow", height: "100px", margin:"50px" }}>{d}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Home;
