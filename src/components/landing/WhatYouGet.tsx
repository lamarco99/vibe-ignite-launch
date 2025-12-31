import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Access to all courses and masterclasses",
  "Weekly live Q&A calls with experts",
  "Private community chat and networking",
  "Exclusive resources and templates",
  "Monthly challenges and accountability",
  "Direct access to mentors and coaches",
  "Member-only events and workshops",
  "Lifetime access to new content",
];

const WhatYouGet = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              What You Get When You{" "}
              <span className="text-gradient-primary">Join Today</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Everything is designed to help you take action and see real results. 
              No overwhelming content, just what you need to succeed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-card border border-border/50 p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-primary/10 animate-float" />
              <div className="absolute bottom-12 left-8 w-16 h-16 rounded-xl bg-accent/10 animate-float" style={{ animationDelay: "1s" }} />
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mb-6 glow-primary animate-pulse-glow">
                  <span className="font-display text-3xl font-bold text-primary-foreground">2.5K+</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Active Members</h3>
                <p className="text-muted-foreground max-w-xs">
                  Join a growing community of achievers who are taking their skills to the next level
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
