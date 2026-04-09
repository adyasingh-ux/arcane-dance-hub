import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const criteria = [
  "Minimum 2 years of dance training",
  "Passion for contemporary and fusion styles",
  "Commitment to weekly rehearsals",
  "Team-oriented mindset",
];

const JoinSection = () => {
  return (
    <section id="join" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 smoke-overlay" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">Auditions Open</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-6">Join Arcane</h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
                Think you have what it takes? We're looking for passionate dancers who live and breathe
                the art. Auditions are held quarterly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10 text-left"
            >
              {criteria.map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80 text-sm font-body">{c}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Apply Now</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
