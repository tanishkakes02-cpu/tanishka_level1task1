/**
 * Footer Component
 * Organic Craft Modern Design
 * - Warm, inviting footer with links
 * - Brand information
 * - Copyright and legal links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#security" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
    Legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/manus-storage/brand-logo_b1bdb185.png"
                alt="Brand Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Creative</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              A modern platform celebrating human creativity through warm, intentional design.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="animate-slide-in-right">
              <h4 className="font-bold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-background/70">
            <p>&copy; {currentYear} Creative. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="hover:text-background transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="hover:text-background transition-colors duration-200">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
