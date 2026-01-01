import { motion } from "framer-motion";
import { Users, MessageCircle, Target, Calendar, Radio, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Like-Minded Tribe",
    description: "You're not doing this alone. Connect with members walking the same 3-phase path who hold space for your evolution.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Support",
    description: "Get your questions answered, share wins, ask for help — this is where breakthroughs happen.",
  },
  {
    icon: Target,
    title: "Reversal Plans",
    description: "HSV/STDs, Cancer, Diabetes, High Blood Pressure, Weight Loss — specific protocols to help you heal and stay locked in.",
  },
  {
    icon: Calendar,
    title: "Daily Prompts & Check-Ins",
    description: "Designed to keep you consistent, aware, and in motion every single day.",
  },
  {
    icon: Radio,
    title: "Live Events & Challenges",
    description: "Be the first to know when we drop new challenges, go live, or feature a guest speaker.",
  },
  {
    icon: Sparkles,
    title: "Ancestral Wisdom",
    description: "Access indigenous medicinal knowledge passed down through generations — medicine as the blood of Mother Earth.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What You Get{" "}
            <span className="text-gradient-primary">Inside SOLIFIC</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your mind + body with guided healing, proven systems, 
            and high-vibe support. This is where real change begins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
