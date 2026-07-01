import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">Est. 2018</span>
          <h1 className="heading-serif text-5xl md:text-6xl mt-3 mb-6">A Quiet Kind of Luxury</h1>
          <p className="text-xl text-velmora-muted max-w-2xl mx-auto">
            Velmora creates demi-fine jewelry for women who appreciate subtlety, craftsmanship, and pieces that feel like an extension of themselves.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80" 
                alt="Velmora founder in the studio"
                className="w-full"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="heading-serif text-3xl mb-6">Our Beginning</h2>
              <div className="space-y-4 text-velmora-muted leading-relaxed">
                <p>
                  Velmora was founded by designer Elena Voss in a small studio in Lisbon. After years working in fine jewelry, she grew frustrated with the gap between mass-produced fashion jewelry and inaccessible fine pieces.
                </p>
                <p>
                  She set out to create something in between — jewelry that feels special enough to mark a moment, but wearable enough for every day. Each design is sketched by hand, then refined through countless iterations until it feels just right.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="heading-serif text-3xl text-center mb-12">What We Believe</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Craft Over Trend", text: "We design for longevity, not seasons. Each piece is meant to be worn for years, becoming part of your story." },
                { title: "Honest Materials", text: "We use 18K gold plating over solid brass — never nickel. Our stones are hand-selected for their natural beauty." },
                { title: "Thoughtful Production", text: "Small batches. Fair wages. No waste. We work with artisans who take pride in every detail." },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <h3 className="heading-serif text-xl mb-3">{value.title}</h3>
                  <p className="text-velmora-muted text-sm leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Atelier */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-serif text-3xl mb-6">The Atelier</h2>
            <p className="text-velmora-muted leading-relaxed mb-8">
              Every Velmora piece begins with a sketch and ends with a final polish by hand. Our small team of goldsmiths works in a sunlit studio where tradition meets modern design. We believe the hands that make your jewelry matter.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
                "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
                "https://images.unsplash.com/photo-1581092918056-0c4c3acd85ca?w=400&q=80",
              ].map((img, i) => (
                <div key={i} className="aspect-square bg-velmora-ivory overflow-hidden">
                  <img src={img} alt="Atelier process" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
