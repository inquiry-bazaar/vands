
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const videos = [
    {
        id: "video1",
        title: "8.1 LPM Surya 10 Electrical Airless Texture Sprayer",
        youtube: "https://youtube.com/shorts/yZgXDhtNC60?si=36x3FMYPmevahx5_",
    },
    {
        id: "video2",
        title: "2.3 LPM Prithvi 499EC Furniture Painting Sprayer",
        youtube: "https://youtube.com/shorts/LmRt2GbtmTU?si=4RTsvTQYknJE0GrL",
    },
    {
        id: "video3",
        title: "6.3 LPM Surya 9 Wall Painting Sprayer",
        youtube: "https://youtube.com/shorts/ikXlYQf-zyk?si=-nzjWNEKjBXLBAPb",
    },
    {
        id: "video4",
        title: "Jaguar 5.5 LPM C-301 Power Plant PNUMATIC Airless Spray Painting Machine",
        youtube: "https://youtube.com/shorts/DeLFQSXQvF8?si=W1JRa-acjIzwkbG1",
    },
];

function getYouTubeId(url) {
    try {
        const parsed = new URL(url);
        const hostname = parsed.hostname.replace(/^www\./, "");

        if (hostname === "youtu.be") {
            return parsed.pathname.split("/")[1] || null;
        }

        if (
            hostname === "youtube.com" ||
            hostname === "m.youtube.com"
        ) {
            if (
                parsed.pathname.startsWith("/shorts/") ||
                parsed.pathname.startsWith("/embed/")
            ) {
                return parsed.pathname.split("/")[2] || null;
            }

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
                threshold: 0.5,
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
            className="group relative w-full overflow-hidden rounded-xl bg-black shadow-sm transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:rounded-2xl"
        >
            {/* Vertical YouTube Short */}
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#111111]">
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

                        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                            <Play
                                size={22}
                                fill="currentColor"
                                className="ml-1"
                            />
                        </span>
                    </button>
                )}
            </div>
        </article>
    );
}

export default function VideosSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                                Product Shorts
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
                            ref={prevRef}
                            type="button"
                            aria-label="Previous short"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#111111] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            ref={nextRef}
                            type="button"
                            aria-label="Next short"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#111111] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Mobile / Tablet Swiper */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}
                        spaceBetween={10}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                            },
                        }}
                        className="shorts-swiper"
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

                {/* Desktop - 4 Shorts in One Row */}
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
