
import Script from "next/script";

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
    return (
        <main className="min-h-screen">
            {children}
            <Script
                id="microsoft-clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "zh3ox5aqa4");`,
                }}
            />
        </main>
    );
}
