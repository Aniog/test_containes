import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-14 md:py-0 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1000&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-1/2 flex items-center bg-velmora-sand md:px-14 lg:px-20 py-12 md:py-20"
          >
            <div className="max-w-md">
              <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso leading-tight mb-6">
                Jewelry made for
                <br />
                <span className="italic font-normal">real life</span>
              </h2>
              <p className="text-sm md:text-base text-velmora-brown leading-relaxed mb-6">
                Velmora was born from a belief that luxury should feel effortless. Each piece is designed in small batches using 18K gold plating and responsibly sourced materials — so you can wear them daily, stack them freely, and treasure them always.
              </p>
              <p className="text-sm md:text-base text-velmora-brown leading-relaxed mb-8">
                From morning coffee to evening celebrations, our jewelry moves with you. No rules. No occasions required.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-espresso border-b border-velmora-espresso pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Discover Our Collection
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
