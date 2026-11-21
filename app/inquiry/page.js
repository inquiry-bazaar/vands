
import AboutInquiry from "@/components/inquiry/AboutInquiry";
import CategorySection from "@/components/inquiry/CategorySection";
import ContactSection from "@/components/inquiry/ContactSection";
import CTASection from "@/components/inquiry/CTASection";
import Footer from "@/components/inquiry/Footer";
import InquiryBanner from "@/components/inquiry/InquiryBanner";
import Navbar from "@/components/inquiry/Navbar";
import ProductsSection from "@/components/inquiry/ProductsSection";
import VideosSection from "@/components/inquiry/VideosSection";

export default function Page() {
    return (
        <main>
            <Navbar />
            <InquiryBanner />
            <AboutInquiry />
            <div className="sm:block hidden">
                <ProductsSection />
            </div>
            <CTASection />
            <VideosSection />
            <CategorySection />
            <ContactSection />

            <Footer />
        </main>
    );
}
