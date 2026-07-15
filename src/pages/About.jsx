import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-velmora-surface py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-2">Est. 2018</div>
          <h1 className="serif text-4xl md:text-5xl mb-6">Our Story</h1>
          <p className="text-lg text-velmora-text-muted">
            Quiet luxury, thoughtfully made.
          </p>
        </div>
      </div>

      <div className="container section max-w-3xl">
        <div className="prose prose-lg text-velmora-text-muted space-y-6 text-[15px] leading-relaxed">
          <p>
            Velmora was founded with a simple conviction: that beautiful, well-made jewelry should not require compromise.
          </p>
          <p>
            We believe in demi-fine pieces that feel as luxurious as solid gold — but at a price that invites you to collect, layer, and gift without hesitation. Every design begins with intention: timeless silhouettes, warm gold tones, and details that reward close inspection.
          </p>
          <p>
            Our pieces are crafted in small batches using 18K gold plating over premium brass, finished by hand, and tested for everyday wear. We source responsibly and design for longevity, so each piece can become part of your story for years to come.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-velmora-border">
          <div>
            <div className="serif text-xl mb-3">Timeless Design</div>
            <p className="text-sm text-velmora-text-muted leading-relaxed">
              We design for the long term. Pieces that feel as relevant in five years as they do today.
            </p>
          </div>
          <div>
            <div className="serif text-xl mb-3">Thoughtful Craft</div>
            <p className="text-sm text-velmora-text-muted leading-relaxed">
              Every detail is considered. From the weight of a clasp to the warmth of the gold tone.
            </p>
          </div>
          <div>
            <div className="serif text-xl mb-3">Accessible Luxury</div>
            <p className="text-sm text-velmora-text-muted leading-relaxed">
              Premium materials and finishing at a price that lets you build a collection, not just a single piece.
            </p>
          </div>
        </div>

        {/* Shipping & Returns Info */}
        <div className="mt-16 pt-12 border-t border-velmora-border">
          <h2 className="serif text-2xl mb-8">Shipping & Returns</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
            <div>
              <div className="font-medium mb-2 tracking-widest text-xs">SHIPPING</div>
              <ul className="space-y-1 text-velmora-text-muted">
                <li>Free worldwide shipping on all orders</li>
                <li>Standard delivery: 5–10 business days</li>
                <li>Express options available at checkout</li>
                <li>Tracked shipping on every order</li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2 tracking-widest text-xs">RETURNS</div>
              <ul className="space-y-1 text-velmora-text-muted">
                <li>30-day returns from delivery date</li>
                <li>Items must be unworn with tags attached</li>
                <li>Original packaging required</li>
                <li>Refunds processed within 5 business days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 pt-12 border-t border-velmora-border text-center">
          <p className="text-velmora-text-muted mb-4">Have a question? We're here to help.</p>
          <a href="mailto:hello@velmora.com" className="btn btn-gold">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
