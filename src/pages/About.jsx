import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Our Heritage</span>
          <h1 className="heading-serif text-6xl mt-4">The Velmora Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B665F] space-y-8 leading-relaxed">
          <p className="text-xl">Velmora was founded with a singular vision: to create demi-fine jewelry that honors the quiet luxury of everyday elegance.</p>
          
          <p>Our name comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to pause, to appreciate the details, and to choose pieces that will be treasured for years to come.</p>

          <div className="my-12 py-12 border-y border-[#E5E0D8]">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="heading-serif text-4xl mb-2">18K</div>
                <div className="text-sm tracking-wider">Gold Plated</div>
              </div>
              <div>
                <div className="heading-serif text-4xl mb-2">5</div>
                <div className="text-sm tracking-wider">Artisan Partners</div>
              </div>
              <div>
                <div className="heading-serif text-4xl mb-2">30</div>
                <div className="text-sm tracking-wider">Day Returns</div>
              </div>
            </div>
          </div>

          <p>Every piece begins in our studio, where we sketch, prototype, and refine until the design feels inevitable. We work with a small collective of artisans who share our commitment to precision and care.</p>

          <p>Our materials are selected for both beauty and longevity. We use 18K gold plating over solid brass, ensuring each piece maintains its luster through daily wear. All of our jewelry is hypoallergenic and nickel-free.</p>

          <p>We believe that fine jewelry should be worn, not saved for special occasions. Our pieces are designed to become part of your daily rituals — the earrings you reach for every morning, the necklace that completes every outfit.</p>
        </div>
      </div>
    </div>
  );
};

export default About;