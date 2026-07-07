import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">Est. 2018</div>
          <h1 className="serif text-6xl mb-6">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[15px] text-[var(--color-taupe)] space-y-6">
          <p>Velmora was founded with a simple conviction: that fine jewelry should feel personal, not precious. We design for women who appreciate quiet luxury—pieces that become part of their daily rhythm, not reserved for special occasions.</p>
          
          <p>Every piece begins in our New York studio, where we obsess over proportion, texture, and the way light catches gold. We source only the finest materials: 18K gold plating over hypoallergenic brass, ethically sourced crystals, and findings that hold up to real life.</p>

          <p>Our name comes from the Latin "vel" (veil) and "mora" (delay)—a nod to the moments we create when jewelry catches someone's eye, when time seems to pause for beauty.</p>
        </div>

        <div className="mt-16 pt-16 border-t grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-medium mb-2">Thoughtful Design</div>
            <p className="text-[var(--color-taupe)]">Each silhouette is refined through dozens of iterations before it reaches you.</p>
          </div>
          <div>
            <div className="font-medium mb-2">Lasting Quality</div>
            <p className="text-[var(--color-taupe)]">Our pieces are made to be worn daily, not tucked away in a drawer.</p>
          </div>
          <div>
            <div className="font-medium mb-2">Conscious Craft</div>
            <p className="text-[var(--color-taupe)]">We work with small ateliers and minimize waste at every step.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;