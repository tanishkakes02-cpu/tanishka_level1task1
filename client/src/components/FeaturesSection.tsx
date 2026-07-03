import { Sparkles, Zap, Heart } from "lucide-react";

/**
 * Features Section Component
 * Organic Craft Modern Design
 * - Three feature cards with icons
 * - Asymmetric layout with alternating text/image
 * - Hover animations and depth effects
 */
export default function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Intuitive Design",
      description:
        "Every pixel is crafted with intention. Our interface feels like a natural extension of your creative process, not a barrier to it.",
      image: "/manus-storage/feature-illustration-1_b623338b.png",
      alignment: "left",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Performance meets beauty. Experience smooth interactions and instant feedback that keep your creative flow uninterrupted.",
      image: "/manus-storage/feature-illustration-2_62c08c81.png",
      alignment: "right",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Built by creators, for creators. Every feature is designed with your needs in mind, from the smallest detail to the biggest vision.",
      image: "/manus-storage/feature-illustration-1_b623338b.png",
      alignment: "left",
    },
  ];

  return (
    <section id="features" className="bg-card py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Thoughtfully designed features that celebrate creativity and make your work feel effortless.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = feature.alignment === "left";

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  isLeft ? "" : "md:grid-cols-2 md:direction-rtl"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`animate-slide-in-left ${
                    !isLeft ? "md:order-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center gap-2 group">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>

                {/* Image */}
                <div
                  className={`animate-slide-in-right ${
                    !isLeft ? "md:order-1" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl blur-xl"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative h-20 md:h-32 overflow-hidden mt-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="oklch(0.97 0.005 80)"
          />
        </svg>
      </div>
    </section>
  );
}
