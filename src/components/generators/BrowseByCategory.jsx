const CategoryIcon = ({ category }) => {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
        <rect x="8" y="18" width="10" height="6" rx="1" fill="#8159BB" opacity="0.15" />
        <rect x="22" y="18" width="10" height="2" rx="1" fill="#8159BB" opacity="0.2" />
        <rect x="22" y="22" width="8" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.2" />
        <rect x="14" y="18" width="12" height="2" rx="1" fill="#8159BB" opacity="0.15" />
        <rect x="14" y="22" width="12" height="6" rx="2" fill="#8159BB" opacity="0.25" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="22" y="8" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="4" y="23" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="22" y="23" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="11" width="12" height="3" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="10" y="17" width="20" height="2" rx="1" fill="#8159BB" opacity="0.15" />
        <rect x="10" y="21" width="20" height="2" rx="1" fill="#8159BB" opacity="0.15" />
        <rect x="10" y="25" width="14" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="12" width="28" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <path d="M6 18 L20 8 L34 18" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="16" y="24" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="22" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="29" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
  };
  return icons[category] || icons.websites;
};

export default function BrowseByCategory({ t, categories }) {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading m-0 mb-[30px]">
          {t.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <article key={cat.id}>
              <a
                href={`/generators#${cat.slug}`}
                className="flex items-start gap-[15px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover h-full"
              >
                <div className="shrink-0">
                  <CategoryIcon category={cat.slug} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-[14px] text-heading-dark m-0 mb-[5px]">
                    {cat.name}
                  </h3>
                  <p className="text-body-text text-[13px] m-0">
                    {cat.description}
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-[2px]">
                  <path d="M7 4L13 10L7 16" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
