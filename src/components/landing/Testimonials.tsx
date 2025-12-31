import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "This community changed everything for me. The weekly calls alone are worth 10x the price. I've made more progress in 3 months than I did in 2 years on my own.",
    name: "Sarah M.",
    role: "Entrepreneur",
    rating: 5,
  },
  {
    content: "The quality of content and the people here are incredible. Everyone is genuinely supportive and the strategies actually work. Best investment I've made.",
    name: "James K.",
    role: "Freelancer",
    rating: 5,
  },
  {
    content: "I was skeptical at first, but the results speak for themselves. The frameworks taught here helped me 3x my income in just 6 months.",
    name: "Maria L.",
    role: "Coach",
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
            What Our Members{" "}
            <span className="text-gradient-primary">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people who joined 
            the community have to say about their experience.
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

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
