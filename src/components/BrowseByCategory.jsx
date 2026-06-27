import React from 'react';
import { strings } from '../lib/strings';
import { ChevronRight } from 'lucide-react';

const BrowseByCategory = () => {
  const s = strings.en.categories;
  
  const cats = [
    { id: 'websites', ...s.websites },
    { id: 'landing-pages', ...s.landing_pages },
    { id: 'portfolios', ...s.portfolios },
    { id: 'blogs', ...s.blogs },
    { id: 'stores', ...s.stores },
    { id: 'link-in-bio', ...s.link_in_bio },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl text-center md:text-left text-heading-dark mb-10 tracking-tight">
          {s.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`}
              className="group bg-white border border-card-border p-5 rounded-[3px] flex flex-col gap-4 hover:border-brand-purple hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 rounded-full bg-brand-purple/5 flex items-center justify-center text-brand-purple overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                   {cat.id === 'websites' && <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />}
                   {cat.id === 'landing-pages' && <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />}
                   {cat.id === 'portfolios' && <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />}
                   {cat.id === 'blogs' && <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />}
                   {cat.id === 'stores' && <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />}
                   {cat.id === 'link-in-bio' && <circle cx="12" cy="12" r="10" />}
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-heading-dark group-hover:text-brand-purple transition-colors uppercase tracking-wider mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm line-clamp-2 mb-4 h-10">
                  {cat.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-heading font-bold text-brand-purple uppercase tracking-widest mt-auto">
                Discover <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
