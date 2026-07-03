import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter } from "lucide-react";

/**
 * CTA Section Component
 * Organic Craft Modern Design
 * - Strong call-to-action
 * - Contact information
 * - Social links
 */
export default function CTASection() {
  return (
    <section id="contact" className="bg-card py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Create?
          </h2>
          <p className="text-lg text-foreground/70 mb-12">
            Join thousands of creators who are already crafting beautiful things. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted transition-all duration-200"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="border-t border-border pt-12">
            <p className="text-foreground/70 mb-8">Questions? We'd love to hear from you.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:hello@creative.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-semibold"
              >
                <Mail size={20} />
                hello@creative.com
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-primary" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
