import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Circle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating orbs - nature inspired */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-accent/8 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center glow-primary">
              <Circle className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
            </div>
            <span className="font-display text-2xl font-bold tracking-wide">SOLIFIC</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Indigenous Natural Healing
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Heal Without Prescriptions.{" "}
            <span className="text-gradient-primary">Transform Naturally.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Join SOLIFIC — a guided system led by LaMarco Collins helping thousands 
            reclaim their health through the 3-phase path: <span className="text-primary font-medium">Detox</span>, <span className="text-primary font-medium">Restore</span>, <span className="text-primary font-medium">Maintain</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg bg-gradient-primary glow-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="https://www.skool.com/solific-indigenous-healing-8967/about?ref=2de346fab275408bb508fc6120b7ba24" target="_blank" rel="noopener noreferrer">
                Join the Tribe
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-muted-foreground/30 hover:bg-secondary">
              See How It Works
            </Button>
          </motion.div>

          {/* 3 Phase visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8"
          >
            {[
              { phase: "Phase 1", name: "Detox", desc: "Clear the toxins" },
              { phase: "Phase 2", name: "Restore", desc: "Rebuild your body" },
              { phase: "Phase 3", name: "Maintain", desc: "Sustain your health" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.phase}</p>
                  <p className="font-display text-xl font-bold text-primary">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {i < 2 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
