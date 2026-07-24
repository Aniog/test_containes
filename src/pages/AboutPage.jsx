import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-6">
            About Velmora
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-velmora-ink mb-10">
            Jewelry With
            <br />
            <span className="italic">Intention</span>
          </h1>

          <div className="space-y-6 text-velmora-brown leading-relaxed">
            <p>
              Velmora was founded on a simple yet powerful belief: that beautiful,
              well-crafted jewelry should not require a luxury budget. We set out
              to create a new category — demi-fine — bridging the gap between
              disposable costume jewelry and inaccessible fine pieces.
            </p>
            <p>
              Every design begins in our studio, where we draw inspiration from
              architecture, nature, and the quiet elegance of everyday moments.
              We work with skilled artisans who share our commitment to quality,
              using 18K gold-plated brass and carefully sourced crystals.
            </p>
            <p>
              Our pieces are designed to be layered, mixed, and lived in. From
              morning coffee to evening celebrations, Velmora jewelry is made to
              accompany you through every chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-velmora-warm">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '18K', label: 'Gold Plated' },
              { number: '100%', label: 'Nickel-Free' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl text-velmora-ink mb-2">
                  {stat.number}
                </p>
                <p className="text-xs uppercase tracking-widest text-velmora-taupe">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
