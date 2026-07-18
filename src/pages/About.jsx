import React from 'react';

const About = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-4">EST. 2018</div>
        <h1 className="serif text-6xl tracking-[0.05em] mb-8">Our Story</h1>
        <div className="text-xl text-[#4A4640] max-w-2xl mx-auto leading-relaxed">
          Velmora was founded with a simple vision: to create demi-fine jewelry that feels as luxurious as fine jewelry, but accessible enough to wear every day.
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" alt="Craftsmanship" className="w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="serif text-3xl tracking-[0.05em] mb-6">The Velmora Difference</h3>
            <div className="space-y-4 text-[#4A4640]">
              <p>Every piece begins with a sketch in our New York studio. We source only the finest materials—18K gold plating over hypoallergenic brass—and work with artisans who share our commitment to quality.</p>
              <p>Our jewelry is designed to be worn daily, to become part of your story. That's why we offer a lifetime guarantee on every piece.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2C2823] text-[#F8F5F1] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="serif text-4xl tracking-[0.05em] mb-8">Crafted with Intention</div>
          <p className="max-w-xl mx-auto text-[#E5DFD3]">From the first sketch to the final polish, each Velmora piece passes through many hands—each one dedicated to creating something beautiful that will last.</p>
        </div>
      </div>
    </div>
  );
};

export default About;