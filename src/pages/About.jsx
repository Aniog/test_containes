import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center pt-12 pb-16">
          <div className="text-xs tracking-[0.15em] text-[#B89778] mb-3">EST. 2019 · NEW YORK</div>
          <h1 className="serif text-6xl tracking-[0.02em] mb-6">Our Story</h1>
          <p className="text-xl text-[#6B665F]">Quiet luxury, thoughtfully made.</p>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B665F] space-y-8 leading-relaxed">
          <p>
            Velmora was founded with a simple belief: that fine jewelry should be accessible without compromising on quality or craftsmanship. 
            We create demi-fine pieces that feel as special as they look—designed to be worn every day, treasured for years.
          </p>
          
          <div className="my-12 aspect-[16/9] bg-[#2C2823]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <p>
            Each piece begins in our New York studio, where our design team sketches, prototypes, and refines until every detail feels just right. 
            We work with skilled artisans who share our commitment to quality, using only the finest 18K gold plating and carefully selected crystals.
          </p>

          <p>
            Our collections are intentionally small and considered. We believe in fewer, better things—pieces you'll reach for again and again, 
            that become part of your story. From our signature huggies to statement necklaces, every design is made to layer, mix, and make your own.
          </p>

          <div className="pt-8 border-t border-[#E5DFD3] mt-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="serif text-4xl mb-2">18K</div>
                <div className="text-sm tracking-[0.1em] text-[#B89778]">GOLD PLATING</div>
              </div>
              <div>
                <div className="serif text-4xl mb-2">30</div>
                <div className="text-sm tracking-[0.1em] text-[#B89778]">DAY RETURNS</div>
              </div>
              <div>
                <div className="serif text-4xl mb-2">5</div>
                <div className="text-sm tracking-[0.1em] text-[#B89778]">COUNTRIES SHIPPED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;