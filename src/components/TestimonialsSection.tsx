import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Arcane transformed our wedding into a cinematic experience. Their choreography was pure magic.",
    name: "Sarah & Michael",
    role: "Wedding Clients",
  },
  {
    quote: "The energy they bring to stage is unmatched. Every performance leaves the audience spellbound.",
    name: "James Rivera",
    role: "Event Director, TechSummit",
  },
  {
    quote: "Training with Arcane pushed me beyond my limits. They don't just teach dance — they ignite passion.",
    name: "Priya Chen",
    role: "Workshop Participant",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 smoke-overlay opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">Voices</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-lg p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
