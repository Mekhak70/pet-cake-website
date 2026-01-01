'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  '/IMG_1255.PNG',
  '/IMG_1257.JPG',
  '/IMG_1267.PNG',
];

export default function PetSlider() {
  return (
    <div className="relative mx-auto w-full max-w-md" style={{ width: '370px', cursor: 'pointer' }}>
      <div className="absolute inset-0 rounded-full " />

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        className="relative rounded-2xl"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt="Pet cake"
              width={370}
              height={370}
              className="
              rounded-2xl
              object-cover
              scale-110        /* սկզբնական չափը 110% */
              max-md:scale-100     /* միջին էկրանների համար բնական չափ */
              max-sm:scale-90      /* փոքր էկրանների համար 90% */
              transition-transform
              duration-500
              ease-in-out
            "
              priority={i === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
