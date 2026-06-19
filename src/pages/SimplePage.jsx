import React from 'react';

const SimplePage = ({ title }) => {
  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4rem] text-brand-neutral font-medium block">Velmora Fine Jewelry</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">{title}</h1>
          </div>
          
          <div className="aspect-video bg-brand-neutral/5 overflow-hidden relative">
            <img 
              data-strk-img-id={`simple-page-${title.toLowerCase().replace(/\s+/g, '-')}`}
              data-strk-img={`${title} jewelry editorial luxury lifestyle`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt={title}
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </div>

          <div className="space-y-6 text-brand-neutral text-lg font-light leading-relaxed italic">
            <p>
              Understated elegance and timeless design form the core of Velmora. We are currently curating this section to bring you the best editorial experience.
            </p>
            <p>
              Please check back soon for the full story, or explore our latest collections in the meantime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
