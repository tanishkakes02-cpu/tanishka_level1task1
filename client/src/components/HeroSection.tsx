import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section Component
 * Organic Craft Modern Design
 * - Warm background with organic shapes
 * - Bold typography with serif fonts
 * - Asymmetric layout with image on the right
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="accent-text text-primary text-lg mb-4">
              Welcome to Creative
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Craft Your Vision
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg">
              A modern platform that celebrates human creativity through warm, intentional design. Build something beautiful with tools that feel like an extension of your imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 group"
              >
                Let's Create
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted transition-all duration-200"
              >
                Explore the Magic
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl"></div>
              <img
                src="/manus-storage/hero-background_f8a07a18.png"
                alt="Hero Background"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative h-20 md:h-32 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="oklch(0.985 0 0)"
          />
        </svg>
      </div>
    </section>
  );
}
