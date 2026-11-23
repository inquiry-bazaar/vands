
import React from "react";

export const metadata = {
  title: "Privacy Policy | Vands Engineering Solutions",
  description:
    "Read how Vands Engineering Solutions collects, uses, and protects personal information.",
};

const policies = [
  {
    number: "01",
    title: "Information We Collect",
    items: [
      "Name, phone number, and email address.",
      "Billing and shipping address.",
      "Order and transaction details.",
      "Website usage data, including cookies, IP address, and browser information.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    items: [
      "To process and deliver your orders.",
      "To communicate order updates and provide support.",
      "To improve our website and services.",
      "To send important notifications or offers where you have opted in.",
    ],
  },
  {
    number: "03",
    title: "Data Protection",
    content:
      "We implement appropriate security measures to protect your personal data from unauthorized access, misuse, alteration, or disclosure.",
  },
  {
    number: "04",
    title: "Sharing of Information",
    items: [
      "We do not sell or rent your personal information to third parties.",
      "Information may be shared with trusted service providers, such as logistics and payment partners, for order fulfillment.",
      "We may disclose data if required by law or legal authorities.",
    ],
  },
  {
    number: "05",
    title: "Cookies",
    content:
      "Our website may use cookies to enhance user experience, analyze traffic, and improve functionality. You can disable cookies through your browser settings.",
  },
  {
    number: "06",
    title: "Your Rights",
    items: [
      "You can request access to your personal data.",
      "You can request correction or deletion of your data.",
      "You can opt out of marketing communications.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#f6f7f9] text-[#0B1C2C]">
      <section
        className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0B1C2C] bg-cover bg-center md:min-h-[480px]"
        
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/95 via-[#0B1C2C]/80 to-[#0B1C2C]/95" />
        <div className="absolute left-0 top-0 h-1 w-full bg-red-500" />
        <div className="relative mt-10 md:mt-25 z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-400">
            Vands Engineering Solutions
          </p>
          <h1 className="font-poppins text-4xl font-bold text-white md:text-6xl">
            Privacy Policy
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-12">
        <div className="mb-10 rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_12px_40px_rgba(11,28,44,0.08)] md:p-8">
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            Welcome to <strong>Vands Engineering Solutions</strong>. We value
            your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you use our website or services.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {policies.map((policy) => (
            <article
              key={policy.number}
              className="group rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,28,44,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_14px_36px_rgba(11,28,44,0.12)] md:p-7"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  {policy.number}
                </span>
                <h2 className="font-poppins text-xl font-bold text-[#0B1C2C]">
                  {policy.title}
                </h2>
              </div>
              {policy.items ? (
                <ul className="space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                  {policy.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  {policy.content}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-white p-6 md:p-8">
          <h2 className="mb-3 font-poppins text-xl font-bold text-[#0B1C2C] md:text-2xl">
            07. Policy Updates
          </h2>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page, along with the effective date.
          </p>
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl bg-[#0B1C2C] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              08. Contact Us
            </p>
            <h2 className="font-poppins text-2xl font-bold">
              Have a question about your privacy?
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Get in touch with Vands Engineering Solutions.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:min-w-[260px]">
            <a
              href="mailto:sales.vands5@gmail.com"
              className="rounded-lg border border-white/15 px-5 py-3 transition hover:border-red-400 hover:text-red-400"
            >
              sales.vands5@gmail.com
            </a>
            <a
              href="tel:+919990730939"
              className="rounded-lg border border-white/15 px-5 py-3 transition hover:border-red-400 hover:text-red-400"
            >
              +91-9990730939
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
