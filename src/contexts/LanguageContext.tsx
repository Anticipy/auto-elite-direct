import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface Translations {
  // Header
  services: string;
  about: string;
  contact: string;
  callNow: string;
  bookNow: string;
  
  // Hero
  mobileCarDetailing: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  viewServices: string;
  happyCustomers: string;
  averageRating: string;
  satisfaction: string;
  
  // Services
  ourServices: string;
  professionalPackages: string;
  servicesDescription: string;
  mostPopular: string;
  
  // Service items
  basicWashTitle: string;
  basicWashDesc: string;
  basicWashFeature1: string;
  basicWashFeature2: string;
  basicWashFeature3: string;
  basicWashFeature4: string;
  
  basicInteriorTitle: string;
  basicInteriorDesc: string;
  basicInteriorFeature1: string;
  basicInteriorFeature2: string;
  basicInteriorFeature3: string;
  basicInteriorFeature4: string;
  
  standardTitle: string;
  standardDesc: string;
  standardFeature1: string;
  standardFeature2: string;
  standardFeature3: string;
  standardFeature4: string;
  standardFeature5: string;
  
  fullTitle: string;
  fullDesc: string;
  fullFeature1: string;
  fullFeature2: string;
  fullFeature3: string;
  fullFeature4: string;
  fullFeature5: string;
  fullFeature6: string;
  
  // How it works
  howItWorks: string;
  simpleAs123: string;
  howItWorksDesc: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  
  // About
  aboutUs: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  yearsExperience: string;
  carsDetailed: string;
  professionalQuality: string;
  professionalQualityDesc: string;
  convenientService: string;
  convenientServiceDesc: string;
  ecoFriendly: string;
  ecoFriendlyDesc: string;
  satisfactionGuaranteed: string;
  satisfactionGuaranteedDesc: string;
  
  // Contact
  getInTouch: string;
  bookYourDetailing: string;
  contactDescription: string;
  callUs: string;
  emailUs: string;
  serviceArea: string;
  serviceAreaText: string;
  workingHours: string;
  workingHoursText: string;
  sundayText: string;
  chatOnWhatsapp: string;
  yourName: string;
  emailAddress: string;
  phoneNumber: string;
  messageplaceholder: string;
  sendMessage: string;
  sending: string;
  messageSent: string;
  messageConfirmation: string;
  
  // Footer
  footerDescription: string;
  quickLinks: string;
  servicesAndPricing: string;
  contactUs: string;
  allRightsReserved: string;
  professionalMobileDetailing: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Header
    services: "Services",
    about: "About",
    contact: "Contact",
    callNow: "Call Now",
    bookNow: "Book Now",
    
    // Hero
    mobileCarDetailing: "Mobile Car Detailing",
    heroTitle: "Professional Mobile Car Detailing",
    heroTitleHighlight: "at Your Location",
    heroSubtitle: "Interior & exterior cleaning — fast, reliable, affordable. We come to you, wherever you are.",
    viewServices: "View Services",
    happyCustomers: "Happy Customers",
    averageRating: "Average Rating",
    satisfaction: "Satisfaction",
    
    // Services
    ourServices: "Our Services",
    professionalPackages: "Professional Detailing Packages",
    servicesDescription: "Choose the perfect package for your vehicle. All services include our mobile convenience – we come directly to you.",
    mostPopular: "Most Popular",
    
    // Service items
    basicWashTitle: "Basic Wash + Quick Vacuum",
    basicWashDesc: "Exterior wash and light interior vacuum",
    basicWashFeature1: "Full exterior hand wash",
    basicWashFeature2: "Wheel cleaning",
    basicWashFeature3: "Interior quick vacuum",
    basicWashFeature4: "Dashboard wipe down",
    
    basicInteriorTitle: "Basic Interior + Exterior",
    basicInteriorDesc: "Interior cleaning and exterior wash",
    basicInteriorFeature1: "Complete exterior wash",
    basicInteriorFeature2: "Interior vacuuming",
    basicInteriorFeature3: "Window cleaning",
    basicInteriorFeature4: "Air freshener",
    
    standardTitle: "Standard Detailing",
    standardDesc: "Deeper interior and exterior detailing",
    standardFeature1: "Full exterior detailing",
    standardFeature2: "Deep interior cleaning",
    standardFeature3: "Leather conditioning",
    standardFeature4: "Engine bay cleaning",
    standardFeature5: "Tire dressing",
    
    fullTitle: "Full Detailing",
    fullDesc: "Complete interior & exterior deep detail",
    fullFeature1: "Premium hand wash",
    fullFeature2: "Clay bar treatment",
    fullFeature3: "Paint correction",
    fullFeature4: "Interior deep clean",
    fullFeature5: "Ceramic coating",
    fullFeature6: "Premium protection",
    
    // How it works
    howItWorks: "How It Works",
    simpleAs123: "Simple as 1-2-3",
    howItWorksDesc: "Getting your car detailed has never been easier. We handle everything so you can relax.",
    step1Title: "Choose a Service",
    step1Desc: "Browse our packages and select the one that fits your needs and budget.",
    step2Title: "Book a Time",
    step2Desc: "Pick a convenient date and time. We offer flexible scheduling including weekends.",
    step3Title: "We Come to You",
    step3Desc: "Our professional team arrives at your location with all equipment needed.",
    
    // About
    aboutUs: "About Us",
    aboutTitle: "Your Car Deserves the Best Care",
    aboutText1: "We're passionate about cars and dedicated to delivering exceptional mobile detailing services. With years of experience and a commitment to excellence, we bring the car wash to you.",
    aboutText2: "Our team uses only premium products and proven techniques to ensure your vehicle looks its absolute best. From a quick wash to a full detail, we treat every car as if it were our own.",
    yearsExperience: "Years Experience",
    carsDetailed: "Cars Detailed",
    professionalQuality: "Professional Quality",
    professionalQualityDesc: "Premium products and expert techniques for showroom results.",
    convenientService: "Convenient Service",
    convenientServiceDesc: "We come to your home, office, or anywhere you need us.",
    ecoFriendly: "Eco-Friendly",
    ecoFriendlyDesc: "Water-saving methods and biodegradable cleaning products.",
    satisfactionGuaranteed: "Satisfaction Guaranteed",
    satisfactionGuaranteedDesc: "Not happy? We'll make it right, no questions asked.",
    
    // Contact
    getInTouch: "Get In Touch",
    bookYourDetailing: "Book Your Detailing",
    contactDescription: "Ready to give your car the treatment it deserves? Contact us today for a free quote.",
    callUs: "Call Us",
    emailUs: "Email Us",
    serviceArea: "Service Area",
    serviceAreaText: "Serving the greater Frankfurt area and surrounding regions",
    workingHours: "Working Hours",
    workingHoursText: "Mon - Sat: 8:00 AM - 6:00 PM",
    sundayText: "Sunday: By appointment",
    chatOnWhatsapp: "Chat on WhatsApp",
    yourName: "Your Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    messageplaceholder: "Tell us about your car and service needed...",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent!",
    messageConfirmation: "We'll get back to you within 24 hours.",
    
    // Footer
    footerDescription: "Professional mobile car detailing service. We bring the car wash to you with premium results.",
    quickLinks: "Quick Links",
    servicesAndPricing: "Services & Pricing",
    contactUs: "Contact Us",
    allRightsReserved: "All rights reserved.",
    professionalMobileDetailing: "Professional Mobile Car Detailing",
  },
  de: {
    // Header
    services: "Leistungen",
    about: "Über uns",
    contact: "Kontakt",
    callNow: "Jetzt anrufen",
    bookNow: "Jetzt buchen",
    
    // Hero
    mobileCarDetailing: "Mobile Autoaufbereitung",
    heroTitle: "Professionelle Mobile Autoaufbereitung",
    heroTitleHighlight: "bei Ihnen vor Ort",
    heroSubtitle: "Innen- & Außenreinigung — schnell, zuverlässig, erschwinglich. Wir kommen zu Ihnen, wo auch immer Sie sind.",
    viewServices: "Leistungen ansehen",
    happyCustomers: "Zufriedene Kunden",
    averageRating: "Durchschnittsbewertung",
    satisfaction: "Zufriedenheit",
    
    // Services
    ourServices: "Unsere Leistungen",
    professionalPackages: "Professionelle Aufbereitungspakete",
    servicesDescription: "Wählen Sie das perfekte Paket für Ihr Fahrzeug. Alle Leistungen beinhalten unseren mobilen Service – wir kommen direkt zu Ihnen.",
    mostPopular: "Am beliebtesten",
    
    // Service items
    basicWashTitle: "Basis Wäsche + Schnellsaugen",
    basicWashDesc: "Außenwäsche und leichtes Innenraumsaugen",
    basicWashFeature1: "Komplette Handwäsche außen",
    basicWashFeature2: "Felgenreinigung",
    basicWashFeature3: "Schnelles Innenraumsaugen",
    basicWashFeature4: "Armaturenbrett abwischen",
    
    basicInteriorTitle: "Basis Innen + Außen",
    basicInteriorDesc: "Innenreinigung und Außenwäsche",
    basicInteriorFeature1: "Komplette Außenwäsche",
    basicInteriorFeature2: "Innenraumsaugen",
    basicInteriorFeature3: "Fensterreinigung",
    basicInteriorFeature4: "Lufterfrischer",
    
    standardTitle: "Standard Aufbereitung",
    standardDesc: "Tiefere Innen- und Außenaufbereitung",
    standardFeature1: "Komplette Außenaufbereitung",
    standardFeature2: "Tiefe Innenreinigung",
    standardFeature3: "Lederpflege",
    standardFeature4: "Motorraumreinigung",
    standardFeature5: "Reifenpflege",
    
    fullTitle: "Vollaufbereitung",
    fullDesc: "Komplette Innen- & Außen-Tiefenreinigung",
    fullFeature1: "Premium Handwäsche",
    fullFeature2: "Knete-Behandlung",
    fullFeature3: "Lackkorrektur",
    fullFeature4: "Innenraum-Tiefenreinigung",
    fullFeature5: "Keramikversiegelung",
    fullFeature6: "Premium Schutz",
    
    // How it works
    howItWorks: "So funktioniert's",
    simpleAs123: "Einfach wie 1-2-3",
    howItWorksDesc: "Autoaufbereitung war noch nie so einfach. Wir kümmern uns um alles, damit Sie sich entspannen können.",
    step1Title: "Service wählen",
    step1Desc: "Durchsuchen Sie unsere Pakete und wählen Sie das, was zu Ihren Bedürfnissen und Budget passt.",
    step2Title: "Termin buchen",
    step2Desc: "Wählen Sie ein passendes Datum und Uhrzeit. Wir bieten flexible Terminplanung auch am Wochenende.",
    step3Title: "Wir kommen zu Ihnen",
    step3Desc: "Unser professionelles Team kommt mit allen benötigten Geräten zu Ihrem Standort.",
    
    // About
    aboutUs: "Über uns",
    aboutTitle: "Ihr Auto verdient die beste Pflege",
    aboutText1: "Wir sind leidenschaftlich für Autos und engagiert, außergewöhnliche mobile Aufbereitungsdienste zu liefern. Mit jahrelanger Erfahrung und einem Engagement für Exzellenz bringen wir die Autowäsche zu Ihnen.",
    aboutText2: "Unser Team verwendet nur Premium-Produkte und bewährte Techniken, um sicherzustellen, dass Ihr Fahrzeug absolut bestens aussieht. Von einer schnellen Wäsche bis zur Vollaufbereitung behandeln wir jedes Auto, als wäre es unser eigenes.",
    yearsExperience: "Jahre Erfahrung",
    carsDetailed: "Autos aufbereitet",
    professionalQuality: "Professionelle Qualität",
    professionalQualityDesc: "Premium-Produkte und Expertentechniken für Showroom-Ergebnisse.",
    convenientService: "Bequemer Service",
    convenientServiceDesc: "Wir kommen zu Ihnen nach Hause, ins Büro oder wohin Sie uns brauchen.",
    ecoFriendly: "Umweltfreundlich",
    ecoFriendlyDesc: "Wassersparende Methoden und biologisch abbaubare Reinigungsprodukte.",
    satisfactionGuaranteed: "Zufriedenheit garantiert",
    satisfactionGuaranteedDesc: "Nicht zufrieden? Wir machen es richtig, ohne Fragen zu stellen.",
    
    // Contact
    getInTouch: "Kontaktieren Sie uns",
    bookYourDetailing: "Buchen Sie Ihre Aufbereitung",
    contactDescription: "Bereit, Ihrem Auto die Behandlung zu geben, die es verdient? Kontaktieren Sie uns heute für ein kostenloses Angebot.",
    callUs: "Rufen Sie uns an",
    emailUs: "Schreiben Sie uns",
    serviceArea: "Servicegebiet",
    serviceAreaText: "Wir bedienen den Großraum Frankfurt und Umgebung",
    workingHours: "Öffnungszeiten",
    workingHoursText: "Mo - Sa: 8:00 - 18:00 Uhr",
    sundayText: "Sonntag: Nach Vereinbarung",
    chatOnWhatsapp: "Per WhatsApp chatten",
    yourName: "Ihr Name",
    emailAddress: "E-Mail-Adresse",
    phoneNumber: "Telefonnummer",
    messageplaceholder: "Erzählen Sie uns von Ihrem Auto und dem gewünschten Service...",
    sendMessage: "Nachricht senden",
    sending: "Wird gesendet...",
    messageSent: "Nachricht gesendet!",
    messageConfirmation: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    
    // Footer
    footerDescription: "Professioneller mobiler Autoaufbereitungsservice. Wir bringen die Autowäsche zu Ihnen mit Premium-Ergebnissen.",
    quickLinks: "Schnelllinks",
    servicesAndPricing: "Leistungen & Preise",
    contactUs: "Kontakt",
    allRightsReserved: "Alle Rechte vorbehalten.",
    professionalMobileDetailing: "Professionelle Mobile Autoaufbereitung",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
