import React from 'react';
import { strings } from '../../constants/strings';
import { ChevronRight } from 'lucide-react';

const CategoryGrid = () => {
  const { browseByCategory } = strings.en;

  const getIcon = (id) => {
    switch (id) {
      case 'websites': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      );
      case 'landing-pages': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/><path d="M12 18V6"/><path d="m8 10 4-4 4 4"/></svg>
      );
      case 'portfolios': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      );
      case 'blogs': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      );
      case 'stores': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      );
      case 'link-in-bio': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      );
      default: return null;
    }
  };

  return (
    <section className="container-custom py-10 border-t border-[#E2E4E7]">
      <div className="mb-[30px]">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-[5px]">{browseByCategory.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {browseByCategory.categories.map((cat) => (
          <a
            key={cat.id}
            href={`/generators#${cat.slug}`}
            className="group block p-6 bg-white border border-[#C6C9CD] rounded-[3px] card-hover relative"
          >
            <div className="mb-4">
              {getIcon(cat.id)}
            </div>
            <h3 className="text-[14px] font-bold text-[#4B5056] mb-2 group-hover:text-[#8159BB] transition-colors uppercase">
              {cat.name}
            </h3>
            <p className="text-[#636972] text-[13px] mb-4">
              {cat.description}
            </p>
            <div className="absolute top-6 right-6 text-[#E2E4E7] group-hover:text-[#8159BB] transition-colors">
              <ChevronRight size={20} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
