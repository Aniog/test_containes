import React from 'react';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <h1 className="section-title text-center">Our Story</h1>
        <div className="mt-10 max-w-3xl mx-auto text-brand-muted leading-relaxed space-y-6">
          <p>
            Velmora Fine Jewelry was founded with a singular vision: to create jewelry that feels as good as it looks. We believe that luxury should be accessible, that design should be timeless, and that every piece should tell a story.
          </p>
          <p>
            Our collections are designed in California and crafted in small batches using premium materials. From 18K gold-plated brass to carefully selected crystals, every component is chosen for its quality and beauty.
          </p>
          <p>
            We are committed to sustainable practices, ethical sourcing, and giving back to the communities that inspire us. When you wear Velmora, you are part of a story that values craftsmanship, kindness, and quiet confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
