import React from "react";

export const metadata = {
  title: "Return & Refund Policy | Vands Engineering Solutions",
  description:
    "Read the return, replacement, cancellation, and refund policy for Vands Engineering Solutions.",
};

const policies = [
  {
    number: "01",
    title: "Return Eligibility",
    items: [
      "The product received is damaged during transit.",
      "An incorrect product or quantity is delivered.",
      "The product does not match the confirmed order specifications.",
      "Return requests must be submitted within 24–48 hours of delivery.",
    ],
  },
  {
    number: "02",
    title: "Non-Returnable Items",
    items: [
      "Opened or partially used products.",
      "Products stored improperly after delivery.",
      "Customized or made-to-order products.",
      "Products damaged due to customer mishandling.",
    ],
  },
  {
    number: "03",
    title: "Return Process",
    items: [
      "Contact our support team within the eligible return period.",
      "Share order details with photos or videos of the issue.",
      "Our team will review your request.",
      "If approved, return instructions will be provided.",
    ],
  },
  {
    number: "04",
    title: "Refund Policy",
    items: [
      "Refunds are processed after inspection and approval.",
      "Approved refunds will be processed within 7–10 business days.",
      "Refunds will be credited via the original or agreed payment method.",
    ],
  },
  {
    number: "05",
    title: "Replacement Policy",
    items: [
      "Replacement of a damaged, defective, or incorrect product.",
      "An alternative product may be offered.",
      "A refund may be provided based on the circumstances.",
    ],
  },
  {
    number: "06",
    title: "Return Shipping",
    items: [
      "If the issue is from our side, Vands Engineering Solutions will bear the return shipping cost.",
      "Otherwise, return shipping may be the customer's responsibility.",
    ],
  },
  {
    number: "07",
    title: "Order Cancellation",
    items: [
      "Orders can be cancelled before dispatch without charges.",
      "Post-dispatch cancellation may not be accepted.",
    ],
  },
];

export default function ReturnRefundPolicy() {
  return (
    <main className="bg-[#f6f7f9] text-[#0B1C2C]">
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0B1C2C] bg-cover bg-center md:min-h-[480px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/95 via-[#0B1C2C]/80 to-[#0B1C2C]/95" />
        <div className="absolute left-0 top-0 h-1 w-full bg-red-500" />
        <div className="relative z-10 mx-auto mt-10 max-w-5xl px-6 text-center md:mt-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-400">
            Vands Engineering Solutions
          </p>
          <h1 className="font-poppins text-4xl font-bold text-white md:text-6xl">
            Return &amp; Refund Policy
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-12">
        <div className="mb-10 rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_12px_40px_rgba(11,28,44,0.08)] md:p-8">
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            At <strong>Vands Engineering Solutions</strong>, we are committed
            to providing high-quality industrial products and ensuring customer
            satisfaction. This policy helps maintain product quality, safety,
            and compliance.
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
              {policy.number === "03" ? (
                <ol className="space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                  {policy.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : (
                <ul className="space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                  {policy.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article className="rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,28,44,0.06)] md:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                08
              </span>
              <h2 className="font-poppins text-xl font-bold text-[#0B1C2C]">
                Important Notes
              </h2>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-600 md:text-base">
              <li>Follow proper storage and handling guidelines.</li>
              <li>Claims without proof may not be approved.</li>
              <li>Always follow the provided safety instructions.</li>
            </ul>
          </article>
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl bg-[#0B1C2C] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              09. Contact Us
            </p>
            <h2 className="font-poppins text-2xl font-bold">
              Need help with a return or refund?
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
}
