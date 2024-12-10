import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecommendItem = ({ image, alt }) => (
    <div className="recommend-item">
        <img src={image} alt={alt} />
    </div>
);

const RecommendSwiper = () => {
    return (
        <div className="recommend-section">
            <h2>おすすめ・特集</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    }
                }}
            >
                {recommendItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <RecommendItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecommendSwiper;