
export const metadata = {
    title: "Send an Inquiry Airless Painting Machine Manufacturer | Vands Engineering",
    description:
        "Have a question about our products or services? Send us an inquiry and our team will get back to you.",
    alternates: {
        canonical: "/inquiry",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function InquiryLayout({ children }) {
    return <main className="min-h-screen">{children}</main>;
}
