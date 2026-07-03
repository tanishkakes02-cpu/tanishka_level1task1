import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Home Page - Creative Landing Page
 * Organic Craft Modern Design
 * 
 * Design Philosophy:
 * - Warm, earthy color palette (terracotta, sage green, cream)
 * - Asymmetric layouts with organic shapes
 * - Smooth animations and micro-interactions
 * - Typography: Playfair Display (serif) for headlines, Inter (sans-serif) for body
 * - Generous whitespace and intentional spacing
 * - Hover effects and depth with shadows
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
