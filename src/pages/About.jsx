import React from 'react';

export default function About() {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-velmora-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-4 text-center">
          About Us
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-light text-velmora-ink text-center mb-8">
          The Velmora Story
        </h1>

        <div className="space-y-6 text-velmora-stone text-sm md:text-base leading-relaxed">
          <p>
            Velmora was founded in 2023 with a simple mission: to create beautiful, high-quality jewelry 
            that does not require a luxury budget. We believe that every woman deserves to feel elegant 
            every day — not just on special occasions.
          </p>
          <p>
            Our pieces are designed in New York and crafted using 18K gold plating over hypoallergenic 
            base metals. We work with small, family-owned workshops that share our commitment to ethical 
            production and fair wages.
          </p>
          <p>
            Every collection is intentionally small-batch, reducing waste and ensuring that each piece 
            receives the attention it deserves. From sketch to finished product, quality is never 
            compromised.
          </p>
          <p>
            Thank you for letting us be part of your story. Whether you are treating yourself or 
            gifting someone special, we are honored to be chosen.
          </p>
        </div>
      </div>
    </div>
  );
}
