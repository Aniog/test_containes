import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#EDE8E0]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <div className="text-white/80 text-xs tracking-[3px] mb-3">SINCE 2018</div>
          <h1 className="heading-serif text-white text-5xl md:text-6xl tracking-[-0.01em]">Our Story</h1>
        </div>
      </div>

      <div className="container max-w-3xl py-16 md:py-20">
        <div className="prose prose-lg max-w-none text-[15px] leading-relaxed text-muted">
          <p className="text-xl text-velmora-text mb-8">
            Velmora was founded with a simple belief: that the jewelry you wear every day should be as beautiful and meaningful as the moments it marks.
          </p>

          <div className="my-12 divider" />

          <h2 className="heading-serif text-3xl text-velmora-text mb-4">The Beginning</h2>
          <p>
            What started as a small collection of hand-finished pieces made in a sunlit studio has grown into a quiet community of women who value intention over trend. We design for the woman who appreciates subtlety, who chooses quality over quantity, and who sees her jewelry as an extension of herself.
          </p>

          <h2 className="heading-serif text-3xl text-velmora-text mt-12 mb-4">Our Approach</h2>
          <p>
            Every piece begins with a sketch and ends with a final polish by hand. We work exclusively with 18K gold plating over solid brass, chosen for its durability and warm tone. Our stones are carefully selected, and each setting is inspected before it leaves our studio.
          </p>
          <p>
            We believe in creating pieces that last—not just in construction, but in the way they feel to wear. Nothing loud. Nothing disposable. Just quiet luxury you can reach for every day.
          </p>

          <h2 className="heading-serif text-3xl text-velmora-text mt-12 mb-4">The Details</h2>
          <ul className="space-y-2">
            <li>18K gold-plated brass, nickel-free and hypoallergenic</li>
            <li>Ethically sourced materials</li>
            <li>Hand-finished in small batches</li>
            <li>Designed to be worn, loved, and passed on</li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border flex flex-col sm:flex-row gap-4">
          <Link to="/shop" className="btn btn-primary">Shop the Collection</Link>
          <Link to="/journal" className="btn btn-outline">Read the Journal</Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-velmora-bg-alt py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered." },
              { title: "Responsible Craft", desc: "We source with care and produce in small runs." },
              { title: "Lasting Beauty", desc: "Jewelry meant to be worn, not stored away." },
            ].map((v, i) => (
              <div key={i}>
                <div className="heading-serif text-2xl mb-3">{v.title}</div>
                <p className="text-sm text-muted max-w-[240px] mx-auto">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
