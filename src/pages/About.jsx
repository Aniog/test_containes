import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#E8E0D5] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-4">Est. 2019</div>
          <h1 className="text-4xl md:text-5xl mb-6">The Velmora Story</h1>
          <p className="text-lg text-[#6B6058]">Jewelry for the life you live, not just the moments you celebrate.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#2C2522] leading-relaxed mb-8">
            Velmora was founded with a simple conviction: beautiful jewelry should be part of everyday life, 
            not locked away for special occasions.
          </p>
          <p className="text-[#6B6058] leading-relaxed mb-6">
            We believe in demi-fine pieces that feel as good as they look—lightweight enough for daily wear, 
            refined enough for any setting. Each design is thoughtfully crafted in small batches, using 
            premium materials that stand the test of time.
          </p>
          <p className="text-[#6B6058] leading-relaxed">
            From our studio to your jewelry box, every piece carries the quiet confidence of something 
            made with care. We hope it becomes part of your story.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F1EDE6] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Timeless Design', desc: 'We create pieces that transcend trends—quietly elegant, endlessly wearable.' },
              { title: 'Thoughtful Craft', desc: 'Every detail is considered. From the clasp to the finish, nothing is left to chance.' },
              { title: 'Honest Value', desc: 'Premium materials at accessible prices. No markups for the sake of luxury theater.' },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                <p className="text-[#6B6058] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Returns Info */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          <div>
            <h3 className="font-serif text-xl mb-4">Shipping</h3>
            <ul className="text-[#6B6058] text-sm space-y-2">
              <li>Free worldwide shipping on all orders</li>
              <li>Orders ship within 1–2 business days</li>
              <li>Tracked delivery via premium carriers</li>
              <li>Signature required on orders over $100</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">Returns</h3>
            <ul className="text-[#6B6058] text-sm space-y-2">
              <li>30-day return window from delivery</li>
              <li>Items must be unworn, in original packaging</li>
              <li>Complimentary return shipping labels</li>
              <li>Refunds processed within 5 business days</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-[#D9D0C4] py-12">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[#6B6058] mb-6">Have a question? We're here to help.</p>
          <a href="mailto:hello@velmora.co" className="btn btn-gold">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default About;
