import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        <p className="text-xs tracking-[0.2em] text-[#B89778] mb-3">EST. 2018</p>
        <h1 className="serif text-5xl md:text-6xl tracking-wide mb-6">Quiet luxury,<br />worn daily.</h1>
        <p className="text-lg text-[#6B645C] max-w-lg mx-auto">
          Velmora creates demi-fine gold jewelry for women who value intention over excess.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora founder in atelier"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="serif text-3xl tracking-wide mb-6">The Beginning</h2>
            <div className="space-y-4 text-[#6B645C] leading-relaxed">
              <p>
                Velmora was founded by Elena Voss after years of searching for jewelry that felt 
                both special and wearable. She wanted pieces that could be worn every day — 
                not locked away for special occasions.
              </p>
              <p>
                Working with master artisans in small workshops, Elena developed a collection 
                using 18K gold plating over solid brass, chosen for its warmth, durability, 
                and hypoallergenic properties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F1EDE6] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="serif text-3xl tracking-wide text-center mb-12">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Less, but better", text: "We design fewer pieces, each with purpose. Every detail is considered." },
              { title: "Made to last", text: "Quality materials and thoughtful construction mean our jewelry becomes part of your story." },
              { title: "For everyone", text: "Demi-fine doesn't mean disposable. We believe beautiful jewelry should be accessible." },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="font-medium text-lg mb-3 tracking-wide">{value.title}</h3>
                <p className="text-[#6B645C] text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Craft */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#B89778] mb-2">THE PROCESS</p>
          <h2 className="serif text-4xl tracking-wide">How It's Made</h2>
        </div>
        <div className="prose prose-neutral max-w-none text-[#6B645C] leading-relaxed space-y-6 text-[15px]">
          <p>
            Each Velmora piece begins with a sketch and a conversation. Our designs are refined 
            over weeks, not rushed into production. We work with small family-run workshops that 
            share our commitment to quality over quantity.
          </p>
          <p>
            The 18K gold plating process takes multiple steps — cleaning, plating, and finishing — 
            to achieve the warm, rich tone that distinguishes our collection. Every crystal is 
            hand-selected. Every clasp is tested.
          </p>
          <p>
            We don't chase trends. We create pieces we believe will still feel relevant in ten years.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#D4CFC6] py-16 text-center">
        <Link to="/shop">
          <Button variant="accent">Explore the Collection</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
