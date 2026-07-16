import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-16 bg-velmora-bg-alt">
        <div className="container max-w-3xl text-center pt-12">
          <p className="uppercase text-xs tracking-[0.2em] text-velmora-text-muted mb-4">Est. 2019</p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-[-0.02em] mb-6">The Velmora Story</h1>
          <p className="text-lg text-velmora-text-muted max-w-lg mx-auto">
            Quiet luxury, made to be worn every day.
          </p>
        </div>
      </section>

      <div className="container py-16">
        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl mb-4">Our Philosophy</h2>
            </div>
            <div className="md:col-span-3 body-text text-[15px] text-velmora-text-muted space-y-5">
              <p>
                Velmora was founded on a simple idea: that fine jewelry should be accessible without sacrificing quality or integrity.
              </p>
              <p>
                We believe in pieces that feel precious but live in the real world — worn to work, to dinner, to the beach. Jewelry that becomes part of your daily ritual, not something saved for special occasions.
              </p>
              <p>
                Every piece is designed in our studio and crafted with care using responsibly sourced materials. We work with small-batch manufacturers who share our commitment to quality and ethics.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-velmora-border pt-16 mb-20">
          <h3 className="font-serif text-2xl mb-10 text-center">What We Stand For</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Thoughtful Design",
                desc: "Every curve, every clasp, every detail is considered. We design for longevity, not trends.",
              },
              {
                title: "Honest Materials",
                desc: "18K gold plating over solid brass. Hypoallergenic. Nickel-free. No shortcuts.",
              },
              {
                title: "Fair Practices",
                desc: "We partner with artisans who are paid fairly and work in safe conditions. Transparency matters.",
              },
            ].map((v, i) => (
              <div key={i} className="text-center px-4">
                <h4 className="font-serif text-xl mb-3">{v.title}</h4>
                <p className="text-sm text-velmora-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Process */}
        <div className="bg-white py-16 px-8 md:px-16 mb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl mb-8">From Sketch to Skin</h3>
            <div className="space-y-8 text-sm text-velmora-text-muted">
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-velmora-gold w-8 flex-shrink-0">01</span>
                <div>
                  <p className="font-medium text-velmora-text mb-1">Design</p>
                  <p>Our studio begins with hand sketches, refined over weeks until every proportion feels right.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-velmora-gold w-8 flex-shrink-0">02</span>
                <div>
                  <p className="font-medium text-velmora-text mb-1">Prototyping</p>
                  <p>Each piece is cast, plated, and hand-finished in small batches. We test for comfort, durability, and beauty.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-velmora-gold w-8 flex-shrink-0">03</span>
                <div>
                  <p className="font-medium text-velmora-text mb-1">Final Touch</p>
                  <p>Before shipping, every piece is inspected, polished, and packaged with care in our signature keepsake box.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-velmora-text-muted mb-4">Ready to find your piece?</p>
          <Link to="/shop" className="btn btn-primary">Shop the Collection</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
