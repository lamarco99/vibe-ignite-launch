import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Droplets, Sun, Zap } from "lucide-react";
import lifeCapsules from "@/assets/life-capsules.jpeg";

const PREORDER_URL = "https://SHOPIFY_CHECKOUT_LINK_HERE";

const benefits = [
  {
    icon: Droplets,
    title: "Supports Natural Vitality",
    desc: "Sea minerals that nourish and replenish your body at the cellular level.",
  },
  {
    icon: Sun,
    title: "Supports Mineral Balance",
    desc: "A comprehensive complex of essential minerals your body craves daily.",
  },
  {
    icon: Zap,
    title: "Supports Daily Energy",
    desc: "Sustained energy without stimulants — powered by nature's superfood formula.",
  },
];

const highlights = [
  "60 Vegan Capsules per bottle",
  "Thyroid & Immune Support",
  "Detox & Vitality Boost",
  "Nature's Superfood Formula",
  "No fillers, no artificial ingredients",
  "Dietary Supplement",
];

const ProductDetails = () => {
  return (
    <section id="product-details" className="py-24 md:py-32 relative">
      <div className="container px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4 font-medium">
            Premium Formula
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Nourish the Body.{" "}
            <span className="text-gradient-primary">Restore the Balance.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted from sea vegetables, minerals, and natural compounds — SOLIFIC Life Capsules 
            deliver breakthrough nutrition to support your body's innate healing power.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl" />
              <img
                src={lifeCapsules}
                alt="SOLIFIC Life Capsules product details"
                className="relative w-full max-w-sm rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              What's Inside
            </h3>
            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="group px-10 py-7 text-lg bg-gradient-primary glow-primary hover:opacity-90 transition-opacity font-semibold"
              asChild
            >
              <a href={PREORDER_URL} target="_blank" rel="noopener noreferrer">
                Pre-Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-primary/70 mt-3 font-medium">
              Limited first batch available
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
