import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-[#F5F2ED] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] text-[#B8865A]">EST. 2018</span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-[0.02em] mt-4 mb-6">
            Jewelry that feels like you.
          </h1>
          <p className="text-lg text-[#F5F2ED]/70 max-w-md mx-auto">
            Thoughtfully designed. Beautifully made. Meant to be worn every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-neutral max-w-none">
          <p className="text-xl leading-relaxed text-[#5C5C5C]">
            Velmora began with a simple belief: fine jewelry shouldn't be reserved for special occasions. 
            We wanted to create pieces that feel precious yet practical—gold that doesn't tarnish after a week, 
            stones that catch the light without catching on everything.
          </p>
          
          <div className="my-12 h-px bg-[#EDE8E0]" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold tracking-[0.05em] mb-4">Our Approach</h3>
              <p className="body-text text-[#5C5C5C]">
                Every piece starts in our small studio. We sketch, prototype, and refine until the proportions 
                feel just right. Then we work with skilled artisans who share our obsession with detail.
              </p>
            </div>
            <div>
              <h3 className="font-semibold tracking-[0.05em] mb-4">What We Use</h3>
              <p className="body-text text-[#5C5C5C]">
                18K gold plating over sterling silver. Hand-selected crystals. No nickel, no cadmium. 
                Everything is hypoallergenic because jewelry should never cause discomfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Thoughtful Design", desc: "Every curve and proportion is considered. Nothing is added without reason." },
              { title: "Lasting Quality", desc: "We use materials that age gracefully. Pieces you can wear for years, not weeks." },
              { title: "Honest Pricing", desc: "Premium materials at accessible prices. No middlemen, no inflated markups." },
            ].map((v, i) => (
              <div key={i}>
                <h4 className="font-semibold tracking-[0.05em] mb-3">{v.title}</h4>
                <p className="text-sm text-[#5C5C5C]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora studio" 
              className="w-full"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="section-title mb-6">Made with intention.</h2>
            <p className="body-text text-[#5C5C5C] mb-8">
              From sketch to finished piece, every Velmora design passes through many hands. 
              We believe the care we put into making is felt by the person who wears it.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;