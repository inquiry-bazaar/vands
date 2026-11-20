
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
    {
        id: 1,
        name: "Eco Pro Plus",
        products: 30,
        img: "/cat/airlesspainting.webp",
        hoverImg: "/cat/6.webp",
    },
    {
        id: 2,
        name: "Airless Wall Putty Spray Machines",
        products: 24,
        img: "/Galaxy1.webp",
        hoverImg: "/cat/1.webp",
    },
    {
        id: 3,
        name: "Pneumatic Machines",
        products: 21,
        img: "/cat/airlessspray-removebg-preview.webp",
        hoverImg: "/bg remove.webp",
    },
    {
        id: 4,
        name: "Kerb Painting Machine",
        products: 37,
        img: "/cat/kerb-removebg-preview.webp",
        hoverImg: "/22.webp",
    },
    {
        id: 5,
        name: "Polyurethane Machines",
        products: 26,
        img: "/cat/airlesspaintspray-removebg-preview.webp",
        hoverImg: "/11.webp",
    },
    {
        id: 6,
        name: "Painting Hose Pipe",
        products: 17,
        img: "/cat/wallpainting-removebg-preview.webp",
        hoverImg: "/accesseres/PAINT HOSE.webp",
    },
];

export default function CategorySection() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeImage, setActiveImage] = useState("hoverImg");

    useEffect(() => {
        if (!selectedCategory) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedCategory(null);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedCategory]);

    const openModal = (category) => {
        setSelectedCategory(category);
        setActiveImage("hoverImg");
    };

    const closeModal = () => {
        setSelectedCategory(null);
    };

    return (
        <>
            <section
                id="categories"
                className="overflow-hidden bg-white py-10 sm:py-12 lg:py-15"
            >
                <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
                    {/* Heading */}
                    <div className="mb-5 flex items-end justify-between gap-4 sm:mb-10">
                        <div>
                            <div className="mb-2 flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#c8102e]" />

                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c8102e]">
                                    Our Collection
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
                                Explore Our{" "}
                                <span className="text-[#c8102e]">Categories</span>
                            </h2>
                        </div>

                        {/* Swiper Navigation */}
                        <div className="sm:flex hidden shrink-0 items-center gap-2">
                            <button
                                type="button"
                                aria-label="Previous categories"
                                className="category-prev flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-[#111111] transition-all hover:border-[#c8102e] hover:bg-[#c8102e] hover:text-white sm:h-11 sm:w-11"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <button
                                type="button"
                                aria-label="Next categories"
                                className="category-next flex h-10 w-10 items-center justify-center rounded-full bg-[#c8102e] text-white transition-all hover:bg-[#111111] sm:h-11 sm:w-11"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Category Slider */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation={{
                            prevEl: ".category-prev",
                            nextEl: ".category-next",
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 22,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },
                        }}
                        className="category-swiper"
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id} className="!h-auto">
                                <button
                                    type="button"
                                    onClick={() => openModal(category)}
                                    className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white text-left transition-all duration-300 hover:border-[#c8102e]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]"
                                >
                                    {/* Category Image */}
                                    <div className="relative aspect-square w-full overflow-hidden bg-[#f8f8f8]">
                                        <Image
                                            src={category.hoverImg}
                                            alt={category.name}
                                            fill
                                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw"
                                            className="object-contain p-3 transition-all duration-500 group-hover:scale-105 group-hover:opacity-0 sm:p-5"
                                        />

                                        <Image
                                            src={category.hoverImg}
                                            alt={`${category.name} alternate view`}
                                            fill
                                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw"
                                            className="object-contain p-3 opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:p-5"
                                        />

                                        {/* Zoom Icon */}
                                        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111111] shadow-sm transition-colors group-hover:bg-[#c8102e] group-hover:text-white">
                                            <ZoomIn size={16} />
                                        </span>
                                    </div>

                                    {/* Category Details */}
                                    <div className="flex w-full flex-1 flex-col items-center justify-center gap-1 border-t border-neutral-100 px-2 py-2 text-center sm:px-4">
                                        <h3 className="line-clamp-2 min-h-[36px] text-xs items-center font-bold leading-[18px] text-[#111111] transition-colors group-hover:text-[#c8102e] sm:text-sm">
                                            {category.name}
                                        </h3>
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Image Preview Modal */}
            {selectedCategory && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="category-modal-title"
                        className="relative w-full max-w-[750px] overflow-hidden rounded-2xl bg-white shadow-2xl"
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between gap-4 border-b border-neutral-100 px-5 py-4">
                            <h3
                                id="category-modal-title"
                                className="text-base font-bold text-[#111111] sm:text-xl"
                            >
                                {selectedCategory.name}
                            </h3>

                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close image preview"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3f3f3] text-[#111111] transition-colors hover:bg-[#c8102e] hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Large Image */}
                        <div className="relative h-[300px] w-full bg-[#f8f8f8] sm:h-[450px]">
                            <Image
                                src={selectedCategory[activeImage]}
                                alt={selectedCategory.name}
                                fill
                                sizes="(max-width: 640px) 100vw, 750px"
                                className="object-contain p-5 sm:p-8"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
