import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1C1B18]">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-[#BFA46F] text-xs tracking-[3px]">EST. 2018</span>
          <h1 className="font-serif text-5xl md:text-6xl tracking-[2px] text-[#F8F5F0] mt-2">Our Story</h1>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none text-[#4A463F] text-[15px] leading-relaxed">
          <p className="text-xl text-[#1C1B18] font-serif tracking-[0.5px] mb-8">
            Velmora was founded with a simple conviction: that fine jewelry should feel precious, not precious about itself.
          </p>

          <p>
            We believe in quiet luxury — the kind that doesn't announce itself but is felt in the weight of a piece, the warmth of its tone, the way it becomes part of your daily ritual.
          </p>

          <p>
            Our demi-fine collection is crafted from 18K gold plated brass over a hypoallergenic core. Each piece is designed in our studio and finished by hand. We source responsibly, plate generously, and price fairly — because beauty shouldn't require compromise.
          </p>

          <div className="my-12 border-l-2 border-[#BFA46F] pl-6 text-[#1C1B18]">
            "We don't make jewelry for special occasions. We make jewelry for special women — who happen to live ordinary, beautiful lives."
          </div>

          <p>
            Every Velmora piece is meant to be worn, loved, and passed down. Not locked away. Not saved for someday.
          </p>

          <p>
            Thank you for wearing us close.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4C9B8] flex flex-col sm:flex-row gap-4">
          <Link to="/shop">
            <Button>SHOP THE COLLECTION</Button>
          </Link>
          <Link to="/journal">
            <Button variant="outline">READ THE JOURNAL</Button>
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#EDE8DF] py-16">
        <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Responsible Sourcing', desc: 'We work with suppliers who share our commitment to ethical practices and traceability.' },
            { title: 'Hand-Finished', desc: 'Every piece passes through multiple hands before it reaches yours. Quality is personal.' },
            { title: 'Designed for Life', desc: 'From morning coffee to evening events — pieces that move with you, not against you.' },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-xl tracking-[1px] mb-3">{v.title}</h3>
              <p className="text-sm text-[#4A463F]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
