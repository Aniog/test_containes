import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[var(--warm-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden bg-[var(--cream-dark)]"
          >
            <img
              data-strk-img-id="story-img-8f2a9c"
              data-strk-img="[story-subtitle] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:py-8"
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] leading-tight"
            >
              Designed with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-[var(--charcoal)]/60 leading-relaxed max-w-md"
            >
              Velmora was born from a belief that fine jewelry should feel accessible without compromising on craft. Each piece is designed in our studio, cast in recycled metals, and plated in rich 18K gold — made to be worn every day and kept forever.
            </p>
            <p className="mt-4 text-[var(--charcoal)]/60 leading-relaxed max-w-md">
              We work in small batches, partnering with family-run ateliers who share our obsession with detail. No mass production. No compromises.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-[0.15em] text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
