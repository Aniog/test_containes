import React from 'react';

const About = () => {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-5xl md:text-7xl font-serif">Intention in every detail</h1>
        <p className="text-xl text-zinc-600 font-light leading-relaxed">
          Velmora was born from a desire for jewelry that mirrors the complexity and grace of the modern woman. We believe in the power of slow craftsmanship and the beauty of quiet luxury.
        </p>
        <div className="aspect-[16/9] bg-secondary overflow-hidden">
          <img
            data-strk-img-id="about-hero"
            data-strk-img="jewelry workshop artist hands gold craftsmanship studio"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
