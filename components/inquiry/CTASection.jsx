
"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const phone = "919990730939";

export default function CTASection() {
    return (
        <section
            id="contact-cta"
            className="relative overflow-hidden bg-[#c8102e] py-10 sm:py-14 lg:py-16"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-white/5 blur-[80px]" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

                    {/* Left - PNG Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute h-[230px] w-[230px] rounded-full bg-white/10 blur-3xl sm:h-[350px] sm:w-[350px]" />

                        <div className="relative h-[240px] w-full max-w-[450px] sm:h-[350px] lg:h-[400px]">
                            <Image
                                src="/cat/1.webp"
                                alt="Vands Airless Painting Machine"
                                fill
                                priority={false}
                                sizes="(max-width: 1023px) 100vw, 450px"
                                className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="text-center lg:text-left">

                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                            <span className="h-[2px] w-8 bg-white" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                Get In Touch With Us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-[700px] text-3xl font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl xl:text-[56px]">
                            Looking for the Right
                            <span className="block text-white/85">
                                Painting Machine?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto sm:flex hidden mt-5 max-w-[570px] text-sm leading-7 text-white/85 sm:text-base lg:mx-0">
                            Discover high-performance airless painting machines
                            designed for professional results. Connect with our
                            team today for product details, pricing, and expert
                            guidance.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">

                            {/* Call Button */}
                            <a
                                href={`tel:+${phone}`}
                                className="group inline-flex text-nowrap  min-h-[52px] items-center justify-center gap-3 rounded-md bg-white px-6 py-3.5 text-sm font-bold text-[#c8102e] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111111] hover:text-white sm:px-8"
                            >
                                <Phone size={19} />
                                Call Now
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                                    "Hello, I am interested in your Airless Painting Machines. Please share product details and pricing."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-md border-2 border-white bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#c8102e] sm:px-8"
                            >
                                <MessageCircle size={19} />
                                WhatsApp
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>
                        </div>

                        {/* Trust Text */}
                        <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((item) => (
                                    <span
                                        key={item}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#c8102e] bg-white/20 text-xs font-bold text-white"
                                    >
                                        ✓
                                    </span>
                                ))}
                            </div>

                            <span className="text-xs font-medium text-white/80 sm:text-sm">
                                Trusted Painting Equipment Solutions
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
