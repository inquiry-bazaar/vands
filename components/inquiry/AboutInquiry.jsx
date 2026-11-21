
"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
    ArrowUpRight,
    Award,
    Headset,
    Building2,
    Send,
    Loader2,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ProductsSection from "./ProductsSection";

const stats = [
    {
        number: 13,
        suffix: "+",
        label: "Years of Experience",
        icon: Award,
    },
    {
        number: 100,
        suffix: "%",
        label: "Customer Support",
        icon: Headset,
    },
    {
        number: 3,
        suffix: "",
        label: "Core Sectors",
        icon: Building2,
    },
];

const initialForm = {
    name: "",
    email: "",
    phone: "",
    city: "N/A",
    product: "",
    message: "",
};

export default function AboutInquiry() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setStatus({ type: "", message: "" });

        const { name, email, phone, city, product, message } = form;

        // Open a blank tab during the user click to avoid popup blockers.
        const whatsappTab = window.open("", "_blank");
        const webisteUrl = window.location.hostname + window.location.pathname;
        try {
            const formData = {
                supplierToken: "6a9bd96879bd32ac5164a486",
                platform: webisteUrl || "Vands Engineering  Contact Form",
                platformEmail: "sales.vands5@gmail.com",
                name,
                phone,
                email,
                city,
                product,
                message,
                place: city || "N/A",
            };

            const { data } = await axios.post(
                "https://brandbnalo.com/api/form/add",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 15000,
                }
            );

            if (data?.success) {
                setStatus({
                    type: "success",
                    message:
                        "Thank you! Your inquiry has been submitted successfully.",
                });

                const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
City: ${city}
Message: ${message}
Contact: ${phone}`;

                const whatsappUrl =
                    `https://wa.me/919990730939?text=${encodeURIComponent(whatsappText)}`;

                if (whatsappTab && !whatsappTab.closed) {
                    whatsappTab.location.replace(whatsappUrl);
                } else {
                    setStatus({
                        type: "success",
                        message:
                            "Inquiry submitted successfully. Please allow popups to open WhatsApp.",
                    });
                }

                setForm(initialForm);
            } else {
                whatsappTab?.close();

                setStatus({
                    type: "error",
                    message:
                        data?.message || "Failed to submit inquiry. Please try again.",
                });
            }
        } catch (error) {
            whatsappTab?.close();

            console.error("Inquiry submission error:", error);

            setStatus({
                type: "error",
                message:
                    error.response?.data?.message ||
                    "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="about-inquiry" ref={ref}
            className="relative overflow-hidden bg-[#f8f8f8] py-10 lg:py-15"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-red-500/[0.035] blur-[100px]" />

            <div className="relative mx-auto max-w-[1500px] px-0 sm:px-8 lg:px-12">
                <div className="grid items-start gap-5 lg:grid-cols-[1fr_0.9fr] lg:gap-16 xl:gap-20">
                    <div className="sm:px-0 px-3">
                        {/* Eyebrow */}
                        <div className="mb-2 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#DC2626]" />
                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#DC2626]">
                                About Our Company
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.045em] text-[#111111] sm:text-[44px]">
                            Leading Airless Painting Machine
                            <br />
                            <span className="text-[#DC2626]">
                                Manufacturer & Wholesaler.
                            </span>
                        </h2>

                        {/* Description */}
                        <div className="mt-5 max-w-[650px] space-y-2 text-[15px] leading-[1.9] text-neutral-600">
                            <p>
                                At{" "}
                                <strong className="font-semibold text-[#111111]">
                                    Vands Engineering Solutions
                                </strong>
                                , we are recognized as a premier Airless
                                Painting Machine Manufacturer, offering
                                cutting-edge solutions designed to deliver
                                superior performance, efficiency, and durability.
                            </p>

                            <p className="sm:block hidden">
                                With years of industry expertise, we have
                                established ourselves as a reliable Airless
                                Painting Machine Wholesaler and supplier,
                                catering to diverse industrial, commercial,
                                and construction needs across the market.
                            </p>

                            <p className="sm:block hidden">
                                Our advanced Airless Painting Machines are
                                engineered to provide smooth, uniform coating
                                with high transfer efficiency, reducing paint
                                wastage and ensuring a professional finish
                                every time.
                            </p>
                        </div>

                        {/* Animated Stats */}
                        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-neutral-200 pt-5 sm:gap-5">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`relative ${index !== 0
                                            ? "border-l border-neutral-200 pl-3 sm:pl-6"
                                            : ""
                                            }`}
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={1.7}
                                            className="mb-4 text-[#DC2626]"
                                        />

                                        <div className="flex gap-1 items-baseline text-[32px] font-bold leading-none tracking-[-0.05em] text-[#111111]">
                                            {inView ? (
                                                <CountUp
                                                    end={stat.number}
                                                    duration={2.5}
                                                    separator=","
                                                />
                                            ) : (
                                                "0"
                                            )}

                                            <span className="text-[#DC2626]">
                                                {stat.suffix}
                                            </span>
                                        </div>

                                        <p className="mt-1 max-w-[140px] text-xs font-medium leading-5 text-neutral-500">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom */}
                        <div className="mt-5 flex items-center gap-3 border-t border-neutral-200 pt-5">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DC2626]/30 text-[#DC2626]">
                                <ArrowUpRight size={19} />
                            </span>

                            <p className="text-sm font-medium text-neutral-600">
                                Quality Equipment. Reliable Performance.
                                Lasting Solutions.
                            </p>
                        </div>
                    </div>

                    <div className="sm:hidden block">
                        <ProductsSection />
                    </div>

                    <div
                        className="scroll-mt-24 sm:mx-0 mx-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.07)]"
                    >
                        {/* Form Header */}
                        <div className="relative overflow-hidden bg-[#111111] px-7 py-6 text-white sm:px-10">
                            <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full bg-[#DC2626]/20 blur-[60px]" />

                            <div className="relative">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#DC2626]" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f87171]">
                                        Quick Inquiry
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold tracking-tight sm:text-[36px]">
                                    Get Your{" "}
                                    <span className="text-[#ef4444]">
                                        Best Quote.
                                    </span>
                                </h3>

                                {/* <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                                    Looking for an airless painting machine?
                                    Share your requirements and our team will
                                    get in touch with you.
                                </p> */}
                            </div>
                        </div>

                        {/* Form Body */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 p-6"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormInput
                                    label="Full Name"
                                    name="name"
                                    placeholder="Your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />

                                <FormInput
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="Your email address"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormInput
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />

                                {/* Product */}
                                <div>
                                    <label
                                        htmlFor="product"
                                        className="mb-2 block text-sm font-semibold text-[#222222]"
                                    >
                                        Product Interested In{" "}
                                        <span className="text-[#DC2626]">*</span>
                                    </label>

                                    <select
                                        id="product"
                                        name="product"
                                        required
                                        value={form.product}
                                        onChange={handleChange}
                                        className="h-[54px] w-full rounded-lg border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#333333] outline-none transition focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10"
                                    >
                                        <option value="">
                                            Select a Product
                                        </option>
                                        <option value="Airless Painting Machine">
                                            Airless Painting Machine
                                        </option>
                                        <option value="Electric Airless Paint Sprayer">
                                            Electric Airless Paint Sprayer
                                        </option>
                                        <option value="Industrial Painting Equipment">
                                            Industrial Painting Equipment
                                        </option>
                                        <option value="Painting Machine Accessories">
                                            Painting Machine Accessories
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-[#222222]"
                                >
                                    Your Requirements{" "}
                                    <span className="text-[#DC2626]">*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell us about your product requirements, quantity, or any questions..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full resize-none rounded-lg border border-neutral-200 bg-[#fafafa] px-4 py-4 text-sm text-[#333333] outline-none transition focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10"
                                />
                            </div>

                            {/* Status */}
                            {status.message && (
                                <div
                                    role="status"
                                    className={`rounded-lg px-4 py-3 text-sm ${status.type === "success"
                                        ? "bg-green-50 text-green-700"
                                        : "bg-red-50 text-red-700"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex h-[56px] w-full items-center justify-center gap-3 rounded-lg bg-[#DC2626] px-6 text-sm font-bold text-white shadow-[0_8px_25px_rgba(220,38,38,0.2)] transition-all duration-300 hover:bg-[#111111] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={19}
                                            className="animate-spin"
                                        />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                        Submit Your Inquiry
                                        <ArrowUpRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-[#222222]"
            >
                {label}
                {required && (
                    <span className="ml-1 text-[#DC2626]">*</span>
                )}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="h-[54px] w-full rounded-lg border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#333333] outline-none transition focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10"
            />
        </div>
    );
}
