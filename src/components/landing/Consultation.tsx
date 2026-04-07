import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Consultation = () => {
  return (
    <section id="consultation" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Personalized Support</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Book a <span className="text-gradient-primary">Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get personalized guidance and support for your wellness journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-2xl"
        >
          {/* Calendly Embed - Replace CALENDLY_URL with your actual Calendly link */}
          <iframe
            src="https://calendly.com/CALENDLY_URL_PLACEHOLDER"
            title="Book a Consultation"
            className="w-full min-h-[650px] md:min-h-[700px]"
            style={{ border: "none" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Consultation;
