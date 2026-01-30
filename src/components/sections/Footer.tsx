import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const PHONE_NUMBER = "+4915213022280";
const PHONE_DISPLAY = "+49 152 1302 2280";
const EMAIL = "contact@mczdetailing.com";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/mczzdetailing",
  instagram: "https://www.instagram.com/mczdetailing",
  tiktok: "https://www.tiktok.com/@mczdetailing",
} as const;

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
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
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
