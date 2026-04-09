const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-lg font-bold gradient-text mb-2">ARCANE</p>
        <p className="text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} Arcane Dance Team. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
