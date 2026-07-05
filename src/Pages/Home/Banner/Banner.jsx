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

// old
// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import img1 from "../../../assets/banner/excited-girl-open-up.jpg";
// import img2 from "../../../assets/banner/low-angle.jpg";

// const Banner = () => {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const swiperRef = useRef(null);

//     return (
//         <div className="w-full ">

//             <div className="relative group">

//                 <Swiper
//                     modules={[Navigation, Thumbs, Autoplay]}
//                     loop={true}
//                     speed={900}
//                     autoplay={{
//                         delay: 3000,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true,
//                     }}
//                     thumbs={{ swiper: thumbsSwiper }}
//                     onSwiper={(swiper) => {
//                         swiperRef.current = swiper;
//                     }}
//                     navigation={{
//                         nextEl: ".custom-next",
//                         prevEl: ".custom-prev",
//                     }}
//                     className="mb-4"
//                 >
//                     <SwiperSlide>
//                         <img className="w-full" src={img1} alt="Image 1" />
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img className="w-full" src={img2} alt="Image 2" />
//                     </SwiperSlide>
//                 </Swiper>

//                 {/* BUTTONS (ONLY MAIN IMAGE CENTER) */}
//                 <div className="custom-prev select-none absolute left-5 top-1/2 -translate-y-1/2 z-10 
//                 bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
//                 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     ❮
//                 </div>

//                 <div className="custom-next select-none absolute right-5 top-1/2 -translate-y-1/2 z-10 
//                 bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
//                 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     ❯
//                 </div>

//             </div>


//             <Swiper
//                 modules={[Thumbs]}
//                 onSwiper={setThumbsSwiper}
//                 slidesPerView={4}
//                 spaceBetween={10}
//                 watchSlidesProgress={true}
//                 className="max-w-xl mx-auto"
//             >
//                 <SwiperSlide>
//                     <img
//                         className="w-40 border cursor-pointer opacity-80 hover:opacity-100"
//                         src={img1}
//                         alt="thumb1"
//                     />
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <img
//                         className="w-40 border cursor-pointer opacity-80 hover:opacity-100"
//                         src={img2}
//                         alt="thumb2"
//                     />
//                 </SwiperSlide>
//             </Swiper>

//         </div>
//     );
// };

// export default Banner;



// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Thumbs, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import img1 from "../../../assets/banner/excited-girl-open-up.jpg";
// import img2 from "../../../assets/banner/low-angle.jpg";

// const Banner = () => {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const swiperRef = useRef(null);
//     const queueRef = useRef([]);
//     const isAnimatingRef = useRef(false);

//     const processQueue = () => {
//         if (queueRef.current.length === 0) {
//             isAnimatingRef.current = false;
//             return;
//         }

//         // queue তে অনেক pending থাকলে মাঝেরগুলো skip করে শুধু last টা রাখো
//         if (queueRef.current.length > 3) {
//             const lastDirection = queueRef.current[queueRef.current.length - 1];
//             const count = queueRef.current.length;
//             queueRef.current = [lastDirection]; // বাকি সব বাদ, শুধু last

//             // current index manually jump করো
//             const swiper = swiperRef.current;
//             if (swiper) {
//                 const jumpTo = swiper.realIndex + (lastDirection === "next" ? count : -count);
//                 swiper.slideToLoop(jumpTo, 0); // 0ms = instant jump
//                 isAnimatingRef.current = false;
//                 return;
//             }
//         }

//         const direction = queueRef.current.shift();
//         isAnimatingRef.current = true;

//         let speed;
//         if (queueRef.current.length === 0) {
//             speed = 700;       // single / last click → smooth
//         } else if (queueRef.current.length <= 2) {
//             speed = 150;       // কিছু pending → fast
//         } else {
//             speed = 50;        // অনেক pending → ultra fast
//         }

