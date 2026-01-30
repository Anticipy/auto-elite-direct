import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-car-detailing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional car detailing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-tight section-padding pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Mobile Car Detailing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance"
          >
            Professional Mobile Car Detailing{" "}
            <span className="text-primary">at Your Location</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl"
          >
            Interior & exterior cleaning — fast, reliable, affordable. We come to you,
            wherever you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Phone className="w-5 h-5" />
                Book Now
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#services">
                View Services
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 mt-12 pt-8 border-t border-border/30"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Happy Customers</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">5★</span>
              <span className="text-sm text-muted-foreground">Average Rating</span>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="flex-col hidden sm:flex">
              <span className="text-3xl font-bold text-foreground">100%</span>
              <span className="text-sm text-muted-foreground">Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
