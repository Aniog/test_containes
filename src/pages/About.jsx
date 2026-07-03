import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1600&q=85"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="heading-serif text-white text-5xl tracking-tight">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg max-w-none text-text-muted">
          <p className="text-xl text-text leading-relaxed mb-8">
            Velmora was founded in 2018 with a singular vision: to create jewelry that feels as precious as it is wearable.
          </p>

          <div className="space-y-6 text-base leading-relaxed">
            <p>
              We believe that beautiful things should be part of everyday life — not locked away for special occasions. 
              Our demi-fine pieces are designed to be worn, loved, and passed down.
            </p>
            <p>
              Each collection begins with a feeling: the warmth of morning light on skin, the quiet confidence of a woman 
              who knows her worth, the intimacy of a gift given with intention.
            </p>
            <p>
              We work with skilled artisans who have spent decades perfecting their craft. Our gold is responsibly sourced, 
              our stones are hand-selected, and every piece is finished by hand in small batches.
            </p>
          </div>

          <div className="my-12 py-8 border-y border-border">
            <h3 className="heading-serif text-2xl text-text mb-4">The Velmora Promise</h3>
            <ul className="space-y-2 text-sm">
              <li>• 18K gold plating over solid brass for lasting beauty</li>
              <li>• Hypoallergenic and nickel-free for sensitive skin</li>
              <li>• Designed to be worn daily, for years</li>
              <li>• 30-day returns and lifetime care guidance</li>
            </ul>
          </div>

          <p>
            Thank you for choosing to wear Velmora. We hope our pieces become part of your story.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop">
            <Button variant="gold">Explore the Collection</Button>
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-bg-alt py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Craft', desc: 'Every piece is finished by hand in small batches by artisans we know by name.' },
            { title: 'Care', desc: 'We source responsibly and design for longevity, not trends.' },
            { title: 'Community', desc: 'Our customers are our greatest inspiration. We listen, we learn, we grow together.' },
          ].map((v, i) => (
            <div key={i}>
              <h4 className="heading-serif text-xl mb-3">{v.title}</h4>
              <p className="text-sm text-text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
