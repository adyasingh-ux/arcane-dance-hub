import { motion } from "framer-motion";
import aboutImage from "@/assets/about-dance.jpg";
import { Award, Flame, Star, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Awards Won", value: "50+" },
  { icon: Star, label: "Performances", value: "200+" },
  { icon: Flame, label: "Years Active", value: "8+" },
  { icon: Target, label: "Team Members", value: "24" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 smoke-overlay opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">About Arcane</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-lg overflow-hidden box-glow-purple">
              <img
                src={aboutImage}
                alt="Arcane dance team in artistic formation"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Born from Mystery, Driven by Art
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Founded with a vision to push the boundaries of contemporary dance, Arcane has evolved into
              one of the most captivating dance teams in the region. Our name reflects our art — mysterious,
              powerful, and deeply transformative.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              We believe dance is more than movement; it's a language of emotion, a bridge between the
              visible and the hidden. Every performance is a ritual, every stage a sacred space where we
              channel raw energy into breathtaking choreography.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