//         if (direction === "next") {
//             swiperRef.current?.slideNext(speed);
//         } else {
//             swiperRef.current?.slidePrev(speed);
//         }
//     };
//     const handleNext = () => {
//         queueRef.current.push("next");
//         if (!isAnimatingRef.current) {
//             processQueue();
//         }
//     };

//     const handlePrev = () => {
//         queueRef.current.push("prev");
//         if (!isAnimatingRef.current) {
//             processQueue();
//         }
//     };

//     return (
//         <div className="w-full">

//             <div className="relative group">

//                 <Swiper
//                     modules={[Thumbs, Autoplay]}
//                     loop={true}
//                     speed={700}
//                     autoplay={{
//                         delay: 4000,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true,
//                     }}
//                     thumbs={{ swiper: thumbsSwiper }}
//                     onSwiper={(swiper) => {
//                         swiperRef.current = swiper;
//                     }}
//                     onTransitionEnd={() => {
//                         processQueue();
//                     }}
//                     className="mb-4"
//                 >
//                     <SwiperSlide>
//                         <img className="w-full" src={img1} alt="Image 1" />
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <img className="w-full" src={img2} alt="Image 2" />
//                     </SwiperSlide>
//                 </Swiper>

//                 <div
//                     onClick={handlePrev}
//                     className="select-none absolute left-5 top-1/2 -translate-y-1/2 z-10 
//                     bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
//                     opacity-0 group-hover:opacity-100 transition-all duration-300"
//                 >
//                     ❮
//                 </div>

//                 <div
//                     onClick={handleNext}
//                     className="select-none absolute right-5 top-1/2 -translate-y-1/2 z-10 
//                     bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer 
//                     opacity-0 group-hover:opacity-100 transition-all duration-300"
//                 >
//                     ❯
//                 </div>

//             </div>

//             <Swiper
//                 modules={[Thumbs]}
//                 onSwiper={setThumbsSwiper}
//                 slidesPerView={4}
//                 spaceBetween={10}
//                 watchSlidesProgress={true}
//                 className="max-w-xl mx-auto"
//             >
//                 <SwiperSlide>
//                     <img
//                         className="w-40 border cursor-pointer opacity-80 hover:opacity-100"
//                         src={img1}
//                         alt="thumb1"
//                     />
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <img
//                         className="w-40 border cursor-pointer opacity-80 hover:opacity-100"
//                         src={img2}
//                         alt="thumb2"
//                     />
//                 </SwiperSlide>
//             </Swiper>

//         </div>
//     );
// };

// export default Banner;

// import { useState, useRef, useEffect } from "react";

// import img3 from "../../../assets/banner/Web-Cover-2026--Panjabi.jpeg";
// import img5 from "../../../assets/banner/pp.jpeg";

// const images = [img3, img5];

// const Banner = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [prevIndex, setPrevIndex] = useState(null);
//     const [direction, setDirection] = useState("next");
//     const [animKey, setAnimKey] = useState(0);
//     const [animDuration, setAnimDuration] = useState(700);
//     const pendingRef = useRef(0);
//     const timerRef = useRef(null);
//     const autoplayRef = useRef(null);
//     const isAnimatingRef = useRef(false);
//     const currentIndexRef = useRef(0);

//     const getDuration = () => {
//         const p = Math.abs(pendingRef.current);
//         if (p === 0) return 700;
//         if (p <= 2) return 200;
//         if (p <= 5) return 100;
//         return 80;
//     };

//     const triggerMove = (net, fromIndex) => {
//         const total = images.length;
//         const newIndex = ((fromIndex + net) % total + total) % total;
//         const duration = getDuration();

//         isAnimatingRef.current = true;
//         setAnimDuration(duration);
//         setDirection(net > 0 ? "next" : "prev");
//         setPrevIndex(fromIndex);
//         setCurrentIndex(newIndex);
//         setAnimKey(k => k + 1);
//         currentIndexRef.current = newIndex;

