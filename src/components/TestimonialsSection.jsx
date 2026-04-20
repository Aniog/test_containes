import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/products';

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-blue-500/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">120,000+ Happy Customers</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Don't take our word for it.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Take theirs.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real reviews from real customers who upgraded their tech with NovaTech.
          </p>
        </div>

        {/* Desktop: all cards */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <TestimonialCard testimonial={testimonials[active]} large />
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="p-2 bg-gray-800 hover:bg-gray-700 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all rounded-full ${
                      i === active ? 'w-6 h-2 bg-blue-400' : 'w-2 h-2 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 bg-gray-800 hover:bg-gray-700 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Overall rating bar */}
        <div className="mt-12 bg-gray-950 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-6xl font-black text-white mb-2">4.8</div>
            <div className="flex justify-center md:justify-start mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-gray-400 text-sm">Based on 11,417 reviews</div>
          </div>
          <div className="flex-1 max-w-sm w-full space-y-2">
            {[
              { stars: 5, pct: 78 },
              { stars: 4, pct: 15 },
              { stars: 3, pct: 5 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 1 },
            ].map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-gray-400 text-xs w-4 text-right">{stars}</span>
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-gray-500 text-xs w-8">{pct}%</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: 'Would Recommend', value: '96%' },
              { label: 'Repeat Buyers', value: '68%' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-900 rounded-2xl p-4">
                <div className="text-2xl font-black text-blue-400 mb-1">{value}</div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial: t, large }) => (
  <div className={`bg-gray-950 border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 ${large ? '' : ''}`}>
    <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
    <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
    <div className="flex items-center gap-3">
      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/20" />
      <div>
        <div className="text-white font-semibold text-sm">{t.name}</div>
        <div className="text-gray-500 text-xs">{t.role}</div>
      </div>
      <div className="ml-auto">
        <div className="flex">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <div className="text-blue-400 text-xs mt-0.5 text-right">{t.product}</div>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
