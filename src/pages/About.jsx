import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-velmora-cream">
        <div className="container-velmora text-center">
          <h1
            className="text-5xl md:text-6xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            Our Story
          </h1>
          <div className="hairline w-24 mx-auto mb-8" />
          <p className="text-lg max-w-2xl mx-auto text-velmora-charcoal/80">
            Every piece at Velmora is designed with intention. We believe that jewelry should be accessible,
            wearable, and made to last — not just for the moment, but for a lifetime.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-4">
        <div className="container-velmora max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div>
              <h2
                className="text-3xl font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond', serif: true }}
              >
                Crafted with Intention
              </h2>
              <p className="text-velmora-charcoal/80 mb-4">
                Our journey began with a simple belief: luxury jewelry shouldn't be reserved for special occasions.
                It should be worn, loved, and lived in every day.
              </p>
              <p className="text-velmora-charcoal/80 mb-4">
                Each Velmora piece is crafted with 18K gold plating over sustainable base metals,
                ensuring our designs are hypoallergenic, tarnish-resistant, and beautifully affordable.
              </p>
              <p className="text-velmora-charcoal/80">
                We work directly with artisans who share our commitment to quality and ethical practices,
                ensuring every piece that leaves our studio meets our exacting standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2
                className="text-3xl font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond', serif: true }}
              >
                Designed for Real Life
              </h2>
              <p className="text-velmora-charcoal/80 mb-4">
                We design for the woman who wants her jewelry to keep up with her — whether she's
                at a board meeting, chasing after kids, or dancing at a wedding.
              </p>
              <p className="text-velmora-charcoal/80 mb-4">
                Our demi-fine pieces bridge the gap between precious and practical, offering the look
                and feel of fine jewelry at a price point that makes sense for real life.
              </p>
              <p className="text-velmora-charcoal/80">
                From our studio to your jewelry box, every step is guided by our commitment to
                creating pieces that become part of your story.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://via.placeholder.com/800x600/FFF8F0/1a1a1a?text=Velmora+Craftsmanship"
                alt="Velmora jewelry on model"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8 bg-velmora-cream">
              <h3
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'Cormorant Garamond', serif: true }}
              >
                Quality
              </h3>
              <p className="text-velmora-charcoal/80">
                18K gold plating, sustainable materials, and rigorous quality control ensure every piece meets our standards.
              </p>
            </div>
            <div className="text-center p-8 bg-velmora-cream">
              <h3
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'Cormorant Garamond', serif: true }}
              >
                Accessibility
              </h3>
              <p className="text-velmora-charcoal/80">
                Luxury jewelry at approachable price points, because everyone deserves to feel treasured.
              </p>
            </div>
            <div className="text-center p-8 bg-velmora-cream">
              <h3
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'Cormorant Garamond', serif: true }}
              >
                Sustainability
              </h3>
              <p className="text-velmora-charcoal/80">
                Ethical sourcing, sustainable materials, and responsible production practices guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-velmora-charcoal text-white">
        <div className="container-velmora text-center">
          <h2
            className="text-4xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            Join the Velmora Family
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Discover jewelry that's designed to be treasured, worn, and loved for a lifetime.
          </p>
          <Link
            to="/shop"
            className="btn-velmora bg-white text-velmora-charcoal hover:bg-velmora-cream"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>
    </div>
  );
}
