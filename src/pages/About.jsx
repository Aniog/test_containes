import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1C1C1C]">
        <img 
          src="https://images.unsplash.com/photo-1602751584552-e17149ad2f83?w=1600&q=80" 
          alt="Velmora atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '-0.01em' }}>
            A Quiet Kind of Luxury
          </h1>
        </div>
      </div>

      <div className="container section max-w-3xl">
        <div className="prose prose-lg mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
          <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
            Velmora was founded with a simple conviction: that beautiful things should be worn, 
            not saved for special occasions.
          </p>

          <div className="body-text space-y-6">
            <p>
              We believe in jewelry that feels precious but lives in the everyday — pieces you reach for 
              without thinking, that become part of your story. Not loud statements, but quiet companions.
            </p>
            
            <p>
              Every piece begins with intention. We work with 18K gold plating over hypoallergenic brass, 
              selected crystals, and hand-finished details. Our designs are timeless, not trendy — 
              silhouettes that will feel as right in ten years as they do today.
            </p>

            <p>
              We design for women who value quality over quantity, who appreciate the weight of something 
              well-made, and who know that true luxury is found in the details you notice only when you 
              look closely.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
            {[
              { title: "Thoughtful Design", desc: "Every curve, every clasp, every proportion considered." },
              { title: "Honest Materials", desc: "18K gold plating. Hypoallergenic brass. No shortcuts." },
              { title: "Made to Last", desc: "Pieces that age gracefully, not pieces that fade." },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="mb-3" style={{ fontSize: '1.125rem' }}>{v.title}</h3>
                <p className="body-text text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Craft */}
      <div className="container section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-muted mb-2">THE PROCESS</div>
            <h2 className="mb-6">How We Make It</h2>
            <div className="body-text space-y-4">
              <p>
                Our pieces are designed in our studio and produced by skilled artisans who share our 
                commitment to quality. Each item goes through multiple stages of finishing to achieve 
                the soft luster that defines Velmora.
              </p>
              <p>
                We test every piece for durability, comfort, and colorfastness. Because we believe 
                that true luxury means never having to think twice about what you're wearing.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-[#F1EDE6]">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80" 
              alt="Craft process" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center pb-16">
        <Link to="/shop" className="btn btn-primary">
          EXPLORE THE COLLECTION
        </Link>
      </div>

      <footer className="footer">
        <div className="container text-center text-xs text-muted">
          © {new Date().getFullYear()} Velmora Fine Jewelry
        </div>
      </footer>
    </div>
  );
};

export default About;
