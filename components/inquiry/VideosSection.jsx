
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const videos = [
    {
        id: "video1",
        title:
            "Jaguar 5.5 LPM C-301 Power Plant PNUMATIC Airless Spray Painting Machine",
        youtube: "https://youtu.be/0bV-Guzi4F4",
    },
    {
        id: "video2",
        title: "8.1 LPM Surya 10 Electrical Airless Texture Sprayer",
        youtube: "https://youtu.be/dr7O_CeLUbs?si=yUSqC28CouSAAHMe",
    },
    {
        id: "video3",
        title: "2.3 LPM Prithvi 499EC Furniture Painting Sprayer",
        youtube: "https://youtu.be/paom1njRM2A?si=ih-CEoVxC0jvBjTE",
    },
    {
        id: "video4",
        title: "6.3 LPM Surya 9 Wall Painting Sprayer",
        youtube: "https://youtu.be/zJLRUWAh38g?si=lVm7vloRKxaXKffp",
    },
    {
        id: "video5",
        title: "2.8 LPM Prithvi 599 Infrastructure Painting Sprayer",
        youtube: "https://youtu.be/FhZk4ZTLJi0?si=43mQ11_aOW3gqm98",
    },
    {
        id: "video6",
        title: "7 LPM C 451 Corrosion Preventive Coating Machine",
        youtube: "https://youtu.be/ryluwieHUNI?si=CiX1t17uI7XC9jic",
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
            if (parsed.pathname.startsWith("/shorts/")) {
                return parsed.pathname.split("/")[2];
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
                threshold: 0.25,
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
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-300 hover:border-[#c8102e]/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:rounded-xl"
        >
            {/* Video */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#111111]">
                {shouldPlay && embedUrl ? (
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
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
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                            />
                        )}

                        <span className="absolute inset-0 bg-black/15" />

                        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#c8102e] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                            <Play
                                size={17}
                                fill="currentColor"
                                className="ml-0.5 sm:h-6 sm:w-6"
                            />
                        </span>
                    </button>
                )}
            </div>

            {/* Video Title */}
            <div className="flex flex-1 items-start border-t border-neutral-100 p-2.5 sm:p-4 lg:p-5">
                <h3 className="line-clamp-3 text-[11px] font-bold leading-[1.5] text-[#111111] transition-colors duration-300 group-hover:text-[#c8102e] sm:line-clamp-2 sm:text-sm sm:leading-6">
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
            className="bg-[#f8f8f8] py-10 lg:py-14"
        >
            <div className="mx-auto max-w-[1500px] px-3 sm:px-8 lg:px-12">
                {/* Heading */}
                <div className="mb-8 text-center sm:mb-10">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-[#c8102e]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8102e] sm:text-xs">
                            Product Videos
                        </span>

                        <span className="h-[2px] w-8 bg-[#c8102e]" />
                    </div>

                    <h2 className="text-2xl font-bold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
                        Watch Our{" "}
                        <span className="text-[#c8102e]">
                            Machines in Action
                        </span>
                    </h2>
                </div>

                {/* Responsive Video Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-7">
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
