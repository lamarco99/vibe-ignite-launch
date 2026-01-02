import { motion } from "framer-motion";
import { Check, Leaf } from "lucide-react";

const healingGoals = [
  { goal: "HSV / STDs", desc: "Natural protocols to support your body's healing" },
  { goal: "Cancer", desc: "Holistic approaches to complement your journey" },
  { goal: "Diabetes & High Blood Pressure", desc: "Reset your system without prescriptions" },
  { goal: "Weight Loss", desc: "Shed pounds naturally through detox protocols" },
];

const features = [
  "3-Phase guided system: Detox, Restore, Maintain",
  "Private community of action-takers",
  "Condition-specific reversal plans",
  "Daily prompts to keep you consistent",
  "Live events and challenge access",
  "Direct support from LaMarco Collins",
  "Indigenous medicinal knowledge",
  "No prescriptions. No confusion.",
];

const WhatYouGet = () => {
  return (
    <section id="what-you-get" className="py-24 md:py-32 relative overflow-hidden">
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
              The <span className="text-gradient-primary">3-Phase Path</span> to Natural Healing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No fluff. No hand-holding. Just a proven system for those ready to lock in, 
              build discipline, and transform with us.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
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

          {/* Right side - healing goals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Reversal Plans</h3>
              </div>
              
              <div className="space-y-4">
                {healingGoals.map((item, index) => (
                  <motion.div
                    key={item.goal}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/30"
                  >
                    <p className="font-display font-semibold text-primary mb-1">{item.goal}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-earth border border-accent/20"
            >
              <p className="text-lg italic text-foreground/90 mb-3">
                "Medicine is the blood of Mother Earth — healing the spiritual, emotional, and physical as one."
              </p>
              <p className="text-sm text-accent font-medium">— Indigenous Wisdom</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
