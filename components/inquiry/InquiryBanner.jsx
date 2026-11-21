
"use client";

import Image from "next/image";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { handleCallClick } from "@/lib/track";

export default function InquiryBanner() {
    const phone = "919990730939";

    const whatsappMessage =
        "Hello, I am interested in your Airless Painting Machine. Please share details and pricing.";

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <section className="relative mt-[105px] w-full overflow-hidden bg-black md:mt-20">

            {/* Desktop Banner */}
            <div className="relative hidden w-full md:block">
                <Image
                    src="/inquiry-desktop2.jpg"
                    alt="Vands Engineering Solutions - Airless Painting Machines"
                    width={1900}
                    height={700}
                    priority
                    sizes="100vw"
                    className="block h-auto w-full"
                />
            </div>

            {/* Mobile Banner */}
            <div className="relative w-full md:hidden">
                <Image
                    src="/2.jpg"
                    alt="Vands Engineering Solutions - Painting Machines"
                    width={300}
                    height={500}
                    priority
                    sizes="100vw"
                    className="block h-auto w-full"
                />
            </div>

            {/* Overlay Buttons */}
            <div className="pointer-events-none absolute inset-0 z-10">

                {/* Desktop Button Position */}
                <div className="absolute left-[5%] top-[67%] hidden md:flex lg:top-[85%]">

                    <div className="pointer-events-auto flex items-center gap-3 lg:gap-4">

                        {/* Call Now */}
                        <a onClick={() => handleCallClick({ source: "Website about page", obj: "N/A" })}
                            href={`tel:+${phone}`}
                            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#ef233c] bg-gradient-to-r from-[#c8102e] to-[#a30c24] px-5 text-xs font-bold text-white shadow-[0_8px_30px_rgba(200,16,46,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(200,16,46,0.4)] lg:h-14 lg:gap-3 lg:px-7 lg:text-sm"
                        >
                            <Phone
                                size={18}
                                className="transition-transform duration-300 group-hover:rotate-12"
                            />
                            Call Now
                            <ArrowUpRight size={16} className="opacity-70" />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/50 bg-black/65 px-5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/15 lg:h-14 lg:gap-3 lg:px-7 lg:text-sm"
                        >
                            <MessageCircle
                                size={19}
                                className="text-[#25D366] transition-transform duration-300 group-hover:scale-110"
                            />
                            WhatsApp
                            <ArrowUpRight size={16} className="opacity-70" />
                        </a>
                    </div>
                </div>

                {/* Mobile Button Position */}
                <div className="pointer-events-auto absolute left-0 top-[88%] flex w-full justify-center px-5 md:hidden">

                    <div className="flex w-full max-w-[340px] items-center justify-center gap-3">

                        {/* Call Now */}
                        <a
                            href={`tel:+${phone}`}
                            className="group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#c8102e] px-3 text-xs font-bold text-white shadow-[0_6px_20px_rgba(200,16,46,0.3)] transition-all active:scale-95"
                        >
                            <Phone size={16} />
                            Call Now
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-white/40 bg-black/80 px-3 text-xs font-bold text-white backdrop-blur-md transition-all active:scale-95"
                        >
                            <FaWhatsapp size={17} className="text-[#25D366]" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Red Accent */}
            <div className="absolute bottom-0 left-0 z-20 h-[3px] w-full bg-gradient-to-r from-[#7f0b1d] via-[#c8102e] to-[#7f0b1d]" />
        </section>
    );
}
