import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="text-xs tracking-[0.2em] text-[#9A9288] mb-3">EST. 2019</div>
        <h1 className="heading-serif text-4xl md:text-5xl mb-6">Jewelry for the life you live.</h1>
        <p className="text-lg text-[#5C5752] max-w-2xl mx-auto">
          Velmora creates demi-fine jewelry that bridges the gap between fine and fashion—beautiful enough to treasure, accessible enough to wear every day.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Thoughtful Design", desc: "Every piece is designed with intention—meant to layer, stack, and become part of your daily ritual." },
            { title: "Quality Materials", desc: "We use 18K gold plating over solid brass, paired with hypoallergenic posts and hand-selected crystals." },
            { title: "Made to Last", desc: "Our pieces are built for real life. With proper care, they will stay beautiful for years to come." },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <h3 className="heading-serif text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-[#5C5752] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none text-[#5C5752]">
          <p className="text-lg leading-relaxed">
            Velmora began in a small studio in Brooklyn, where our founder, a former fine jewelry designer, grew frustrated with the choice between pieces that were too precious to wear daily and pieces that lacked the quality she craved.
          </p>
          <p className="mt-6 leading-relaxed">
            She set out to create jewelry that felt special without being intimidating—pieces that could be worn to the office, to dinner, to the beach. Jewelry that layered beautifully, felt comfortable against the skin, and didn't require special occasions to justify wearing.
          </p>
          <p className="mt-6 leading-relaxed">
            Today, Velmora is worn by women across the world who share that same philosophy: that beauty belongs in the everyday.
          </p>
        </div>
      </section>

      {/* Shipping & Returns Info */}
      <section className="border-t border-[#E5DFD6] py-12">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-10 text-sm">
          <div>
            <h3 className="font-medium tracking-[0.1em] mb-4">SHIPPING</h3>
            <ul className="space-y-2 text-[#5C5752]">
              <li>Free worldwide shipping on all orders</li>
              <li>Orders ship within 1-2 business days</li>
              <li>Express shipping available at checkout</li>
              <li>Tracked delivery on every order</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium tracking-[0.1em] mb-4">RETURNS</h3>
            <ul className="space-y-2 text-[#5C5752]">
              <li>30-day returns on unworn items</li>
              <li>Free return shipping within the US</li>
              <li>International returns accepted</li>
              <li>Exchanges available for size or color</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1C1917] text-[#F5F2ED] py-16 text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="heading-serif text-2xl mb-3">Have a question?</h2>
          <p className="text-[#9A9288] mb-6 text-sm">We're here to help. Reach out anytime.</p>
          <a href="mailto:hello@velmora.com" className="btn btn-outline-gold inline-block">
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
