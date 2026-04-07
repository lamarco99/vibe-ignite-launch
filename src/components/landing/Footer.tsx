import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-gradient-primary">SOLIFIC</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a 
              href="#product-details"
              onClick={(e) => { e.preventDefault(); document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-primary transition-colors"
            >
              Product
            </a>
            <a 
              href="#consultation"
              onClick={(e) => { e.preventDefault(); document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-primary transition-colors"
            >
              Consultation
            </a>
            <a 
              href="https://www.instagram.com/_iamlamarco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Instagram className="w-4 h-4" />
              @_iamlamarco
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SOLIFIC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
