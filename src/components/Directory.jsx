import React from 'react';
import { strings } from '../strings';
import { generatorsData } from '../data';

export const FeaturedGenerators = () => {
  const s = strings.en.featured;
  const featured = generatorsData.slice(0, 9);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-2">{s.title}</h2>
          <p className="text-[var(--body-text)]">{s.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((gen, idx) => (
            <a key={idx} href={`/generators/${gen.slug}`} className="card-generator group flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="font-bold text-[16px] text-[var(--heading-muted)] group-hover:text-[var(--brand-purple)] transition-colors">
                  {gen.name}
                </span>
                <span className="tag-category">
                  {gen.category}
                </span>
              </div>
              <p className="text-[14px] text-[var(--body-text)] line-clamp-2">
                {gen.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BrowseByCategory = () => {
  const s = strings.en.browseByCategory;
  return (
    <section className="py-20 bg-[var(--bg-light)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-2">{s.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {s.categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="card-generator group flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-light)] text-[var(--brand-purple)] group-hover:bg-[var(--brand-purple)] group-hover:text-white transition-all">
                <IconForCategory categoryId={cat.id} />
              </div>
              <h3 className="text-[16px]">{cat.name}</h3>
              <p className="text-[14px] text-[var(--body-text)]">
                {cat.desc}
              </p>
              <div className="mt-auto pt-2 text-[var(--brand-purple)] opacity-0 group-hover:opacity-100 transition-all transform translate-x-1 group-hover:translate-x-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const IconForCategory = ({ categoryId }) => {
  switch (categoryId) {
    case 'websites':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
    case 'landing-pages':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path><circle cx="12" cy="12" r="3"></circle></svg>;
    case 'portfolios':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
    case 'blogs':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16L4 22Z"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>;
    case 'stores':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>;
    case 'link-in-bio':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
    default:
      return null;
  }
};
