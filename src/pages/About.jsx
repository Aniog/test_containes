import React from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f6f4f0]">
      <Nav />
      <main className="section-container py-20">
        <h1 className="font-serif text-3xl text-[#1c1917] md:text-5xl">Our Story</h1>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-xl">
            <img src="https://placehold.co/900x1125/f6f4f0/1c1917?text=Velmora+Story&font=playfair-display" alt="Velmora story" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm leading-relaxed text-[#5c5650] md:text-base">
              Velmora was founded with a clear intention: to create jewelry that feels luxurious without being unapproachable. We design demi-fine pieces in warm 18K gold plating, using hypoallergenic materials and thoughtful craftsmanship.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5c5650] md:text-base">
              Every Velmora piece is made to be worn, loved, and passed down. From our studio to your jewelry box, we keep quality accessible without compromise.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
