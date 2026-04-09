import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dance.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arcane dance team performing on stage with dramatic purple and blue lighting"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 smoke-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-silver font-body tracking-[0.3em] uppercase text-sm mb-6"
        >
          Official Dance Team
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow-purple gradient-text"
        >
          ARCANE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 italic"
        >
          Where Passion Meets Precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Book Us</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#join">Join the Team</a>
          </Button>
          <Button variant="ghost" size="lg" className="text-silver hover:text-foreground" asChild>
            <a href="#gallery">View Performances</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
