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






import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

import img3 from "../../../assets/banner/Web-Cover-2026--Panjabi.jpeg";
import img5 from "../../../assets/banner/pp.jpeg";

const images = [img3, img5];

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
                                    className="w-full object-cover h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh]"
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
        </div>
    );
};

export default Banner;