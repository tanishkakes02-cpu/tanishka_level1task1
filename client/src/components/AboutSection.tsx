/**
 * About Section Component
 * Organic Craft Modern Design
 * - Warm, inviting copy
 * - Asymmetric layout
 * - Emphasis on brand values and mission
 */
export default function AboutSection() {
  const values = [
    {
      number: "01",
      title: "Warmth",
      description: "Inviting, approachable, human-centered design that feels personal.",
    },
    {
      number: "02",
      title: "Intention",
      description: "Thoughtful, purposeful design where every detail matters and serves a purpose.",
    },
    {
      number: "03",
      title: "Playfulness",
      description: "Delightful micro-interactions and moments of joy that make creation fun.",
    },
  ];

  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              We believe that creativity shouldn't be complicated. Born from a passion for beautiful design and human-centered technology, we built a platform that feels as good as it works.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Every feature, every interaction, every color choice—it's all designed with one goal: to celebrate your creativity and make your work feel effortless.
            </p>
          </div>

          {/* Right Values */}
          <div className="animate-slide-in-right space-y-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="organic-card p-6 hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-primary/30 mb-2">
                  {value.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          {[
            { stat: "10K+", label: "Happy Creators" },
            { stat: "50M+", label: "Projects Created" },
            { stat: "99.9%", label: "Uptime" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {item.stat}
              </div>
              <p className="text-foreground/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