//         if (timerRef.current) clearTimeout(timerRef.current);
//         timerRef.current = setTimeout(() => {
//             setPrevIndex(null);
//             isAnimatingRef.current = false;

//             if (pendingRef.current !== 0) {
//                 const move = pendingRef.current;
//                 pendingRef.current = 0;
//                 triggerMove(move, currentIndexRef.current);
//             }
//         }, duration);
//     };

//     const startAutoplay = () => {
//         if (autoplayRef.current) clearInterval(autoplayRef.current);
//         autoplayRef.current = setInterval(() => {
//             triggerMove(1, currentIndexRef.current);
//         }, 4000);
//     };

//     const resetAutoplay = () => {
//         if (autoplayRef.current) clearInterval(autoplayRef.current);
//         startAutoplay();
//     };

//     const pauseAutoplay = () => {
//         if (autoplayRef.current) clearInterval(autoplayRef.current);
//         autoplayRef.current = null;
//     };

//     const resumeAutoplay = () => {
//         if (!autoplayRef.current) startAutoplay();
//     };

//     useEffect(() => {
//         startAutoplay();
//         return () => {
//             if (autoplayRef.current) clearInterval(autoplayRef.current);
//         };
//     }, []);

//     const handleClick = (dir) => {
//         const val = dir === "next" ? 1 : -1;
//         resetAutoplay();

//         if (!isAnimatingRef.current) {
//             pendingRef.current = 0;
//             triggerMove(val, currentIndexRef.current);
//         } else {
//             pendingRef.current += val;
//             if (timerRef.current) clearTimeout(timerRef.current);
//             timerRef.current = setTimeout(() => {
//                 const move = pendingRef.current;
//                 pendingRef.current = 0;
//                 isAnimatingRef.current = false;
//                 setPrevIndex(null);
//                 if (move !== 0) {
//                     triggerMove(move, currentIndexRef.current);
//                 }
//             }, 100);
//         }
//     };

//     return (
//         <div className="w-full">
//             <div
//                 className="relative group overflow-hidden"
//                 onMouseEnter={pauseAutoplay}
//                 onMouseLeave={resumeAutoplay}
//             >
//                 <div className="relative w-full">

//                     {prevIndex !== null && (
//                         <div
//                             key={`out-${animKey}`}
//                             className={`absolute inset-0 z-10 ${direction === "next"
//                                     ? "animate-slide-out-left"
//                                     : "animate-slide-out-right"
//                                 }`}
//                             style={{ animationDuration: `${animDuration}ms` }}
//                         >
//                             <img
//                                 className="w-full object-c 2xl:h-[700px] xl:h-[660px] lg:h-[500px] md:h-[400px] sm:h-[300px] h-[180px]"
//                                 src={images[prevIndex]}
//                                 alt=""
//                             />
//                         </div>
//                     )}

//                     <div
//                         key={`in-${animKey}`}
//                         className={`relative z-20 ${animKey === 0
//                                 ? "animate-slide-in-down"
//                                 : direction === "next"
//                                     ? "animate-slide-in-right"
//                                     : "animate-slide-in-left"
//                             }`}
//                         style={{ animationDuration: `${animDuration}ms` }}
//                     >
//                         <img
//                             className="w-full object-cov 2xl:h-[700px] xl:h-[660px] lg:h-[500px] md:h-[400px] sm:h-[300px] h-[180px]"
//                             src={images[currentIndex]}
//                             alt=""
//                         />
//                     </div>

//                 </div>

//                 <div
//                     onClick={() => handleClick("prev")}
//                     className="select-none absolute left-5 top-1/2 -translate-y-1/2 z-30
//                     bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer
//                     opacity-0 group-hover:opacity-100 transition-all duration-300"
//                 >
//                     ❮
//                 </div>
//                 <div
//                     onClick={() => handleClick("next")}
//                     className="select-none absolute right-5 top-1/2 -translate-y-1/2 z-30
//                     bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer
//                     opacity-0 group-hover:opacity-100 transition-all duration-300"
//                 >
//                     ❯
//                 </div>
//             </div>

