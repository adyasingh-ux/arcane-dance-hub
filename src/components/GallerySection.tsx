import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import aboutImage from "@/assets/about-dance.jpg";

const images = [
  { src: gallery1, alt: "Stage performance with synchronized formation", category: "Competition" },
  { src: gallery2, alt: "Workshop in neon-lit studio", category: "Workshop" },
  { src: gallery3, alt: "Wedding choreography", category: "Events" },
  { src: aboutImage, alt: "Artistic group performance", category: "Stage Show" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute inset-0 smoke-overlay opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">Our Work</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">Performances & Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-primary text-primary text-xs font-body font-medium tracking-wider uppercase">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
