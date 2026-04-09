import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Youtube, Facebook, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 smoke-overlay opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">Contact Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={100}
              className="bg-muted/50 border-border/50 focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              maxLength={255}
              className="bg-muted/50 border-border/50 focus:border-primary"
            />
            <Input
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={20}
              className="bg-muted/50 border-border/50 focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              maxLength={1000}
              rows={5}
              className="bg-muted/50 border-border/50 focus:border-primary resize-none"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Let's Create Together</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Whether you're planning an event, looking for performance collaborations, or want to join the team,
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:hello@arcanedance.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">hello@arcanedance.com</span>
              </a>
              <a href="tel:+11234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">+1 (123) 456-7890</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
