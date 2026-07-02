import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-base-50">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-xs tracking-[0.15em] text-gold-600">EST. 2018</span>
          <h1 className="font-serif text-5xl tracking-[0.02em] mt-3 mb-6">Our Story</h1>
          <p className="text-lg text-base-700 max-w-2xl mx-auto">
            Velmora was founded on the belief that beautiful, lasting jewelry should be accessible — 
            without compromise.
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto px-6 pb-16 text-[15px] leading-relaxed text-base-700 space-y-6">
          <p>
            We began in a small studio in New York, where our founder, after years of working with 
            traditional fine jewelers, grew frustrated by the gap between mass-produced fashion jewelry 
            and the unattainable prices of solid gold.
          </p>
          <p>
            What if we could create pieces that felt as precious as fine jewelry — but designed for 
            everyday wear? Pieces that wouldn't tarnish after a season, wouldn't irritate sensitive skin, 
            and wouldn't require a special occasion to justify wearing.
          </p>
          <p>
            After two years of research and development with artisans in Italy and Thailand, we launched 
            our first collection: five signature pieces in 18K gold plating, each designed to be worn 
            daily, layered endlessly, and passed down.
          </p>
        </div>

        {/* Values */}
        <div className="bg-base-100 border-y border-base-200 py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Quality First",
                text: "We use only the finest 18K gold plating over solid brass, with hand-set crystals and secure closures. Every piece is tested for durability and comfort.",
              },
              {
                title: "Designed to Last",
                text: "Our pieces are made to be worn every day. We stand behind them with a 30-day return policy and lifetime repair program for manufacturing defects.",
              },
              {
                title: "Thoughtfully Made",
                text: "We work with small family workshops and pay fair wages. Our packaging is recyclable, and we offset our carbon footprint through verified programs.",
              },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl tracking-[0.02em] mb-3">{v.title}</h3>
                <p className="text-sm text-base-700 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <p className="font-serif text-2xl tracking-[0.02em] text-base-800">
            "Jewelry should be worn, not saved for special occasions. 
            It should tell your story every day."
          </p>
          <p className="mt-6 text-sm tracking-[0.05em] text-base-600">— The Velmora Team</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
