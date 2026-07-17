import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-8 italic text-center">Our Story</h1>
      <div className="font-sans text-velmora-muted leading-relaxed space-y-6">
        <p>
          Velmora was born from a desire to create high-quality, demi-fine jewelry that speaks to the modern woman. 
          We believe that luxury should be accessible without compromising on craftsmanship or ethics.
        </p>
        <p>
          Each piece in our collection is carefully designed and crafted with 18K gold plating over premium brass, 
          ensuring a long-lasting luster and hypoallergenic properties.
        </p>
      </div>
    </div>
  );
};

export default About;