//             {/* Thumbnails */}
//             {/* <div className="flex gap-2 max-w-xl mx-auto mt-4 px-2">
//                 {images.map((img, i) => (
//                     <img
//                         key={i}
//                         onClick={() => {
//                             const net = i - currentIndexRef.current;
//                             if (net !== 0) {
//                                 resetAutoplay();
//                                 triggerMove(net, currentIndexRef.current);
//                             }
//                         }}
//                         className={`w-40 border cursor-pointer transition-opacity duration-200
//                             ${i === currentIndex
//                                 ? "opacity-100 border-blue-500"
//                                 : "opacity-70 border-gray-300"
//                             }
//                         `}
//                         src={img}
//                         alt={`thumb-${i}`}
//                     />
//                 ))}
//             </div> */}
//         </div>
//     );
// };

// export default Banner;




// ``````````````````````````````````````````````````````````````Select Component`````````````````````````````````````````````````````````````````````````

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

import img3 from "../../../assets/banner/Web-Cover-2026--Panjabi.jpeg";
import img5 from "../../../assets/banner/pp.jpeg";

const images = ['https://i.ibb.co.com/zWs5rhyD/cc9973b9183688b983c16e1891dcceb0.jpg'];

const Banner = () => {
    const swiperRef = useRef(null);
    const clickTimeRef = useRef([]);
    const [initAnim, setInitAnim] = useState(true);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const restoreSpeedRef = useRef(null);


    const getDynamicSpeed = () => {
        const now = Date.now();
        clickTimeRef.current = clickTimeRef.current.filter(t => now - t < 1000);
        const count = clickTimeRef.current.length;

        if (count === 0) return 700;
        if (count <= 2) return 400;
        if (count <= 5) return 100;
        return 100;
    };

    const handleClick = (dir) => {
        clickTimeRef.current.push(Date.now());
        const speed = getDynamicSpeed();

        const swiper = swiperRef.current;
        if (!swiper) return;

        swiper.params.speed = speed;
        swiper.autoplay.stop();

        if (dir === "next") swiper.slideNext(speed);
        else swiper.slidePrev(speed);

        // আগের restore timer cancel করো
        if (restoreSpeedRef.current) clearTimeout(restoreSpeedRef.current);

        // 1 সেকেন্ড click না করলে speed 700 এ ফিরবে
        restoreSpeedRef.current = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.params.speed = 700;
            }
        }, 1000);

        setTimeout(() => {
            swiper.autoplay.start();
        }, 4000);
    };

    return (
        <div className="w-full">
            <div className="relative group overflow-hidden">

                <div
                    className={initAnim ? "animate-slide-in-down" : ""}
                    onAnimationEnd={() => setInitAnim(false)}
                >
                    <Swiper
                        modules={[Autoplay, Thumbs]}
                        loop={true}
                        speed={900}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="w-full"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    className="w-full object-cover h-[20vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh]"
                                    src={img}
                                    alt={`slide-${i}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div
                    onClick={() => handleClick("prev")}
                    className="select-none absolute left-5 top-1/2 -translate-y-1/2 z-30
                    bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer
                    opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    ❮
                </div>
                <div
                    onClick={() => handleClick("next")}
                    className="select-none absolute right-5 top-1/2 -translate-y-1/2 z-30
                    bg-black/80 text-white px-4 py-2 rounded-sm cursor-pointer
                    opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    ❯
                </div>
            </div>

            {/*           
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={10}
                watchSlidesProgress={true}
                className="mt-3 max-w-xl mx-auto px-2"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            className="w-full h-20 object-cover cursor-pointer border-2 border-transparent 
                            opacity-60 hover:opacity-100 transition-all duration-200
                            [.swiper-slide-thumb-active_&]:opacity-100 
                            [.swiper-slide-thumb-active_&]:border-blue-500"
                            src={img}
                            alt={`thumb-${i}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper> */}

            <Swiper
                modules={[Thumbs]}
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                slidesPerView="auto"
                spaceBetween={10}
                centeredSlides={true}
                className="mt-2 w-full"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i} style={{ width: "12px" }}>
                        <img
                            src={img}
                            alt={`thumb-${i}`}
                            className="w-full object-cover h-1 cursor-pointer
                opacity-50 transition-all duration-300
                [.swiper-slide-thumb-active_&]:opacity-100
                [.swiper-slide-thumb-active_&]:ring-1
                [.swiper-slide-thumb-active_&]:ring-black"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;














