import React from 'react';

export default function About() {
  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <h1 className="font-serif text-3xl md:text-4xl text-text-primary text-center">Our Story</h1>
        <div className="max-w-2xl mx-auto mt-10 space-y-6">
          <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
            Velmora was founded with a simple mission: to create demi-fine jewelry that feels as special as the moments you wear it for. We believe luxury should be accessible, personal, and enduring.
          </p>
          <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
            Every piece in our collection is crafted using 18K gold plating on premium base metals, with careful attention to detail and finish. Our designs draw inspiration from art, architecture, and the quiet beauty of everyday life.
          </p>
          <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
            We work with skilled artisans who share our commitment to quality and ethical practices. From sourcing to packaging, we strive to minimize our environmental footprint while delivering an unboxing experience that feels like receiving a gift.
          </p>
          <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
            Whether you are treating yourself or searching for the perfect gift, Velmora is here to help you find jewelry that speaks to your style and becomes part of your story.
          </p>
        </div>
      </div>
    </div>
  );
}
