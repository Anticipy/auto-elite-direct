import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE_NUMBER = "+4915213022280";
const PHONE_DISPLAY = "+49 152 1302 2280";
const EMAIL = "info@mczdetailing.de";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-tight section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              mcz<span className="text-primary">detailing</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.quickLinks}</h4>
            <nav className="space-y-2">
              <a
                href="#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t.servicesAndPricing}
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t.aboutUs}
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t.contact}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.contactUs}</h4>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
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
            © {currentYear} mczdetailing. {t.allRightsReserved}
          </p>
          <p className="text-muted-foreground text-xs">
            {t.professionalMobileDetailing}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
