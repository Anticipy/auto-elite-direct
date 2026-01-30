import { motion } from "framer-motion";
import { MousePointerClick, Calendar, Car } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Choose a Service",
    description:
      "Browse our packages and select the one that fits your needs and budget.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Book a Time",
    description:
      "Pick a convenient date and time. We offer flexible scheduling including weekends.",
  },
  {
    icon: Car,
    step: "03",
    title: "We Come to You",
    description:
      "Our professional team arrives at your location with all equipment needed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Simple as 1-2-3
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your car detailed has never been easier. We handle everything so you
            can relax.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px">
                  <div className="w-full h-full bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
              )}

              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-card flex items-center justify-center shadow-lg border border-border">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
