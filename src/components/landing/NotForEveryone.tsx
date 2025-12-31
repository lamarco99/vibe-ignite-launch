import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const notFor = [
  "Looking for hand-holding or to be saved",
  "Expecting overnight miracles without effort",
  "Not ready to commit to the process",
  "Afraid of discipline and accountability",
];

const isFor = [
  "Ready to lock in and do the work",
  "Committed to building real discipline",
  "Open to ancestral healing wisdom",
  "Looking for lasting transformation",
];

const NotForEveryone = () => {
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
            This Community is{" "}
            <span className="text-gradient-accent">Not For Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SOLIFIC is for serious action-takers only. Before you join, 
            make sure this is right for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-card border border-destructive/20"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-destructive">
              This is NOT for you if you are...
            </h3>
            <div className="space-y-4">
              {notFor.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Is For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-card border border-primary/20"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-primary">
              This IS for you if you are...
            </h3>
            <div className="space-y-4">
              {isFor.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotForEveryone;
