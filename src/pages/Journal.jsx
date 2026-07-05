import React from 'react';

export default function Journal() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide">The Journal</h1>
          <p className="mt-3 text-sm text-warm-500 tracking-wide">Styling tips, stories, and inspiration</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-warm-200 mb-4 overflow-hidden">
                <div className="w-full h-full bg-warm-200 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-xs tracking-[0.15em] uppercase text-warm-500 mb-2">Style Guide</p>
              <h3 className="font-serif text-xl group-hover:text-gold-600 transition-colors">
                How to Layer Necklaces Like an Editor
              </h3>
              <p className="mt-2 text-sm text-warm-600 leading-relaxed">
                Master the art of mixing lengths, textures, and pendants for a look that feels effortless and elevated.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
