
"use client";

import React from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const phone = "919990730939";

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hello, I am interested in your Airless Painting Machines. Please share more details."
)}`;

const buttons = [
    {
        name: "WhatsApp",
        icon: FaWhatsapp,
        href: whatsappUrl,
        className: "bg-green-500 hover:bg-[#11632f]",
        external: true,
    },
    {
        name: "Inquiry Now",
        icon: Send,
        href: "#inquiry-form",
        className: "bg-red-500 hover:bg-[#a90d26]",
    },
    {
        name: "Call Now",
        icon: Phone,
        href: `tel:+${phone}`,
        className: "bg-yellow-500 hover:bg-[#292929]",
    },
];

export default function Footer() {
    return (
        <footer className="fixed -bottom-0.5 left-0 z-[100] w-full border-t border-white/20 bg-white shadow-[0_-6px_30px_rgba(0,0,0,0.12)]">
            <div className="mx-auto grid w-full max-w-[1500px] grid-cols-3 gap-0 sm:gap-2 sm:px-5 sm:py-2">
                {buttons.map((button) => {
                    const Icon = button.icon;

                    return (
                        <a 
                            key={button.name}
                            href={button.href}
                            target={button.external ? "_blank" : undefined}
                            rel={button.external ? "noopener noreferrer" : undefined}
                            className={`flex min-h-[60px] items-center justify-center gap-2 px-2 py-3 text-white transition-colors duration-300 sm:min-h-[52px] sm:rounded-lg ${button.className}`}
                        >
                            <Icon
                                size={19}
                                strokeWidth={2}
                                className="shrink-0 sm:h-5 sm:w-5"
                            />

                            <span className="text-[11px] font-bold sm:text-sm">
                                {button.name}
                            </span>
                        </a>
                    );
                })}
            </div>
        </footer>
    );
}
