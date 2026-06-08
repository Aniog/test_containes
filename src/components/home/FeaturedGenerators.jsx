import React from 'react';
import { translations } from '../../strings';

const FeaturedGenerators = () => {
  const content = translations.en.featured;

  return (
    <section className="py-[60px] md:py-[80px] bg-[var(--bg-light)]">
      <div className="container-custom">
        <div className="mb-[40px] text-center md:text-left">
          <h2 className="text-[26px] md:text-[32px] mb-[10px]">{content.heading}</h2>
          <p className="text-[14px] md:text-[16px] text-[var(--text-body)]">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {content.items.map((item, index) => {
            const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return (
              <a 
                key={index} 
                href={`/generators/${slug}`}
                className="block bg-white p-[20px] rounded-[3px] border border-[var(--border-card)] hover:border-[var(--brand-purple)] hover:shadow-sm transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-purple)] focus-visible:ring-offset-2"
              >
                <div className="mb-[15px]">
                  <span className="inline-block px-[6px] py-[2px] rounded-[3px] border border-[var(--brand-purple)] font-heading text-[11px] text-[var(--brand-purple)] leading-tight">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-[16px] text-gray-900 mb-[5px] group-hover:text-[var(--brand-purple)] transition-colors">{item.name}</h3>
                <p className="text-[14px] text-[var(--text-body)] line-clamp-1">{item.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGenerators;
