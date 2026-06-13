import strings from '../../data/strings';
import { categories } from '../../data/generators';

const categoryIcons = {
  globe: (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <ellipse cx="24" cy="24" rx="10" ry="20" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <line x1="24" y1="4" x2="24" y2="44" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <path d="M6 16 Q24 12 42 16" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M6 32 Q24 36 42 32" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  ),
  target: (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="24" cy="24" r="12" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="24" cy="24" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="24" cy="24" r="2" fill="#8159BB" opacity="0.5" />
    </svg>
  ),
  briefcase: (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="36" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <rect x="18" y="8" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <circle cx="24" cy="24" r="2" fill="#8159BB" opacity="0.5" />
    </svg>
  ),
  'pen-tool': (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8 L32 28 L24 24 L16 28 Z" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinejoin="round" />
      <circle cx="24" cy="32" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="24" y1="35" x2="24" y2="42" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
    </svg>
  ),
  'shopping-bag': (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16 L8 40 L40 40 L38 16 Z" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M16 16 C16 10 20 6 24 6 C28 6 32 10 32 16" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  ),
  link: (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 28 L14 34 C10 38 4 34 8 30 L14 24" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
      <path d="M28 20 L34 14 C38 10 34 4 30 8 L24 14" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
      <line x1="18" y1="30" x2="30" y2="18" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
    </svg>
  ),
};

const ArrowRight = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto shrink-0">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrowseByCategory = () => {
  const { browseByCategory } = strings.en;

  return (
    <section className="py-10 md:py-[40px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0 mb-3">
            {browseByCategory.heading}
          </h2>
          <p className="text-body text-body max-w-[480px] mx-auto">
            {browseByCategory.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              className="group flex flex-col items-center text-center bg-white border border-border rounded-card p-5 no-underline hover:border-brand-purple hover:shadow-md transition-all"
            >
              <div className="mb-3">
                {categoryIcons[cat.icon]}
              </div>
              <h3 className="font-heading font-bold text-sm uppercase text-heading m-0 mb-2 tracking-wide">
                {cat.name}
              </h3>
              <p className="text-sm text-body m-0 mb-3 leading-relaxed">
                {cat.description}
              </p>
              <span className="text-brand-purple group-hover:translate-x-1 transition-transform">
                <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
