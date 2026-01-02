import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const DiscoveryCall = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Personal Guidance</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Request a <span className="text-gradient-primary">Discovery Call</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Submit this intake form. You'll receive a qualification call before a discovery call is scheduled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-2xl"
        >
          <iframe
            id="JotFormIFrame-260014199299059"
            title="Discovery Call Intake Form"
            src="https://form.jotform.com/260014199299059"
            className="w-full min-h-[700px] md:min-h-[650px]"
            style={{ border: "none" }}
            allow="geolocation; microphone; camera; fullscreen"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
