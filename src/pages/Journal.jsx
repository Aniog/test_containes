import React from 'react';

export default function Journal() {
  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <h1 className="font-serif text-3xl md:text-4xl text-text-primary text-center">Journal</h1>
        <p className="font-sans text-sm text-text-secondary text-center mt-4 max-w-md mx-auto">
          Stories, styling tips, and behind-the-scenes looks at how we craft our collections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-hairline">
              <div className="aspect-[16/10] bg-hairline" />
              <div className="p-5">
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold">Style Guide</p>
                <h3 className="font-serif text-lg text-text-primary mt-2">
                  How to Layer Necklaces Like a Pro
                </h3>
                <p className="font-sans text-sm text-text-secondary mt-2 leading-relaxed">
                  Discover the art of layering delicate chains for an effortlessly chic look.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
