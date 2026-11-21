
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const videos = [
    {
        id: "video1",
        title: "8.1 LPM Surya 10 Electrical Airless Texture Sprayer",
        youtube: "https://youtu.be/dr7O_CeLUbs",
    },
    {
        id: "video2",
        title: "2.3 LPM Prithvi 499EC Furniture Painting Sprayer",
        youtube: "https://youtu.be/paom1njRM2A",
    },
    {
        id: "video3",
        title: "6.3 LPM Surya 9 Wall Painting Sprayer",
        youtube: "https://youtu.be/zJLRUWAh38g",
    },
    {
        id: "video4",
        title: "Jaguar 5.5 LPM C-301 Power Plant PNUMATIC Airless Spray Painting Machine",
        youtube: "https://youtu.be/0bV-Guzi4F4",
    },
];

function getYouTubeId(url) {
    try {
        const parsed = new URL(url);

        if (
            parsed.hostname === "youtu.be" ||
            parsed.hostname === "www.youtu.be"
        ) {
            return parsed.pathname.split("/")[1];
        }

        if (
            parsed.hostname === "youtube.com" ||
            parsed.hostname === "www.youtube.com"
        ) {
            return parsed.searchParams.get("v");
        }

        return null;
    } catch {
        return null;
    }
}

function VideoCard({ video }) {
    const cardRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [manualPlay, setManualPlay] = useState(false);

    const videoId = getYouTubeId(video.youtube);

    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

                if (!entry.isIntersecting) {
                    setManualPlay(false);
                }
            },
            {
                threshold: 0.4,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const shouldPlay = isVisible || manualPlay;

    const embedUrl = videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=1&rel=0`
        : null;

    return (
        <article
            ref={cardRef}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:border-[#c8102e]/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
        >
            {/* Video */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111111]">
                {shouldPlay && embedUrl ? (
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 h-full w-full border-0"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setManualPlay(true)}
                        aria-label={`Play ${video.title}`}
                        className="relative flex h-full w-full items-center justify-center overflow-hidden"
                    >
                        {videoId && (
                            <img
                                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                                alt={video.title}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                            />
                        )}

                        <span className="absolute inset-0 bg-black/20" />

                        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                            <Play
                                size={18}
                                fill="currentColor"
                                className="ml-0.5"
                            />
                        </span>
                    </button>
                )}
            </div>

            {/* Video Title */}
            <div className="flex flex-1 items-start border-t border-neutral-100 p-3 sm:p-4">
                <h3 className="line-clamp-3 text-[11px] font-bold leading-[1.5] text-[#111111] transition-colors duration-300 group-hover:text-[#c8102e] sm:text-sm sm:leading-6">
                    {video.title}
                </h3>
            </div>
        </article>
    );
}

export default function VideosSection() {
    return (
        <section
            id="our-videos"
            className="overflow-hidden bg-[#f8f8f8] py-10 lg:py-14"
        >
            <div className="mx-auto max-w-[1500px] px-3 sm:px-8 lg:px-12">

                {/* Heading */}
                <div className="mb-7 flex items-end justify-between gap-4 sm:mb-10">

                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#c8102e]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8102e] sm:text-xs">
                                Product Videos
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
                            Watch Our{" "}
                            <span className="text-[#c8102e]">
                                Machines in Action
                            </span>
                        </h2>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex shrink-0 items-center gap-2 lg:hidden">
                        <button
                            type="button"
                            aria-label="Previous video"
                            className="video-prev flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#111111] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            type="button"
                            aria-label="Next video"
                            className="video-next flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#111111] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Mobile / Tablet Swiper */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={2}
                        spaceBetween={10}
                        navigation={{
                            prevEl: ".video-prev",
                            nextEl: ".video-next",
                        }}
                        autoplay={{
                            delay: 20000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                            },
                        }}
                        className=""
                    >
                        {videos.map((video) => (
                            <SwiperSlide
                                key={video.id}
                                className="!h-auto"
                            >
                                <VideoCard video={video} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid - 4 Videos One Row */}
                <div className="hidden grid-cols-4 gap-5 lg:grid xl:gap-7">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
