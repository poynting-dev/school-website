import React, { useEffect, useRef, useState } from "react";
import "./ImageCorousal.css";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import { Fancybox, Carousel } from "@fancyapps/ui/dist/fancybox.umd";
import "@fancyapps/ui/dist/fancybox.css";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ImageCorousal() {
  const mainCarouselRef = useRef(null);
  const thumbCarouselRef = useRef(null);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    // Initialise Carousel
    const mainCarousel = new Carousel(mainCarouselRef.current, {
      Dots: false,
      // animated: true,
    });

    // Thumbnails
    const thumbCarousel = new Carousel(thumbCarouselRef.current, {
      Sync: {
        target: mainCarousel,
        friction: 0,
      },
      Dots: false,
      Navigation: false,
      center: true,
      slidesPerPage: 1,
      infinite: false,
    });

    // Customize Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
      Carousel: {
        on: {
          change: (that) => {
            mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
              friction: 0,
            });
          },
        },
      },
    });

    return () => {
      mainCarousel.destroy();
      thumbCarousel.destroy();
      // Fancybox.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={mainCarouselRef}
        className="carousel mainCarousel w-1/2 max-w-5xl mx-auto"
      >
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/1/900x600"
          data-fancybox="gallery"
          data-caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. Morbi quis ipsum quis velit."
        >
          <img alt="" src="https://lipsum.app/id/1/600x400" />
        </div>
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/2/900x600"
          data-fancybox="gallery"
          data-caption="Ut semper, justo eget vehicula vestibulum, enim enim suscipit lectus, et sagittis nibh risus vel metus. Quisque eu ornare ante, et gravida mauris"
        >
          <img alt="" src="https://lipsum.app/id/2/600x400" />
        </div>
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/3/900x600"
          data-fancybox="gallery"
          data-caption="Hello 🖐"
        >
          <img alt="" src="https://lipsum.app/id/3/600x400" />
        </div>
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/4/900x600"
          data-fancybox="gallery"
          data-caption="Another caption"
        >
          <img alt="" src="https://lipsum.app/id/4/600x400" />
        </div>
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/5/900x600"
          data-fancybox="gallery"
        >
          <img alt="" data-lazy-src="https://lipsum.app/id/5/600x400" />
        </div>
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/6/900x600"
          data-fancybox="gallery"
        >
          <img alt="" src="https://lipsum.app/id/6/600x400" />
        </div>
        <div
          className="carousel__slide"
          data-src="https://lipsum.app/id/7/900x600"
          data-fancybox="gallery"
        >
          <img alt="" src="https://lipsum.app/id/7/600x400" />
        </div>
      </div>

      <div
        ref={thumbCarouselRef}
        className="carousel thumbCarousel max-w-xl mx-auto"
      >
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/1/100x100"
          />
        </div>
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/2/100x100"
          />
        </div>
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/3/100x100"
          />
        </div>
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/4/100x100"
          />
        </div>
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/5/100x100"
          />
        </div>
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/6/100x100"
          />
        </div>
        <div className="carousel__slide">
          <img
            className="panzoom__content"
            alt=""
            src="https://lipsum.app/id/7/100x100"
          />
        </div>
      </div>
      {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}

// export default function ImageCorousal() {
//   return (
//     <div>
//       <div className="text-wrapper">
//         <span>This is slide 1</span>
//       </div>
//       <div className="text-wrapper">
//         <span>This is slide 2</span>
//       </div>
//       <div className="text-wrapper">
//         <span>This is slide 3</span>
//       </div>
//       <div className="text-wrapper">
//         <span>This is slide 4</span>
//       </div>
//       <div className="text-wrapper">
//         <span>This is slide 5</span>
//       </div>
//     </div>
//   );
// }
