import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import WhatYouGet from "@/components/landing/WhatYouGet";
import NotForEveryone from "@/components/landing/NotForEveryone";
import DiscoveryCall from "@/components/landing/DiscoveryCall";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <WhatYouGet />
      <NotForEveryone />
      <DiscoveryCall />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
