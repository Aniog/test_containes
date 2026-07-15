import React from 'react';

const About = () => {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-serif mb-12">The Velmora Story</h1>
      <div className="space-y-8 text-stone-600 font-sans leading-relaxed text-lg text-left">
        <p>
          Founded on the principle that beauty lies in the details, Velmora was established to redefine modern jewelry. We seek to create pieces that act as talismans – subtle, powerful, and deeply personal.
        </p>
        <p>
          Our journey began in a small workshop where we obsessed over the perfect shade of gold and the weight of a necklace against the collarbone. Today, that same obsession drives every collection we release.
        </p>
        <div className="aspect-video bg-stone-100 my-16 overflow-hidden">
          <img
            data-strk-img-id="about-image"
            data-strk-img="jewelry studio workshop gold craftsmanship"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            alt="Jewelry workshop"
          />
        </div>
        <p>
          We are committed to ethical craftsmanship, using recycled materials whenever possible and ensuring our partners adhere to the highest standards of social and environmental responsibility.
        </p>
      </div>
    </div>
  );
};

export default About;
