
"use client";

import React, { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowUpRight,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
const PHONE = "919990730939";
const EMAIL = "info@airlesspaintingmachine.com";

const productOptions = [
    "Airless Painting Machines",
    "Wall Putty Spray Machines",
    "Pneumatic Machines",
    "Kerb Painting Machines",
    "Polyurethane Machines",
    "Painting Hose Pipe",
    "Other Products",
];

const initialForm = {
    name: "",
    phone: "",
    email: "",
    city: "N/A",
    product: "",
    message: "",
};

export default function ContactSection() {
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                name === "phone"
                    ? value.replace(/\D/g, "").slice(0, 10)
                    : value,
        }));

        if (status.message) {
            setStatus({ type: "", message: "" });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loading) return;

        if (!/^[6-9]\d{9}$/.test(form.phone)) {
            setStatus({
                type: "error",
                message: "Please enter a valid 10-digit mobile number.",
            });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        const { name, phone, email, city, product, message } = form;

        // Open a tab immediately to avoid popup blockers.
        const whatsappTab = window.open("about:blank", "_blank");
        const webisteUrl = window.location.hostname + window.location.pathname;
        try {
            const formData = {
                supplierToken: "6a9bd96879bd32ac5164a486",
                platform: webisteUrl || "Vands Engineering Contact Form",
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

            if (!data?.success) {
                throw new Error(
                    data?.message || "Unable to submit your inquiry."
                );
            }

            setStatus({
                type: "success",
                message:
                    "Your inquiry has been submitted successfully! Our team will contact you soon.",
            });

            const whatsappText = `Hi, I am ${name}.
Email: ${email || "N/A"}
Product: ${product}
City: ${city || "N/A"}
Message: ${message || "N/A"}
Contact: ${phone}`;

            const whatsappUrl =
                `https://wa.me/919990730939?text=${encodeURIComponent(whatsappText)}`;

            if (whatsappTab && !whatsappTab.closed) {
                whatsappTab.location.replace(whatsappUrl);
            } else {
                setStatus({
                    type: "success",
                    message:
                        "Inquiry submitted successfully. Please allow popups to continue on WhatsApp.",
                });
            }

            setForm(initialForm);
        } catch (error) {
            whatsappTab?.close();

            console.error("Contact inquiry error:", error);

            setStatus({
                type: "error",
                message:
                    error.response?.data?.message ||
                    error.message ||
                    "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="inquiry-form"
            className="relative overflow-hidden bg-[#f8f8f8] pb-20 pt-10"
        >
            <div className="mx-auto max-w-[1500px] px-3 sm:px-8 lg:px-12">
                {/* Heading */}
                <div className="mb-5 text-center sm:mb-12">
                    <div className="mb-2 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-[#c8102e]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
                            Contact Us
                        </span>
                        <span className="h-[2px] w-8 bg-[#c8102e]" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
                        Get in <span className="text-[#c8102e]">Touch</span>
                    </h2>

                    <p className="mx-auto sm:block hidden mt-2 text-sm leading-7 text-neutral-600 sm:text-base">
                        Have a question about our painting machines? Send us
                        your requirements and our team will get back to you.
                    </p>
                </div>

                <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] lg:grid-cols-[0.85fr_1.15fr]">
                    {/* LEFT CONTACT PANEL */}
                    <div className="relative overflow-hidden bg-[#c8102e] p-6 text-white sm:p-10 lg:p-12">
                        {/* Decorations */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-white/20" />
                        <div className="pointer-events-none absolute -bottom-28 -left-28 h-[320px] w-[320px] rounded-full border border-white/15" />

                        <div className="relative z-10">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                                Let's Connect
                            </span>

                            <h3 className="mt-4 sm:block hidden max-w-[450px] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                                Let's Find the Right Painting Solution for You.
                            </h3>

                            <p className="mt-5 sm:block hidden text-sm leading-5 text-white/85">
                                Get assistance with product selection,
                                specifications, availability, and pricing.
                            </p>

                            {/* Contact Details */}
                            <div className="sm:mt-10 mt-5 space-y-7">
                                <a
                                    href={`tel:+${PHONE}`}
                                    className="group flex items-start gap-4"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 transition-colors group-hover:bg-white/25">
                                        <Phone size={21} />
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block text-xs font-medium text-white/70">
                                            Call Our Team
                                        </span>
                                        <span className="mt-1 block text-base font-bold sm:text-lg">
                                            +91 {PHONE.slice(2)}
                                        </span>
                                    </span>
                                </a>

                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="group flex items-start gap-4"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 transition-colors group-hover:bg-white/25">
                                        <Mail size={21} />
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block text-xs font-medium text-white/70">
                                            Email Us
                                        </span>
                                        <span className="mt-1 block break-all text-sm font-bold sm:text-base">
                                            {EMAIL}
                                        </span>
                                    </span>
                                </a>

                                <div className="flex items-start gap-4">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                                        <MapPin size={21} />
                                    </span>

                                    <span>
                                        <span className="block text-xs font-medium text-white/70">
                                            Service Area
                                        </span>
                                        <span className="mt-1 block text-base font-bold">
                                            India
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                                    "Hello, I would like to inquire about your painting machines."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sm:mt-10 mt-5 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#c8102e] transition-all hover:bg-[#111111] hover:text-white"
                            >
                                <FaWhatsapp size={19} />
                                Chat on WhatsApp
                                <ArrowUpRight size={17} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT INQUIRY FORM */}
                    <div className="p-5 sm:p-8 lg:p-12">
                        <div className="mb-7">
                            <h3 className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                                Send Your Inquiry
                            </h3>
                            <p className="mt-2 text-sm text-neutral-500">
                                Fill in your details and we'll get in touch.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name & Phone */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-xs font-bold text-[#222222]"
                                    >
                                        Full Name <span className="text-[#c8102e]">*</span>
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        autoComplete="name"
                                        required
                                        minLength={2}
                                        maxLength={100}
                                        className="h-12 w-full rounded-lg border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#111111] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#c8102e]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-phone"
                                        className="mb-2 block text-xs font-bold text-[#222222]"
                                    >
                                        Mobile Number <span className="text-[#c8102e]">*</span>
                                    </label>

                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="10-digit mobile number"
                                        autoComplete="tel-national"
                                        inputMode="numeric"
                                        pattern="[6-9][0-9]{9}"
                                        maxLength={10}
                                        required
                                        className="h-12 w-full rounded-lg border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#111111] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#c8102e]"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="mb-2 block text-xs font-bold text-[#222222]"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    autoComplete="email"
                                    maxLength={150}
                                    className="h-12 w-full rounded-lg border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#111111] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#c8102e]"
                                />
                            </div>

                            {/* Product */}
                            <div>
                                <label
                                    htmlFor="contact-product"
                                    className="mb-2 block text-xs font-bold text-[#222222]"
                                >
                                    Interested Product{" "}
                                    <span className="text-[#c8102e]">*</span>
                                </label>

                                <select
                                    id="contact-product"
                                    name="product"
                                    value={form.product}
                                    onChange={handleChange}
                                    required
                                    className="h-12 w-full rounded-lg border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#111111] outline-none transition-colors focus:border-[#c8102e]"
                                >
                                    <option value="">Select a product</option>

                                    {productOptions.map((product) => (
                                        <option key={product} value={product}>
                                            {product}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-xs font-bold text-[#222222]"
                                >
                                    Your Requirements
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    rows={4}
                                    maxLength={2000}
                                    className="w-full resize-none rounded-lg border border-neutral-200 bg-[#fafafa] px-4 py-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#c8102e]"
                                />
                            </div>

                            {/* Feedback */}
                            {status.message && (
                                <div
                                    role="status"
                                    className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${status.type === "success"
                                        ? "border-green-200 bg-green-50 text-green-700"
                                        : "border-red-200 bg-red-50 text-red-700"
                                        }`}
                                >
                                    {status.type === "success" ? (
                                        <CheckCircle2 size={18} className="shrink-0" />
                                    ) : (
                                        <AlertCircle size={18} className="shrink-0" />
                                    )}
                                    <span>{status.message}</span>
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#c8102e] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#111111] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={19} className="animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Submit Inquiry
                                        <ArrowUpRight size={18} />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs leading-5 text-neutral-500">
                                By submitting, you agree to be contacted
                                regarding your inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
