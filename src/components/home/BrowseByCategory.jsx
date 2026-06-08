import React from 'react';
import { ArrowRight, LayoutTemplate, SquareMousePointer, BriefcaseBusiness, PenLine, ShoppingBag, Link2 } from 'lucide-react';
import { translations } from '../../strings';

const iconMap = {
  'websites': <LayoutTemplate className="w-8 h-8 text-[var(--brand-purple)] mb-4" aria-hidden="true" />,
  'landing-pages': <SquareMousePointer className="w-8 h-8 text-[var(--brand-purple)] mb-4" aria-hidden="true" />,
  'portfolios': <BriefcaseBusiness className="w-8 h-8 text-[var(--brand-purple)] mb-4" aria-hidden="true" />,
  'blogs': <PenLine className="w-8 h-8 text-[var(--brand-purple)] mb-4" aria-hidden="true" />,
  'stores': <ShoppingBag className="w-8 h-8 text-[var(--brand-purple)] mb-4" aria-hidden="true" />,
  'link-in-bio': <Link2 className="w-8 h-8 text-[var(--brand-purple)] mb-4" aria-hidden="true" />
};

const BrowseByCategory = () => {
  const content = translations.en.categories;

  return (
    <section className="py-[60px] md:py-[80px] bg-[var(--bg-white)]">
      <div className="container-custom">
        <h2 className="text-[26px] md:text-[32px] mb-[40px] text-center">{content.heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {content.items.map((item, index) => (
            <a 
              key={index} 
              href={`#${item.slug}`}
              className="flex flex-col bg-[var(--bg-light)] p-[30px] rounded-[3px] border border-[var(--border-card)] hover:border-[var(--brand-purple)] transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-purple)] focus-visible:ring-offset-2"
            >
              {iconMap[item.slug]}
              <h3 className="font-heading text-[16px] text-gray-900 mb-[10px] group-hover:text-[var(--brand-purple)] transition-colors">{item.title}</h3>
              <p className="text-[14px] text-[var(--text-body)] mb-[20px] flex-grow">{item.desc}</p>
              <div className="flex items-center text-[var(--brand-purple)] font-semibold text-sm">
                <ArrowRight className="w-4 h-4 ml-auth transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
