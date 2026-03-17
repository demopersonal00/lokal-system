/* ============================================================
   LOKAL SYSTEMS — Home Page
   Design: Dark Precision
   Sections: Navbar, Hero, Services, Process, Use Cases,
             Why Us, CTA, Contact, Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import UseCasesSection from "@/components/UseCasesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#080C18" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <UseCasesSection />
      <TestimonialsSection />
      <WhyUsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
