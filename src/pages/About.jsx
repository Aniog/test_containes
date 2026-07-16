import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-3">OUR STORY</div>
          <h1 className="serif text-6xl tracking-[-0.02em]">Velmora</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B655E] leading-relaxed space-y-6">
          <p>
            Founded in 2019, Velmora began with a simple belief: that jewelry should feel personal, not performative. We design demi-fine pieces that become part of your everyday—quiet companions that mark moments, celebrate milestones, and tell your story without saying a word.
          </p>
          <p>
            Each piece is crafted using traditional techniques and responsibly sourced materials. Our 18K gold plating is applied with precision, ensuring lasting beauty and comfort. We believe in thoughtful design over trends, and in pieces that age gracefully alongside you.
          </p>
          <p>
            From our atelier to your jewelry box, every detail is considered. The velvet-lined packaging. The handwritten note. The lifetime guarantee on our plating. These are the small rituals that turn a purchase into something more meaningful.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="text-[#B8976E] mb-2">01</div>
            <div className="font-medium mb-1">Hand-Finished</div>
            <p className="text-[#6B655E]">Every piece is polished and inspected by hand before it leaves our studio.</p>
          </div>
          <div>
            <div className="text-[#B8976E] mb-2">02</div>
            <div className="font-medium mb-1">Ethically Sourced</div>
            <p className="text-[#6B655E]">We work only with suppliers who share our commitment to responsible practices.</p>
          </div>
          <div>
            <div className="text-[#B8976E] mb-2">03</div>
            <div className="font-medium mb-1">Designed to Last</div>
            <p className="text-[#6B655E]">Our plating is tested to withstand daily wear for years to come.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
