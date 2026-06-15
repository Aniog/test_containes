import React from 'react';
import { strings } from '@/lib/generators-data';
import { Globe, Layout, User, FileText, ShoppingCart, Share2, ArrowRight } from 'lucide-react';

const icons = {
  "websites": Globe,
  "landing-pages": Layout,
  "portfolios": User,
  "blogs": FileText,
  "stores": ShoppingCart,
  "link-in-bio": Share2,
};

const BrowseByCategory = () => {
  const t = strings.en.categories;

  return (
    <section className="py-10 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-heading-gray font-heading font-bold text-[26px] md:text-[32px] mb-10 uppercase text-center">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((cat) => {
            const Icon = icons[cat.id];
            return (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                className="group bg-white border border-card-border rounded-[3px] p-8 hover:border-brand-purple hover:shadow-sm transition-all text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={24} aria-hidden="true" />}
                </div>
                <h3 className="text-[#2E2E2F] font-heading font-bold text-[18px] mb-2 uppercase">
                  {cat.name}
                </h3>
                <p className="text-body-gray text-[14px] leading-snug mb-6 flex-grow">
                  {cat.description}
                </p>
                <div className="text-brand-purple flex items-center gap-2 font-heading font-bold uppercase text-[12px]">
                  Browse {cat.name} <ArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
