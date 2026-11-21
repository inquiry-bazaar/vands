
import React from "react";
import Image from "next/image";
import Link from "next/link";



const products = [
    {
        id: "maruti-450",
        name: "Airless Painting Machine Manufacturer",
        image: "/prods/MARUTI.webp",
        category: "electric-paint-machine",
    },
    {
        id: "e-junior",
        name: "Airless Painting Machine Supplier",
        image: "/prods/ejunior.webp",
        category: "electric-paint-machine",
    },
    {
        id: "digicoat",
        name: "Airless Spray Machine Manufacturer",
        image: "/prods/DIGICOAT 495.webp",
        category: "electric-paint-machine",
    },
    {
        id: "eco-pro",
        name: "Airless Spray Machine Supplier",
        image: "/cat/Products/airless-painting-machine/ECO-PRO.webp",
        category: "electric-paint-machine",
    },
    {
        id: "eco-pro-plus",
        name: "Portable Airless Painting Machine",
        image: "/prods/ecopro+.webp",
        category: "electric-paint-machine",
    },
    {
        id: "vands-7951",
        name: "Electric Airless Painting Machine",
        image: "/prods/Vands 7951.webp",
        category: "wall-putty-spray-machines",
    },
    {
        id: "galaxy",
        name: "Airless Spray Painting Machine",
        image: "/cat/Products/airless-painting-machine/GALAXY.webp",
        category: "wall-putty-spray-machines",
    },
    {
        id: "v9-model",
        name: "Electric Paint Machine",
        image: "/prods/v9-model.webp",
        category: "wall-putty-spray-machines",
    },
    {
        id: "galaxy-plus",
        name: "Wall Puty Spray Machine",
        image: "/cat/Products/airless-painting-machine/GALAXY PLUS.webp",
        category: "heavy-duty-industrial-application",
    },
    {
        id: "professional",
        name: "Pneumatic Airless Paint Sprayer",
        image: "/cat/Products/airless-painting-machine/PROFESSIONAL.webp",
        category: "heavy-duty-industrial-application",
    },
    {
        id: "maxcoat",
        name: "Commercial Airless Painting Machine",
        image: "/prods/MAXCOAT.webp",
        category: "heavy-duty-industrial-application",
    },
    {
        id: "vands-915",
        name: "Airless Paint & Putty Sprayers",
        image: "/prods/VANDS-915.webp",
        category: "rugged-series",
    },
    {
        id: "vands-930",
        name: "Heavy Duty Airless Painting Machine",
        image: "/prods/VANDS-930.webp",
        category: "rugged-series",
    },
    {
        id: "vands-950",
        name: "Heavy Duty Airless Paint Sprayer",
        image: "/prods/VANDS-950.webp",
        category: "rugged-series",
    },
    {
        id: "vands-980",
        name: "Industrial Airless Painting Machine",
        image: "/prods/VANDS-980.webp",
        category: "rugged-series",
    },
];



export default function ProductsSection() {
    return (
        <section
            id="our-products"
            className="bg-white py-10 sm:py-12 lg:py-15"
        >
            <div className="mx-auto max-w-[1500px] px-3 sm:px-8 lg:px-12">

                {/* Section Heading */}
                <div className="mb-5 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-[#DC2626]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
                            Our Collection
                        </span>
                        <span className="h-[2px] w-8 bg-[#DC2626]" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
                        Explore Our{" "}
                        <span className="text-[#DC2626]">
                            Products
                        </span>
                    </h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-5 lg:gap-6">
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`}
                            key={product.id}
                            className="group flex flex-col overflow-hidden rounded-lg border border-[#eeeeee] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2626]/50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:rounded-xl"
                        >
                            {/* Product Image */}
                            <div div className="relative aspect-square w-full overflow-hidden bg-[#f8f8f8]" >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 1023px) 33vw, 20vw"
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Name */}
                            <div className="flex min-h-[50px] flex-1 items-center justify-center border-t border-[#f1f1f1] px-1 py-1 text-center sm:min-h-[72px] sm:px-4">
                                <h3 className="text-[10px] font-semibold leading-[1.4] text-[#111111] transition-colors duration-300 group-hover:text-[#DC2626] sm:text-sm lg:text-[15px]">
                                    {product.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div >
        </section >
    );
}
