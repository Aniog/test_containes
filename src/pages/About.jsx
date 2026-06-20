import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-base/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-cream mb-4">Our Story</h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="font-serif text-3xl text-base mb-6">The Beginning</h2>
            <p className="text-base/70 leading-relaxed mb-6">
              Velmora Fine Jewelry was founded in 2020 with a simple mission: to create beautiful, 
              high-quality jewelry that doesn't require a second mortgage. Our founder, a former 
              jewelry buyer with over a decade of experience in the industry, grew frustrated with 
              the gap between luxury quality and accessible pricing.
            </p>

            <h2 className="font-serif text-3xl text-base mb-6 mt-12">Our Philosophy</h2>
            <p className="text-base/70 leading-relaxed mb-6">
              We believe in quiet luxury — pieces that speak softly but leave a lasting impression. 
              Our designs are inspired by the modern woman who values quality over quantity, 
              who appreciates craftsmanship, and who wants jewelry that can be worn from the office 
              to evening events without missing a beat.
            </p>

            <h2 className="font-serif text-3xl text-base mb-6 mt-12">Craftsmanship</h2>
            <p className="text-base/70 leading-relaxed mb-6">
              Each Velmora piece is crafted by skilled artisans using traditional techniques 
              passed down through generations. We use 18K gold plating over hypoallergenic 
              brass, ensuring our jewelry is not only beautiful but also safe for sensitive skin. 
              Our commitment to quality means every piece undergoes rigorous inspection before 
              it reaches you.
            </p>

            <h2 className="font-serif text-3xl text-base mb-6 mt-12">Sustainability</h2>
            <p className="text-base/70 leading-relaxed mb-6">
              We're committed to responsible practices. Our packaging is 100% recyclable, 
              and we work with suppliers who share our values. We believe beautiful jewelry 
              shouldn't come at the expense of our planet.
            </p>

            <div className="mt-16 pt-12 border-t border-base/10">
              <p className="font-serif text-2xl text-base italic text-center">
                "Jewelry should be an expression of who you are, not who you're trying to be."
              </p>
              <p className="text-center text-base/50 mt-4">— Velmora Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;