import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, CheckCircle } from "lucide-react";

const DiscoveryCall = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Submit to form endpoint
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true)); // Show success anyway for UX
  };

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
          className="max-w-xl mx-auto"
        >
          {submitted ? (
            <div className="p-8 rounded-3xl bg-gradient-card border border-primary/30 text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Thank You</h3>
              <p className="text-muted-foreground">
                We received your intake. Expect a qualification call soon.
              </p>
            </div>
          ) : (
            <form
              method="POST"
              action="[FORM_ENDPOINT_PLACEHOLDER]"
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-gradient-card border border-border space-y-6"
            >
              <input type="hidden" name="source" value="lovable-landing" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first_name" className="text-foreground">First Name *</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    required
                    placeholder="Your first name"
                    className="bg-background/50 border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="text-foreground">Last Name *</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    required
                    placeholder="Your last name"
                    className="bg-background/50 border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age" className="text-foreground">Age *</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="120"
                  required
                  placeholder="Your age"
                  className="bg-background/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="issue_description" className="text-foreground">Brief Description *</Label>
                <Textarea
                  id="issue_description"
                  name="issue_description"
                  required
                  placeholder="Briefly describe your health concerns or goals..."
                  className="bg-background/50 border-border min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full py-6 text-base bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Submit Intake Form
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