// import { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Thumbs } from "swiper/modules";
// import Vibrant from "node-vibrant/browser";

// import "swiper/css";
// import "swiper/css/thumbs";

// const images = [
//   "https://i.ibb.co.com/zWs5rhyD/cc9973b9183688b983c16e1891dcceb0.jpg",
// ];

// const Banner = () => {
//   const swiperRef = useRef(null);
//   const clickTimeRef = useRef([]);
//   const restoreSpeedRef = useRef(null);

//   const [initAnim, setInitAnim] = useState(true);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   // Current Slide
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Ambient Colors
//   const [ambient, setAmbient] = useState({
//     vibrant: "#222222",
//     dark: "#111111",
//     light: "#555555",
//   });

//   // Get Colors from current image
//   useEffect(() => {
//     let ignore = false;

//     Vibrant.from(images[activeIndex])
//       .getPalette()
//       .then((palette) => {
//         if (ignore) return;

//         setAmbient({
//           vibrant: palette.Vibrant?.hex || "#222222",
//           dark: palette.DarkVibrant?.hex || "#111111",
//           light: palette.LightVibrant?.hex || "#555555",
//         });
//       })
//       .catch(() => {
//         setAmbient({
//           vibrant: "#222222",
//           dark: "#111111",
//           light: "#555555",
//         });
//       });

//     return () => {
//       ignore = true;
//     };
//   }, [activeIndex]);

//   // Dynamic Slide Speed
//   const getDynamicSpeed = () => {
//     const now = Date.now();

//     clickTimeRef.current = clickTimeRef.current.filter(
//       (t) => now - t < 1000
//     );

//     const count = clickTimeRef.current.length;

//     if (count === 0) return 700;
//     if (count <= 2) return 400;
//     if (count <= 5) return 100;

//     return 100;
//   };

//   // Arrow Click
//   const handleClick = (dir) => {
//     clickTimeRef.current.push(Date.now());

//     const speed = getDynamicSpeed();

//     const swiper = swiperRef.current;

//     if (!swiper) return;

//     swiper.params.speed = speed;

//     swiper.autoplay.stop();

//     if (dir === "next") {
//       swiper.slideNext(speed);
//     } else {
//       swiper.slidePrev(speed);
//     }

//     if (restoreSpeedRef.current) {
//       clearTimeout(restoreSpeedRef.current);
//     }

//     restoreSpeedRef.current = setTimeout(() => {
//       if (swiperRef.current) {
//         swiperRef.current.params.speed = 700;
//       }
//     }, 1000);

//     setTimeout(() => {
//       swiper.autoplay.start();
//     }, 4000);
//   };
//   return (
//   <div className="relative w-full py-12 overflow-hidden">

//     {/* LEFT GLOW */}
//     <div
//       className="absolute left-0 top-0 w-1/2 h-full pointer-events-none transition-all duration-700"
//       style={{
//         background: `radial-gradient(circle at left,
//           ${ambient.vibrant},
//           transparent 70%)`,
//         filter: "blur(180px)",
//         opacity: 0.7,
//       }}
//     />

