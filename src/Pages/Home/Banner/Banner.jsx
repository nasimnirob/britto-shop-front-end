// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import img1 from "../../../assets/banner/excited-girl-open-up.jpg";
// import img2 from "../../../assets/banner/low-angle.jpg";

// const Banner = () => {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);

//     return (
//         // <div className="w-full  group">

//         //     {/* Main Slider */}
//         //     <Swiper
//         //         modules={[Navigation, Thumbs, Autoplay]}
//         //         navigation={{
//         //             nextEl: ".custom-next",
//         //             prevEl: ".custom-prev",
//         //         }}
//         //         loop={true}
//         //         autoplay={{
//         //             delay: 3000,
//         //             disableOnInteraction: false,
//         //         }}
//         //         speed={900}
//         //         thumbs={{ swiper: thumbsSwiper }}
//         //         className="mb-4 relative"
//         //     >
//         //         <SwiperSlide>
//         //             <div className="w-full flex items-center justify-center">
//         //                 <img className="w-full" src={img1} alt="Image 1" />
//         //             </div>
//         //         </SwiperSlide>

//         //         <SwiperSlide>
//         //             <div className="w-full flex items-center justify-center">
//         //                 <img className="w-full" src={img2} alt="Image 2" />
//         //             </div>
//         //         </SwiperSlide>
//         //         <div className="custom-prev select-none absolute left-5 2xl:top-1/2 lg:top-[330px] top-0 md:top-[200px] z-10 bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
//         //             ❮
//         //         </div>

//         //         <div className="custom-next select-none absolute right-4 2xl:top-1/2 lg:top-[330px] top-1/2 z-10 bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
//         //             ❯
//         //         </div>
//         //     </Swiper>

//         //     {/* Thumbnail Slider */}
//         //     {/* <Swiper
//         //         modules={[Thumbs]}
//         //         onSwiper={setThumbsSwiper}
//         //         slidesPerView={4}
//         //         watchSlidesProgress={true}
//         //         className="max-w-lg"
//         //     >
//         //         <SwiperSlide>
//         //             <div className="mx-2 border border-gray-300 hover:border-blue-500 cursor-pointer">
//         //                 <img className="w-40" src={img1} alt="Thumb 1" />
//         //             </div>
//         //         </SwiperSlide>

//         //         <SwiperSlide>
//         //             <div className="mx-2 border border-gray-300 hover:border-blue-500 cursor-pointer">
//         //                 <img className="w-40" src={img2} alt="Thumb 2" />
//         //             </div>
//         //         </SwiperSlide>
//         //     </Swiper> */}



//         // </div>

//         <div className="w-full group">

//             {/* MAIN WRAPPER */}
//             <div className="relative">

//                 {/* Main Slider */}
//                 <Swiper
//                     modules={[Navigation, Thumbs, Autoplay]}
//                     navigation={{
//                         nextEl: ".custom-next",
//                         prevEl: ".custom-prev",
//                     }}
//                     loop={true}
//                     autoplay={{
//                         delay: 3000,
//                         disableOnInteraction: false,
//                     }}
//                     speed={900}
//                     thumbs={{ swiper: thumbsSwiper }}
//                     className="mb-4"
//                 >
//                     <SwiperSlide>
//                         <img className="w-full" src={img1} alt="Image 1" />
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img className="w-full" src={img2} alt="Image 2" />
//                     </SwiperSlide>
//                 </Swiper>

//                 {/* BUTTONS (ONLY MAIN SLIDER CENTER) */}

//                 <div className="custom-prev select-none absolute left-5 top-1/2 -translate-y-1/2 z-10 
//         bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
//         opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     ❮
//                 </div>

//                 <div className="custom-next select-none absolute right-5 top-1/2 -translate-y-1/2 z-10 
//         bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
//         opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     ❯
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Banner;


import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../../assets/banner/excited-girl-open-up.jpg";
import img2 from "../../../assets/banner/low-angle.jpg";

const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    return (
        <div className="w-full ">

            <div className="relative group">

                <Swiper
                    modules={[Navigation, Thumbs, Autoplay]}
                    loop={true}
                    speed={900}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    className="mb-4"
                >
                    <SwiperSlide>
                        <img className="w-full" src={img1} alt="Image 1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="w-full" src={img2} alt="Image 2" />
                    </SwiperSlide>
                </Swiper>

                {/* BUTTONS (ONLY MAIN IMAGE CENTER) */}
                <div className="custom-prev select-none absolute left-5 top-1/2 -translate-y-1/2 z-10 
                bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
                opacity-0 group-hover:opacity-100 transition-all duration-300">
                    ❮
                </div>

                <div className="custom-next select-none absolute right-5 top-1/2 -translate-y-1/2 z-10 
                bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
                opacity-0 group-hover:opacity-100 transition-all duration-300">
                    ❯
                </div>

            </div>


            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={10}
                watchSlidesProgress={true}
                className="max-w-xl mx-auto"
            >
                <SwiperSlide>
                    <img
                        className="w-40 border cursor-pointer opacity-80 hover:opacity-100"
                        src={img1}
                        alt="thumb1"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="w-40 border cursor-pointer opacity-80 hover:opacity-100"
                        src={img2}
                        alt="thumb2"
                    />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;