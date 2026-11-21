
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    Menu,
    X,
    ArrowUpRight,
    MessageCircle,
} from "lucide-react";
import { handleCallClick } from "@/lib/track";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-inquiry" },
    { name: "Our Products", href: "#our-products" },
    { name: "Contact Us", href: "#inquiry-form" },
];

const marqueeItems = [
    "Premium Airless Painting Machines",
    "Industrial Painting Solutions",
    "13+ Years of Experience",
    "Quality & Performance",
    "Get Your Best Quote Today",
];

const phone = "919990730939";

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hello, I am interested in your Airless Painting Machines."
)}`;

function Marquee({ mobile = false }) {
    return (
        <div
            className={`relative w-full min-w-0 overflow-hidden ${mobile
                ? "bg-[#111111] py-2.5 md:hidden"
                : "hidden flex-1 md:block"
                }`}
        >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#111111] to-transparent md:from-[#c8102e]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#111111] to-transparent md:from-[#c8102e]" />

            <div className="navbar-marquee-track flex w-max items-center">
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center"
                    >
                        {marqueeItems.map((item, index) => (
                            <div
                                key={`${copy}-${index}`}
                                className="flex shrink-0 items-center gap-3 pr-10"
                            >
                                <span
                                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${mobile ? "bg-[#ef4444]" : "bg-white"
                                        }`}
                                />

                                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.13em] text-white sm:text-xs">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (href) => {
        setActiveLink(href);
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full font-semibold transition-shadow duration-300 ${scrolled
                ? "shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
                : ""
                }`}
        >
            {/* MOBILE MARQUEE - TOP ONLY */}
            <Marquee mobile />

            {/* FIRST BAR - LOGO + DESKTOP MARQUEE */}
            <div className="bg-[#c8102e]">
                <div
                    className={`mx-auto flex max-w-[1500px] items-center gap-6 px-5 transition-[height] duration-300 sm:px-8 lg:px-12 ${scrolled
                        ? "h-[62px] md:h-[77px]"
                        : "h-[70px] md:h-[80px]"
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={() => handleNavClick("#home")}
                        className="relative z-10 flex shrink-0 items-center"
                    >
                        <Image
                            src="/vands-logo.webp"
                            alt="Vands Engineering Solutions"
                            width={190}
                            height={65}
                            priority
                            className="h-auto w-[135px] object-contain sm:w-[160px] lg:w-[190px]"
                        />
                    </Link>

                    {/* Desktop Marquee */}
                    <Marquee />

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="inquiry-mobile-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#111111] text-white transition-colors hover:bg-[#262626] md:hidden"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* SECOND BAR */}
            <div className="border-t border-white/10 bg-[#111111] sm:block hidden">
                <div className="mx-auto flex h-[50px] max-w-[1500px] items-center justify-between gap-3 px-5 sm:px-8 md:h-[54px] lg:px-12">
                    {/* Desktop Navigation */}
                    <nav
                        aria-label="Main navigation"
                        className="hidden h-full items-center gap-8 md:flex lg:gap-10"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`group relative flex h-full items-center whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#ff4d4d] lg:text-[13px] ${activeLink === link.href
                                    ? "text-[#ff4d4d]"
                                    : "text-white/80"
                                    }`}
                            >
                                {link.name}

                                <span
                                    className={`absolute bottom-0 left-0 h-[3px] bg-[#DC2626] transition-all duration-300 ${activeLink === link.href
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Label */}
                    <span className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80 sm:text-xs md:hidden">
                        Professional Painting Solutions
                    </span>

                    {/* Contact Buttons */}
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                        <a
                            href={`tel:+${phone}`}
                            aria-label="Call Now"
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-[#DC2626] px-3 text-white transition-colors hover:bg-[#b91c1c] sm:px-4 md:h-10"
                        >
                            <Phone size={16} />
                            <span className="hidden text-xs font-bold lg:inline">
                                Call Now
                            </span>
                            <ArrowUpRight
                                size={15}
                                className="hidden lg:block"
                            />
                        </a>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Inquiry"
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-white/40 px-3 text-white transition-colors hover:border-[#DC2626] hover:bg-[#DC2626] sm:px-4 md:h-10"
                        >
                            <MessageCircle size={17} />
                            <span className="hidden text-xs font-bold lg:inline">
                                WhatsApp Inquiry
                            </span>
                            <ArrowUpRight
                                size={15}
                                className="hidden lg:block"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div
                id="inquiry-mobile-menu"
                className={`overflow-hidden bg-[#111111] transition-[max-height,opacity] duration-300 md:hidden ${menuOpen
                    ? "max-h-[350px] border-t border-white/10 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="flex flex-col px-5 pb-6 pt-2"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-semibold transition-colors ${activeLink === link.href
                                ? "text-[#ff4d4d]"
                                : "text-white/80 hover:text-white"
                                }`}
                        >
                            {link.name}
                            <ArrowUpRight size={16} />
                        </a>
                    ))}

                    <a onClick={() => handleCallClick({ source: "Website about page", obj: "N/A" })}
                        href={`tel:+${phone}`}
                        className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#DC2626] px-5 py-3.5 text-sm font-bold text-white"
                    >
                        <Phone size={17} />
                        Call Now
                    </a>
                </nav>
            </div>

            {/* Marquee CSS */}
            <style jsx>{`
        .navbar-marquee-track {
          animation: navbar-marquee-scroll 35s linear infinite;
        }

        .navbar-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes navbar-marquee-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .navbar-marquee-track {
            animation-duration: 25s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-marquee-track {
            animation: none;
          }
        }
      `}</style>
        </header>
    );
}
