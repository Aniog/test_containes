import React from 'react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-3">Est. 2018 • New York</p>
          <h1 className="font-serif text-5xl tracking-[-0.02em]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="body-text text-xl text-[#6B635E] mb-8">
            Velmora was founded with a simple belief: that jewelry should feel as precious as the moments it marks.
          </p>

          <div className="my-12 aspect-video bg-[#F4F0E9]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80" 
              alt="Velmora studio" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div>
              <h3 className="font-serif text-2xl tracking-[-0.01em] mb-4">The Beginning</h3>
              <p className="body-text text-[#6B635E]">
                What started as a small collection of handcrafted pieces in a Brooklyn studio has grown into a 
                beloved brand known for its commitment to quality, sustainability, and timeless design.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-[-0.01em] mb-4">Our Philosophy</h3>
              <p className="body-text text-[#6B635E]">
                We believe in quiet luxury—the kind that doesn't need to announce itself. Each piece is designed 
                to be worn, loved, and passed down. Not trend-driven, but enduring.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F0E9] p-12 my-12 text-center">
            <p className="font-serif text-2xl tracking-[-0.01em] mb-4">"Jewelry should be an extension of who you are,<br />not a costume you put on."</p>
            <p className="text-sm tracking-[0.1em] text-[#8B7355]">— Founder, Velmora</p>
          </div>

          <div>
            <h3 className="font-serif text-2xl tracking-[-0.01em] mb-4">Craftsmanship</h3>
            <p className="body-text text-[#6B635E]">
              Every Velmora piece is crafted with the finest materials—18K gold plating over sterling silver or 
              hypoallergenic stainless steel, hand-set Swarovski crystals, and secure, comfortable closures. 
              We work with artisans who share our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;