import { motion } from "framer-motion";
import { Heart, Building2, Theater, GraduationCap, Sparkles } from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Choreography", description: "Make your first dance unforgettable with custom choreography tailored to your love story." },
  { icon: Building2, title: "Corporate Events", description: "Electrifying performances that captivate audiences and elevate your corporate gatherings." },
  { icon: Theater, title: "Stage Performances", description: "Theatrical dance productions that blend storytelling with breathtaking movement." },
  { icon: GraduationCap, title: "Workshops & Classes", description: "Learn from the best — workshops for all levels from beginner to advanced." },
  { icon: Sparkles, title: "Custom Choreography", description: "Bespoke choreography crafted for music videos, commercials, and special occasions." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-lg p-8 hover:box-glow-purple transition-shadow duration-500 group"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:text-secondary transition-colors duration-300" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
