import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#EDE7DE] py-20 md:py-28">
        <div className="container text-center max-w-3xl">
          <div className="uppercase tracking-[4px] text-xs text-gold mb-4">EST. 2019</div>
          <h1 className="mb-6">Quietly Exceptional</h1>
          <p className="text-lg body-muted max-w-xl mx-auto">
            Velmora creates demi-fine gold jewelry for women who appreciate subtlety over spectacle. 
            Each piece is designed to be worn daily, treasured for years, and passed down with intention.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="max-w-3xl mx-auto">
          {/* Our Philosophy */}
          <div className="mb-16">
            <h2 className="mb-6">Our Philosophy</h2>
            <div className="body-text body-muted space-y-5 text-[15px]">
              <p>
                We believe that true luxury doesn't announce itself. It doesn't need a logo or a price tag 
                to be recognized. It simply feels right when you wear it.
              </p>
              <p>
                That's why we design pieces that disappear into your life — not because they're forgettable, 
                but because they become part of who you are. The necklace you reach for every morning. 
                The earrings you never take off.
              </p>
              <p>
                Our jewelry is plated in 18K gold over hypoallergenic brass, chosen for its durability 
                and warmth. We use only cubic zirconia for our crystal accents — never glass, never plastic. 
                Every detail is considered.
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="mb-16">
            <h2 className="mb-6">The Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Design", desc: "Each piece begins with hand-drawn sketches in our studio. We iterate until the proportions feel exactly right." },
                { num: "02", title: "Craft", desc: "Our pieces are cast and plated by artisans who have spent decades perfecting their technique." },
                { num: "03", title: "Finish", desc: "Every item is hand-finished, inspected, and packaged in our signature keepsake box." }
              ].map((step) => (
                <div key={step.num}>
                  <div className="text-gold text-sm tracking-[3px] mb-2">{step.num}</div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="body-muted text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16 pt-8 border-t border-border">
            <h2 className="mb-8">What We Value</h2>
            <div className="space-y-6">
              {[
                { title: "Honest Materials", text: "We use 18K gold plating over hypoallergenic brass. No nickel. No shortcuts." },
                { title: "Thoughtful Production", text: "Small batches. No overproduction. We make what we need, when we need it." },
                { title: "Timeless Design", text: "We don't follow trends. We design pieces that will still feel right in ten years." },
                { title: "Fair Pricing", text: "Premium quality at accessible prices. $30–$120. No markups for the sake of it." }
              ].map((v, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-px bg-border flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">{v.title}</h4>
                    <p className="body-muted text-sm">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Returns Info */}
          <div className="bg-[#F5F2ED] p-8 md:p-10">
            <h3 className="mb-6">Shipping & Returns</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
              <div>
                <div className="font-medium mb-2">Shipping</div>
                <ul className="body-muted space-y-1">
                  <li>• Complimentary worldwide shipping</li>
                  <li>• Ships within 1–2 business days</li>
                  <li>• Tracked delivery on all orders</li>
                  <li>• Gift wrapping available at checkout</li>
                </ul>
              </div>
              <div>
                <div className="font-medium mb-2">Returns</div>
                <ul className="body-muted space-y-1">
                  <li>• 30-day returns for unworn items</li>
                  <li>• Original packaging required</li>
                  <li>• Free return shipping labels (US)</li>
                  <li>• Exchanges processed within 5 days</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="body-muted mb-4">Have questions? We're here to help.</p>
            <a href="mailto:hello@velmora.com" className="btn btn-gold-outline">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
