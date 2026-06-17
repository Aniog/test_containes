import React from 'react';
import { strings } from '@/lib/strings.en';
import { ChevronRight } from 'lucide-react';

const BrowseByCategory = () => {
  const { en } = strings;
  
  const getIllustration = (id) => {
    // Shared category illustrations
    const illustrations = {
      "websites": (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="11" r="1" fill="currentColor" />
        </svg>
      ),
      "landing-pages": (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="12" y="24" width="16" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
          <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      "portfolios": (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="22" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="6" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="22" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      "blogs": (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <path d="M8 8H32M8 16H32M8 24H22M8 32H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      "stores": (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <path d="M10 8L8 14H32L30 8H10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 14V32H30V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      "link-in-bio": (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="text-brand-purple">
          <rect x="12" y="4" width="16" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="16" y="20" width="8" height="2" rx="1" fill="currentColor" />
          <rect x="16" y="24" width="8" height="2" rx="1" fill="currentColor" />
          <rect x="16" y="28" width="8" height="2" rx="1" fill="currentColor" />
        </svg>
      ),
    };
    return illustrations[id] || null;
  };

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl mb-12 text-center">{en.browseByCategory.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {en.browseByCategory.categories.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`} 
              className="card group flex flex-col items-start"
            >
              <div className="mb-6 group-hover:scale-105 transition-transform">
                {getIllustration(cat.id)}
              </div>
              <h3 className="text-lg text-heading-text mb-2 font-heading">{cat.name}</h3>
              <p className="text-[#636972] text-sm mb-6 flex-grow">{cat.description}</p>
              <div className="flex items-center text-brand-purple font-heading text-xs tracking-wider">
                EXPLORE <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
