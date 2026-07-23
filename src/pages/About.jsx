import React from 'react';

const About = () => {
  return (
    <main className="pt-8 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-3">Est. 2018</p>
          <h1 className="serif text-4xl md:text-5xl tracking-[-0.01em]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B6058] leading-relaxed space-y-6">
          <p className="text-xl text-[#2C2522]">
            Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
            not saved for special occasions.
          </p>

          <p>
            We design demi-fine pieces in 18K gold plating that feel as precious as solid gold, 
            but accessible enough to become part of your daily ritual. Each piece is crafted with 
            intention — to be treasured, to be passed down, to mark the quiet moments that make a life.
          </p>

          <div className="my-12 py-8 border-y border-[#D4C9B8]">
            <h3 className="serif text-2xl text-[#2C2522] mb-4">What We Believe</h3>
            <ul className="space-y-3">
              <li>• Jewelry should feel personal, not performative</li>
              <li>• Quality materials matter, even at accessible prices</li>
              <li>• A single well-made piece can become an heirloom</li>
              <li>• Women deserve beauty that doesn't require an occasion</li>
            </ul>
          </div>

          <p>
            Every Velmora piece is designed in our studio and produced by skilled artisans who 
            share our commitment to thoughtful craftsmanship. We use 18K gold plating over 
            hypoallergenic brass, ensuring each piece is as kind to your skin as it is beautiful.
          </p>

          <p>
            Thank you for wearing Velmora. We hope these pieces become part of your story.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#D4C9B8] text-center">
          <p className="text-sm text-[#6B6058]">With gratitude,</p>
          <p className="serif text-xl mt-2">The Velmora Team</p>
        </div>
      </div>
    </main>
  );
};

export default About;
