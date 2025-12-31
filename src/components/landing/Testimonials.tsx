import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    content: "I was skeptical about natural healing, but LaMarco's system changed everything. The detox phase alone helped me drop 15 pounds and feel more energized than I have in years.",
    name: "Marcus T.",
    result: "Lost 15 lbs in Phase 1",
    rating: 5,
  },
  {
    content: "The community support is incredible. Everyone is on the same journey, and having that accountability made all the difference. This isn't about quick fixes — it's real transformation.",
    name: "Jasmine W.",
    result: "Hormone Balance Restored",
    rating: 5,
  },
  {
    content: "No prescriptions, no confusion. Just clear guidance and a tribe that actually cares. I finally feel in control of my health for the first time in my life.",
    name: "David L.",
    result: "Complete Lifestyle Change",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Real People.{" "}
            <span className="text-gradient-primary">Real Transformations.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have already taken the first step toward 
            natural healing and life transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-foreground/90 mb-6 flex-1">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.result}</p>
                </div>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