//     {/* RIGHT GLOW */}
//     <div
//       className="absolute right-0 top-0 w-1/2 h-full pointer-events-none transition-all duration-700"
//       style={{
//         background: `radial-gradient(circle at right,
//           ${ambient.dark},
//           transparent 70%)`,
//         filter: "blur(180px)",
//         opacity: 0.7,
//       }}
//     />

//     {/* TOP GLOW */}
//     <div
//       className="absolute top-0 left-0 w-full h-40 pointer-events-none transition-all duration-700"
//       style={{
//         background: `linear-gradient(${ambient.light},transparent)`,
//         filter: "blur(120px)",
//         opacity: .45,
//       }}
//     />

//     {/* BOTTOM GLOW */}
//     <div
//       className="absolute bottom-0 left-0 w-full h-40 pointer-events-none transition-all duration-700"
//       style={{
//         background: `linear-gradient(transparent,${ambient.dark})`,
//         filter: "blur(120px)",
//         opacity: .45,
//       }}
//     />

//     {/* CONTENT */}
//     <div className="relative z-10">

//       <div className="relative group rounded-xl overflow-hidden">

//         {/* Background Blur Image */}
//         <img
//           src={images[activeIndex]}
//           alt=""
//           className="
//             absolute
//             inset-0
//             w-full
//             h-full
//             object-cover
//             scale-125
//             blur-[120px]
//             brightness-125
//             saturate-150
//             opacity-50
//             transition-all
//             duration-700
//           "
//         />

//         <div
//           className={initAnim ? "animate-slide-in-down relative z-10" : "relative z-10"}
//           onAnimationEnd={() => setInitAnim(false)}
//         >

//           <Swiper
//             modules={[Autoplay, Thumbs]}
//             loop={true}
//             speed={900}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             thumbs={{ swiper: thumbsSwiper }}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             onSlideChange={(swiper) => {
//               setActiveIndex(swiper.realIndex);
//             }}
//             className="w-full"
//           >
//             {images.map((img, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={img}
//                   alt={`slide-${i}`}
//                   className="
//                     w-full
//                     object-cover
//                     h-[20vh]
//                     sm:h-[40vh]
//                     md:h-[50vh]
//                     lg:h-[60vh]
//                     xl:h-[70vh]
//                     2xl:h-[75vh]
//                   "
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//         </div>

//         {/* PREV */}
//         <button
//           onClick={() => handleClick("prev")}
//           className="
//             absolute
//             left-5
//             top-1/2
//             -translate-y-1/2
//             z-30
//             opacity-0
//             group-hover:opacity-100
//             transition-all
//             duration-300
//             bg-black/70
//             backdrop-blur-md
//             px-4
//             py-2
//             rounded
//             text-white
//           "
//         >
//           ❮
//         </button>

//         {/* NEXT */}
//         <button
//           onClick={() => handleClick("next")}
//           className="
//             absolute
//             right-5
//             top-1/2
//             -translate-y-1/2
//             z-30
//             opacity-0
//             group-hover:opacity-100
//             transition-all
//             duration-300
//             bg-black/70
//             backdrop-blur-md
//             px-4
//             py-2
//             rounded
//             text-white
//           "
//         >
//           ❯
//         </button>

//       </div>
//                   {/* Thumbnail Swiper */}
//       <Swiper
//         modules={[Thumbs]}
//         onSwiper={setThumbsSwiper}
//         watchSlidesProgress={true}
//         slidesPerView="auto"
//         centeredSlides={true}
//         spaceBetween={10}
//         className="mt-4 w-full"
//       >
//         {images.map((img, i) => (
//           <SwiperSlide
//             key={i}
//             style={{
//               width: "14px",
//             }}
//           >
//             <div
//               className={`
//                 h-1 rounded-full transition-all duration-500
//                 ${
//                   activeIndex === i
//                     ? "bg-white w-12"
//                     : "bg-white/40 w-3"
//                 }
//               `}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   </div>
// );

// };

// export default Banner;