import React from "react";

export const metadata = {
  title: "Shipping Policy | Vands Engineering Solutions",
  description:
    "Read the shipping and delivery policy for Vands Engineering Solutions products.",
};

const policies = [
  {
    number: "01",
    title: "Order Processing",
    items: [
      "All orders are processed after confirmation of payment and order details.",
      "Standard processing time is 2–5 business days, depending on product availability and customization requirements.",
      "Processing time for bulk or customized machinery may vary and will be communicated in advance.",
    ],
  },
  {
    number: "02",
    title: "Shipping & Delivery Time",
    items: [
      "Metro Cities: 5–7 days.",
      "Other Locations: 7–14 days.",
      "Remote or rural areas may require additional delivery time.",
    ],
  },
  {
    number: "03",
    title: "Shipping Charges",
    items: [
      "Shipping charges are calculated based on product weight and packaging.",
      "Delivery location and mode of transport are also considered.",
      "Final shipping charges will be shared during order confirmation.",
    ],
  },
  {
    number: "04",
    title: "Delivery Method",
    items: [
      "We work with trusted logistics partners for safe and reliable delivery.",
      "Heavy machinery may be transported using specialized carriers.",
    ],
  },
  {
    number: "05",
    title: "Order Tracking",
    content:
      "Once your order is dispatched, tracking details or transport information will be shared via phone or email.",
  },
  {
    number: "06",
    title: "Delivery Guidelines",
    items: [
      "The customer or an authorized representative must be available at the delivery location.",
      "Customers should arrange unloading equipment such as cranes or forklifts when required.",
      "Please inspect the product carefully upon delivery for any visible damage.",
    ],
  },
  {
    number: "07",
    title: "Damaged or Delayed Shipments",
    items: [
      "Report damaged products within 24 hours, along with photos or videos for verification.",
      "Delivery delays caused by weather, transportation issues, strikes, or unforeseen events may occur.",
    ],
  },
];

export default function ShippingPolicy() {
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
            Shipping Policy
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-12">
        <div className="mb-10 rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_12px_40px_rgba(11,28,44,0.08)] md:p-8">
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            At <strong>Vands Engineering Solutions</strong>, we are committed
            to ensuring safe and reliable delivery of our products. Our
            experienced team carefully processes, packages, and dispatches
            every order with attention to quality.
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

          <article className="rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,28,44,0.06)] md:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                08
              </span>
              <h2 className="font-poppins text-xl font-bold text-[#0B1C2C]">
                Service Availability
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              We currently ship across India. For international orders, please
              contact us directly to discuss availability and shipping options.
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl bg-[#0B1C2C] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              09. Contact Us
            </p>
            <h2 className="font-poppins text-2xl font-bold">
              Need help with a shipment?
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
