import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-tight section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Mobile<span className="text-primary">Detail</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Professional mobile car detailing service. We bring the car wash to you
              with premium results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services & Pricing
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+353123456789"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +353 123 456 789
              </a>
              <a
                href="mailto:info@mobiledetailing.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@mobiledetailing.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MobileDetail. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Professional Mobile Car Detailing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
