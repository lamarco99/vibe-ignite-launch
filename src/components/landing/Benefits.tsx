import { motion } from "framer-motion";
import { Video, BookOpen, MessageCircle, Trophy, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Weekly Live Calls",
    description: "Join live Q&A sessions and workshops with experts who've been where you want to go.",
  },
  {
    icon: BookOpen,
    title: "Exclusive Courses",
    description: "Access our full library of step-by-step courses designed to get you results fast.",
  },
  {
    icon: MessageCircle,
    title: "Active Community",
    description: "Connect with like-minded people who support and motivate each other daily.",
  },
  {
    icon: Trophy,
    title: "Proven Frameworks",
    description: "Skip the guesswork with battle-tested strategies that actually work.",
  },
  {
    icon: Zap,
    title: "Actionable Content",
    description: "No fluff. Every piece of content is designed to help you take immediate action.",
  },
  {
    icon: Heart,
    title: "Personal Support",
    description: "Get your questions answered and receive personalized feedback on your progress.",
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
            Everything You Need to{" "}
            <span className="text-gradient-primary">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our community gives you the tools, knowledge, and support system 
            to accelerate your journey and achieve your goals faster.
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
