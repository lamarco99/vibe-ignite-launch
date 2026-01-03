import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    content: "After my HSV-2 diagnosis, I felt hopeless. LaMarco's protocol gave me clarity and a real path forward. Six months in, my outbreaks have completely stopped.",
    name: "Keisha M.",
    result: "HSV-2 Reversal Journey",
    rating: 5,
  },
  {
    content: "I was skeptical about natural healing, but LaMarco's system changed everything. The detox phase alone helped me drop 15 pounds and feel more energized than I have in years.",
    name: "Marcus T.",
    result: "Lost 15 lbs in Phase 1",
    rating: 5,
  },
  {
    content: "Living with HSV-1 for 8 years, I tried everything. This holistic approach finally gave me control back. No more daily antivirals, just real healing.",
    name: "Tanya R.",
    result: "HSV-1 Freedom",
    rating: 5,
  },
  {
    content: "My diabetes was getting worse every year. After following the nutrition and detox protocols, my A1C dropped from 9.2 to 5.8. My doctor was shocked.",
    name: "Robert J.",
    result: "Diabetes Reversal",
    rating: 5,
  },
  {
    content: "The community support is incredible. Everyone is on the same journey, and having that accountability made all the difference. This is real transformation.",
    name: "Jasmine W.",
    result: "Hormone Balance Restored",
    rating: 5,
  },
  {
    content: "Stage 2 cancer diagnosis had me terrified. Combining this protocol with my treatment plan gave me strength I never knew I had. Two years cancer-free now.",
    name: "Patricia L.",
    result: "Cancer Survivor",
    rating: 5,
  },
  {
    content: "HSV had me avoiding relationships for years. After completing the full protocol, I finally have my confidence back. This program saved more than my health.",
    name: "Andre C.",
    result: "HSV Healing Complete",
    rating: 5,
  },
  {
    content: "Type 2 diabetes ran in my family. I refused to accept that fate. This system taught me how to heal my body naturally. Off all medications now.",
    name: "Denise H.",
    result: "Medication-Free Diabetic",
    rating: 5,
  },
  {
    content: "No prescriptions, no confusion. Just clear guidance and a tribe that actually cares. I finally feel in control of my health for the first time in my life.",
    name: "David L.",
    result: "Complete Lifestyle Change",
    rating: 5,
  },
  {
    content: "After breast cancer treatment, I needed to rebuild my immune system. This protocol helped me detox, heal, and feel stronger than before my diagnosis.",
    name: "Monica S.",
    result: "Post-Cancer Recovery",
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full p-6 rounded-2xl bg-gradient-card border border-border/50 flex flex-col"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
