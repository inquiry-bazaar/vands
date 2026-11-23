
import React from "react";

export const metadata = {
  title: "Terms and Conditions | Vands Engineering Solutions",
  description:
    "Read the Terms and Conditions for using the Vands Engineering Solutions website and services.",
};

const terms = [
  {
    number: "01",
    title: "Use of Website",
    items: [
      "You agree to use this website for lawful purposes only.",
      "You must not misuse, disrupt, or attempt unauthorized access.",
      "All content is provided for informational and commercial use.",
    ],
  },
  {
    number: "02",
    title: "Product Information",
    items: [
      "We strive to ensure that product details and prices are accurate.",
      "Minor variations may occur due to manufacturing or display differences.",
      "We reserve the right to update product information at any time.",
    ],
  },
  {
    number: "03",
    title: "Orders & Payments",
    items: [
      "Orders are confirmed only after successful payment.",
      "We reserve the right to cancel or refuse any order.",
      "Pricing and availability may change without prior notice.",
    ],
  },
  {
    number: "04",
    title: "Shipping & Delivery",
    items: [
      "Delivery timelines are estimates and may vary.",
      "Delays caused by external factors are outside our control.",
      "Please refer to our Shipping Policy for additional details.",
    ],
  },
  {
    number: "05",
    title: "Returns & Refunds",
    items: [
      "Returns are governed by our Return & Refund Policy.",
      "Certain products may not be eligible for return.",
      "Refunds are processed only after inspection and approval.",
    ],
  },
];

const TermsAndConditions = () => {
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
            Terms &amp; Conditions
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-12">
        <div className="mb-10 rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_12px_40px_rgba(11,28,44,0.08)] md:p-8">
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            Welcome to <strong>Vands Engineering Solutions</strong>. By using
            our website, purchasing our products, or engaging with our services,
            you agree to the terms and conditions below. Please read them
            carefully before proceeding.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {terms.map((term) => (
            <article
              key={term.number}
              className="group rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,28,44,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_14px_36px_rgba(11,28,44,0.12)] md:p-7"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  {term.number}
                </span>
                <h2 className="font-poppins text-xl font-bold text-[#0B1C2C]">
                  {term.title}
                </h2>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                {term.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,28,44,0.06)] md:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                06
              </span>
              <h2 className="font-poppins text-xl font-bold text-[#0B1C2C]">
                Limitation of Liability
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Vands Engineering Solutions shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of our
              products or services.
            </p>
          </article>

          <article className="rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,28,44,0.06)] md:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                07
              </span>
              <h2 className="font-poppins text-xl font-bold text-[#0B1C2C]">
                Intellectual Property
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              All content on this website, including text, images, and logos,
              is the property of Vands Engineering Solutions and may not be used
              without permission.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-white p-6 md:p-8">
          <h2 className="mb-3 font-poppins text-xl font-bold text-[#0B1C2C] md:text-2xl">
            08. Policy Updates
          </h2>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            We reserve the right to update these terms at any time. Changes
            become effective once posted on this page.
          </p>
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl bg-[#0B1C2C] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              09. Contact Us
            </p>
            <h2 className="font-poppins text-2xl font-bold">
              Have a question about these terms?
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

export default TermsAndConditions;
