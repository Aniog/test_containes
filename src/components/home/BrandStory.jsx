import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section className="py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-muted relative overflow-hidden"
          >
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc] bench jeweler workspace gold jewelry materials"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora Craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px] sm:text-xs block font-medium">
                Our Philosophy
              </span>
              <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">
                Honest luxury for every day.
              </h2>
            </div>
            
            <p id="story-desc" className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
              Velmora was born from the belief that exceptional quality shouldn't be reserved for special occasions. We design demi-fine jewelry that bridges the gap between fast-fashion and fine jewelry, using precious metals and ethical craftsmanship to create pieces that last a lifetime.
            </p>

            <div className="space-y-4">
              <p className="text-foreground italic font-serif text-lg">
                "We want to dress you in light and confidence."
              </p>
              <footer className="text-[10px] uppercase tracking-widest font-bold">
                — Elena V., Founder
              </footer>
            </div>

            <Link
              to="/about"
              className="btn-outline inline-block px-8 py-3 w-fit"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
