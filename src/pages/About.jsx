import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#2C2522]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-white/70 text-sm tracking-[0.2em] mb-4">EST. 2018</p>
          <h1 className="serif text-white text-5xl md:text-6xl tracking-[0.05em]">Our Story</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none text-velmora-text-light">
          <p className="text-xl text-velmora-text leading-relaxed mb-8">
            Velmora was founded with a simple conviction: that demi-fine jewelry should feel as 
            precious as fine jewelry, without the unattainable price tag.
          </p>

          <h2 className="serif text-3xl text-velmora-text tracking-[0.03em] mt-12 mb-6">The Beginning</h2>
          <p className="mb-6">
            Our founder, a former fine jewelry designer, grew frustrated by the gap between 
            mass-produced fashion jewelry and heirloom-quality pieces. She set out to create 
            something in between—beautiful, well-made jewelry that could be worn every day, 
            not just on special occasions.
          </p>
          <p className="mb-6">
            Working with skilled artisans in small workshops, we developed a collection of 
            pieces plated in 18K gold over hypoallergenic brass. Each design is tested for 
            comfort, durability, and timeless appeal.
          </p>

          <h2 className="serif text-3xl text-velmora-text tracking-[0.03em] mt-12 mb-6">Our Philosophy</h2>
          <p className="mb-6">
            We believe jewelry should be personal. A pair of earrings you reach for every morning. 
            A necklace that becomes part of your signature look. Pieces that feel like an extension 
            of who you are.
          </p>
          <p className="mb-6">
            That's why we design with restraint. Clean lines, thoughtful proportions, and a 
            warm gold tone that flatters every skin tone. Nothing loud. Nothing that will go 
            out of style next season.
          </p>

          <div className="my-12 p-8 bg-velmora-bg border border-velmora-border">
            <p className="italic text-center text-velmora-text">
              "We don't chase trends. We create pieces you'll still love wearing in ten years."
            </p>
          </div>

          <h2 className="serif text-3xl text-velmora-text tracking-[0.03em] mt-12 mb-6">Craftsmanship</h2>
          <p className="mb-6">
            Every Velmora piece is plated with care in small batches. We use a thick layer of 
            18K gold to ensure longevity, and we rigorously test each design for tarnish 
            resistance and everyday wear.
          </p>
          <p className="mb-6">
            Our packaging is minimal but considered—designed to protect your jewelry and to 
            be kept. Because the unboxing should feel as special as the piece inside.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-primary">
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>

      {/* Values */}
      <section className="bg-velmora-surface border-y border-velmora-border py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Ethically Sourced", desc: "We work only with suppliers who share our commitment to responsible practices." },
            { title: "Small Batch", desc: "Limited production runs ensure quality control and reduce waste." },
            { title: "Designed to Last", desc: "Thick plating and quality materials mean your pieces will endure." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="serif text-xl tracking-[0.05em] mb-3">{v.title}</h3>
              <p className="text-sm text-velmora-text-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;