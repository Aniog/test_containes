import React from 'react';

const About = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="container max-w-3xl">
        <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-2">Est. 2018</div>
        <h1 className="mb-10">Our Story</h1>

        <div className="space-y-8 body-text text-[#6B6560]">
          <p>
            Velmora was founded with a simple conviction: that beautiful, well-made jewelry 
            should not require compromise. We believe in pieces that feel like heirlooms from 
            the moment you put them on — quiet, considered, and crafted to last.
          </p>

          <p>
            Our name comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to 
            slow down and treasure the small rituals of getting dressed. Each piece is designed 
            in our studio and produced in small batches by artisans who share our commitment 
            to quality over quantity.
          </p>

          <div className="py-8 border-y border-[#E5DFD6] my-10">
            <h3 className="text-[#2C2825] mb-4">What We Stand For</h3>
            <ul className="space-y-3">
              <li><strong className="text-[#2C2825]">Demi-fine, not disposable.</strong> 18K gold plating over hypoallergenic brass. Pieces that won't tarnish after a season.</li>
              <li><strong className="text-[#2C2825]">Designed for real life.</strong> Lightweight enough for everyday. Special enough for the moments that matter.</li>
              <li><strong className="text-[#2C2825]">Transparent pricing.</strong> No markups for the sake of it. We price our pieces so they feel like an investment, not an indulgence.</li>
            </ul>
          </div>

          <p>
            Every Velmora piece comes with a lifetime guarantee against manufacturing defects. 
            If something isn't right, we'll make it right. That's our promise.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-[#E5DFD6]">
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <div className="font-medium mb-2">Studio</div>
              <p className="text-[#6B6560]">New York, NY<br />By appointment only</p>
            </div>
            <div>
              <div className="font-medium mb-2">Contact</div>
              <p className="text-[#6B6560]">
                <a href="mailto:hello@velmora.co">hello@velmora.co</a><br />
                +1 (212) 555-0188
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
