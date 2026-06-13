import strings from '@/strings.en.js';
import { categories } from '@/data/generators.js';
import { ArrowRight } from 'lucide-react';

function CategoryIcon({ slug }) {
  const icons = {
    websites: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/><rect x="4" y="6" width="32" height="6" rx="3" fill="#8159BB" opacity="0.15"/><circle cx="10" cy="9" r="1.5" fill="#8159BB"/><circle cx="15" cy="9" r="1.5" fill="#8159BB"/><circle cx="20" cy="9" r="1.5" fill="#8159BB"/></svg>,
    'landing-pages': <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/><line x1="6" y1="14" x2="34" y2="14" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/><rect x="10" y="20" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.2"/><rect x="10" y="26" width="14" height="3" rx="1.5" fill="#8159BB" opacity="0.2"/></svg>,
    portfolios: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="6" y="8" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/><rect x="22" y="8" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/><rect x="6" y="22" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/><rect x="22" y="22" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/></svg>,
    blogs: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/><line x1="13" y1="14" x2="27" y2="14" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/><line x1="13" y1="19" x2="27" y2="19" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/><line x1="13" y1="24" x2="22" y2="24" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/></svg>,
    stores: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M8 14 L20 6 L32 14 V30 C32 31.1 31.1 32 30 32 H10 C8.9 32 8 31.1 8 30 V14Z" stroke="#8159BB" strokeWidth="1.5" fill="none"/><rect x="16" y="20" width="8" height="12" stroke="#8159BB" strokeWidth="1.5" fill="none"/><circle cx="20" cy="26" r="1.5" fill="#8159BB"/></svg>,
    'link-in-bio': <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="1.5" fill="none"/><circle cx="20" cy="14" r="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/><path d="M12 30 C12 24 16 20 20 20 C24 20 28 24 28 30" stroke="#8159BB" strokeWidth="1.5" fill="none"/></svg>,
  };
  return icons[slug] || icons.websites;
}

export default function BrowseByCategory() {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="section-container">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading leading-[1.2] mb-[20px]">
          {strings.browseHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card flex items-start gap-[15px] group"
            >
              <div className="shrink-0 mt-[5px]">
                <CategoryIcon slug={cat.slug} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold uppercase text-[16px] text-heading-dark leading-[1.2] mb-[5px]">
                  {cat.name}
                </h3>
                <p className="text-body text-[14px] leading-[1.5]">
                  {cat.desc}
                </p>
              </div>
              <ArrowRight className="w-[18px] h-[18px] text-brand-purple shrink-0 mt-[5px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}