import { motion } from "framer-motion";
import { Check, Sparkles, Car, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Basic Wash + Quick Vacuum",
    price: "€50 – €90",
    description: "Exterior wash and light interior vacuum",
    features: [
      "Full exterior hand wash",
      "Wheel cleaning",
      "Interior quick vacuum",
      "Dashboard wipe down",
    ],
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Basic Interior + Exterior",
    price: "€80",
    description: "Interior cleaning and exterior wash",
    features: [
      "Complete exterior wash",
      "Interior vacuuming",
      "Window cleaning",
      "Air freshener",
    ],
    popular: false,
  },
  {
    icon: Shield,
    title: "Standard Detailing",
    price: "€100 – €200",
    description: "Deeper interior and exterior detailing",
    features: [
      "Full exterior detailing",
      "Deep interior cleaning",
      "Leather conditioning",
      "Engine bay cleaning",
      "Tire dressing",
    ],
    popular: true,
  },
  {
    icon: Crown,
    title: "Full Detailing",
    price: "€400 – €450",
    description: "Complete interior & exterior deep detail",
    features: [
      "Premium hand wash",
      "Clay bar treatment",
      "Paint correction",
      "Interior deep clean",
      "Ceramic coating",
      "Premium protection",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section id="services" className="bg-surface section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Professional Detailing Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your vehicle. All services include our mobile
            convenience – we come directly to you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`relative glass-card p-6 flex flex-col ${
                service.popular
                  ? "ring-2 ring-primary shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
                  : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">
                  {service.price}
                </span>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={service.popular ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Book Now</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
