import strings from '../../data/strings.en.js';
import { categories } from '../../data/generators.js';

const CategoryIcon = ({ icon }) => {
  const color = '#8159BB';
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {icon === 'websites' && (
        <rect x="4" y="8" width="32" height="24" rx="3" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.04" />
      )}
      {icon === 'landing-pages' && (
        <rect x="8" y="4" width="24" height="32" rx="3" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.04" />
      )}
      {icon === 'portfolios' && (
        <>
          <rect x="4" y="6" width="14" height="12" rx="2" stroke={color} strokeWidth="1" />
          <rect x="22" y="6" width="14" height="12" rx="2" stroke={color} strokeWidth="1" />
          <rect x="4" y="22" width="14" height="12" rx="2" stroke={color} strokeWidth="1" />
          <rect x="22" y="22" width="14" height="12" rx="2" stroke={color} strokeWidth="1" />
        </>
      )}
      {icon === 'blogs' && (
        <>
          <rect x="8" y="6" width="24" height="8" rx="3" fill={color} fillOpacity="0.1" />
          <rect x="8" y="18" width="24" height="3" rx="1.5" fill={color} fillOpacity="0.06" />
          <rect x="8" y="24" width="18" height="3" rx="1.5" fill={color} fillOpacity="0.06" />
          <rect x="8" y="30" width="12" height="3" rx="1.5" fill={color} fillOpacity="0.06" />
        </>
      )}
      {icon === 'stores' && (
        <>
          <circle cx="14" cy="14" r="6" stroke={color} strokeWidth="1.2" />
          <path d="M14 10v8M10 14h8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </>
      )}
      {icon === 'link-in-bio' && (
        <>
          <circle cx="20" cy="14" r="8" stroke={color} strokeWidth="1.2" />
          <path d="M14 26a8 8 0 0112 0" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};

export default function BrowseByCategory() {
  return (
    <section className="section-padding bg-white">
      <div className="content-container">
        <h2 className="text-heading-gray text-[22px] md:text-[28px] mb-[30px] mt-0">
          {strings.browseHeading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card flex items-center gap-[15px] group"
            >
              <div className="flex-shrink-0 w-[40px] h-[40px] flex items-center justify-center">
                <CategoryIcon icon={cat.icon} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-hero-dark text-[14px] mb-[4px] leading-[1.2] font-heading font-bold uppercase">
                  {cat.name}
                </span>
                <p className="text-body-gray text-[13px] m-0 leading-[1.4]">
                  {cat.description}
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="flex-shrink-0 text-brand-purple group-hover:translate-x-[2px] transition-transform"
              >
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}