const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="container-custom py-16 md:py-24">
        <h1
          className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          About Velmora
        </h1>
        <div className="hairline mb-8" />
        <div className="max-w-2xl space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Velmora Fine Jewelry was founded with a simple mission: to make beautiful, high-quality jewelry accessible to everyone. 
            We believe that everyone deserves to feel elegant without breaking the bank.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our demi-fine collection features 18K gold-plated pieces crafted with precision and care. 
            Each design is thoughtfully created to complement your everyday style while maintaining the 
            luxurious feel of fine jewelry.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work directly with skilled artisans who share our commitment to quality, sustainability, 
            and ethical practices. Every piece undergoes rigorous quality control to ensure it meets 
            our exacting standards.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
