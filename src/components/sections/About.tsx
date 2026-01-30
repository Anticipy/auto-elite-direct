import { motion } from "framer-motion";
import { Award, Clock, Leaf, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Quality",
    description: "Premium products and expert techniques for showroom results.",
  },
  {
    icon: Clock,
    title: "Convenient Service",
    description: "We come to your home, office, or anywhere you need us.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Water-saving methods and biodegradable cleaning products.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll make it right, no questions asked.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Car Deserves the Best Care
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We're passionate about cars and dedicated to delivering exceptional mobile
              detailing services. With years of experience and a commitment to excellence,
              we bring the car wash to you.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Our team uses only premium products and proven techniques to ensure your
              vehicle looks its absolute best. From a quick wash to a full detail, we
              treat every car as if it were our own.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <span className="text-3xl font-bold text-primary">5+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <span className="text-3xl font-bold text-primary">500+</span>
                <p className="text-sm text-muted-foreground mt-1">Cars Detailed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
