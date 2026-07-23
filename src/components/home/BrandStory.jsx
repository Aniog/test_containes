import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://placehold.co/800x1000/F3EDE4/2C2416?text=Our+Story"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:py-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight mb-6">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <p className="text-bronze leading-relaxed mb-4">
              Founded in Los Angeles, Velmora was born from a simple belief:
              every woman deserves to wear jewelry that feels like a treasure,
              without the treasure-level price tag.
            </p>
            <p className="text-bronze leading-relaxed mb-8">
              We partner with master artisans who have spent decades perfecting
              their craft. Each piece is 18K gold-plated, nickel-free, and
              designed to be worn every single day — from morning coffee to
              midnight celebrations.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-espresso hover:text-bronze transition-colors group"
            >
              Learn More
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
