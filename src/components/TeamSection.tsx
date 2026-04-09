import { motion } from "framer-motion";
import dancer1 from "@/assets/dancer-1.jpg";
import dancer2 from "@/assets/dancer-2.jpg";
import dancer3 from "@/assets/dancer-3.jpg";

const members = [
  { name: "Aria Voss", role: "Lead Choreographer", specialty: "Contemporary & Lyrical", image: dancer1 },
  { name: "Dante Kael", role: "Principal Dancer", specialty: "Hip-Hop & Freestyle", image: dancer2 },
  { name: "Luna Maren", role: "Creative Director", specialty: "Ballet & Modern", image: dancer3 },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">The Artists</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">Our Team</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-body font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-xs font-body mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
