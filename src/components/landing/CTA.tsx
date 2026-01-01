import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Leaf, Circle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center glow-primary">
              <Circle className="w-8 h-8 text-primary-foreground" strokeWidth={3} />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-gradient-primary">Transform Naturally?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join SOLIFIC today and start your journey through the 3-phase path. 
            Detox. Restore. Maintain. Your transformation begins now.
          </p>

          {/* Single Membership Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-gradient-card border border-primary/30 glow-primary max-w-md mx-auto mb-10"
          >
            <p className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wide">Community Membership</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="font-display text-4xl font-bold text-foreground">$25</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Full access to the SOLIFIC community</p>
            
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-4 h-4 text-primary flex-shrink-0" />
                Access to all community content
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                Group discussions & support
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                3-Phase healing protocols
              </li>
            </ul>
            
            <Button 
              size="lg" 
              className="w-full group py-6 text-base bg-gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="https://www.skool.com/solific-indigenous-healing-8967/about?ref=2de346fab275408bb508fc6120b7ba24" target="_blank" rel="noopener noreferrer">
                Join the Community
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Private & Safe</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">Active Community</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm">100% Natural</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
