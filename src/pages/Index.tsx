import Hero from "@/components/landing/Hero";
import ProductDetails from "@/components/landing/ProductDetails";
import Testimonials from "@/components/landing/Testimonials";
import Consultation from "@/components/landing/Consultation";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProductDetails />
      <Testimonials />
      <Consultation />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
