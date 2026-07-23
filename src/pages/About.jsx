import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-4 text-center">Our Philosophy</p>
        <h1 className="text-center text-5xl mb-12">Quietly Exceptional</h1>
        
        <div className="prose prose-lg max-w-none text-[#6B635E] space-y-6 body-text">
          <p>Velmora was founded on the belief that fine jewelry should feel personal, not precious. We design demi-fine pieces that live with you—through everyday moments and milestone celebrations alike.</p>
          
          <p>Each piece begins with a sketch in our New York studio. We source responsibly, work with skilled artisans, and finish every item by hand. The result is jewelry that feels considered, never ostentatious.</p>
          
          <div className="my-12 py-8 border-y border-[#E5DFD6] grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl text-[#C5A46E] mb-2">18K</div>
              <div className="text-sm tracking-[0.1em] uppercase">Gold Plated</div>
            </div>
            <div>
              <div className="text-3xl text-[#C5A46E] mb-2">5</div>
              <div className="text-sm tracking-[0.1em] uppercase">Artisan Partners</div>
            </div>
            <div>
              <div className="text-3xl text-[#C5A46E] mb-2">30</div>
              <div className="text-sm tracking-[0.1em] uppercase">Day Returns</div>
            </div>
          </div>

          <p>Our materials are chosen for both beauty and longevity. We use hypoallergenic bases and high-quality plating that resists tarnish. Every piece is designed to be worn, loved, and passed on.</p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn">Explore the Collection</Link>
        </div>
      </div>

      <div className="mt-12">
        <img src="https://picsum.photos/id/1015/2000/400" alt="Atelier" className="w-full h-[400px] object-cover" />
      </div>
    </div>
  );
};

export default About;