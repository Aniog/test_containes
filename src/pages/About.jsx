import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <div className="text-center mb-16">
        <span className="text-[#B8976D] text-xs tracking-[0.2em]">EST. 2018</span>
        <h1 className="heading-serif text-6xl mt-4">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[#6B665F] leading-relaxed space-y-8">
        <p className="text-xl">
          Velmora was born from a simple belief: that true luxury should be accessible, 
          not exclusive. We create demi-fine jewelry that bridges the gap between precious 
          and attainable, designed for the modern woman who appreciates quiet elegance.
        </p>

        <div className="my-12 aspect-video bg-[#F5F1EA]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
            alt="Velmora atelier" 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="heading-serif text-3xl text-[#2C2823] mt-12">The Velmora Difference</h2>
        
        <p>
          Every piece in our collection is thoughtfully designed in our atelier and crafted 
          with the finest materials. We use 18K gold plating over hypoallergenic brass, 
          ensuring our jewelry is both beautiful and kind to sensitive skin.
        </p>

        <p>
          We believe in slow fashion. Our designs are timeless, meant to be worn season after 
          season, year after year. Each piece tells a story—of craftsmanship, of intention, 
          of the woman who wears it.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-12 not-prose">
          {[
            { title: "Ethically Sourced", desc: "We partner with suppliers who share our commitment to responsible practices." },
            { title: "Hand Finished", desc: "Each piece receives individual attention from our skilled artisans." },
            { title: "Designed to Last", desc: "Quality materials and construction ensure your jewelry endures." },
          ].map((item, i) => (
            <div key={i} className="border border-[#E5DFD4] p-6">
              <h4 className="font-medium mb-3">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;