import HeroSection from "@/components/home/hero-section";
import TrustedFeatures from "@/components/home/trusted-features";
import DashboardShowcase from "@/components/home/dashboard-showcase";
import PricingPreview from "@/components/home/pricing-preview";
import TestimonialsFaq from "@/components/home/testimonials-faq";
import CtaFooter from "@/components/home/cta-footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedFeatures />
      <DashboardShowcase />
      <PricingPreview />
      <TestimonialsFaq />
      <CtaFooter />
    </main>
  );
}
