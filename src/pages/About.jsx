import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16 text-center">
        <h1 className="serif text-6xl mb-8">Our Story</h1>
        <div className="prose prose-neutral max-w-none text-[#6B665F] leading-relaxed text-[15px]">
          <p className="mb-6">
            Velmora was founded with a simple belief: that jewelry should feel personal, 
            not performative. We design demi-fine pieces that sit quietly on the body, 
            becoming part of your daily rhythm rather than demanding attention.
          </p>
          <p className="mb-6">
            Every piece begins in our studio, sketched by hand and refined through 
            countless iterations. We source only the finest materials—18K gold plating 
            over sterling silver or brass—and work with artisans who share our commitment 
            to quality and care.
          </p>
          <p>
            Our collections are intentionally small. We believe in fewer, better things: 
            pieces you'll reach for every day, that age gracefully with you, and that 
            might one day be passed on. This is jewelry meant to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <div className="aspect-[16/10] bg-[#F1EDE5]">
          <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=90" alt="Atelier" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[16/10] bg-[#F1EDE5]">
          <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=90" alt="Craftsmanship" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-center py-16 border-t border-[#E5DFD3]">
        <Link to="/shop" className="btn btn-primary">Explore the Collection</Link>
      </div>
    </div>
  );
};

export default About;