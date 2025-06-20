import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  // 'https://www.royalediamonds.com/uploads/slider_banner/202411121102202405031748RD%20992%20X%20525px%20Banner.webp',

  // 'https://nakshjewels.com/wp-content/uploads/2023/12/final-bangle.jpg',
  // 'https://nakshjewels.com/wp-content/uploads/2023/12/final-pendent.png',
  // 'https://nakshjewels.com/wp-content/uploads/2023/12/final-bracelet.png',

  
  'https://diamondfactorydallas.com/cdn/shop/files/fine-jewelry-landing-top-banner_3024x.jpg?v=1662003367',
  'https://sfycdn.speedsize.com/d9acbe11-c0cc-4d19-a1ce-748a0fd38b05/https://www.miadonna.com/cdn/shop/articles/unnamed_e0339897-0cfe-4248-8b3e-bdc16a5fa66b_2000x.jpg?v=1598039910',

  'https://t4.ftcdn.net/jpg/06/21/95/01/360_F_621950127_iWI2LCEmirghN0oWHlTIaj1eOswLPKQT.jpg',
  'https://marcijewelry.com/cdn/shop/files/Anniversary-Bands_3024_HM_07_banner_3024x.jpg?v=1614400239',
  
];

const Sliders = () => {
  return (
    <div className="h-[600px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}



        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <h1 className="text-white text-5xl sm:text-6xl font-[Great Vibes] drop-shadow-md">
            NAKSH JEWELS
          </h1>
        </div>

         <style>
          {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #000000;
              font-weight: bold;
            }
          `}
        </style>

      </Swiper>
    </div>
  );
};

export default Sliders;
