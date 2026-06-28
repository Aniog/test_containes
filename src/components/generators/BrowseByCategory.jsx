import { t } from '@/data/strings';
import { categories } from '@/data/generators';
import { WebsitesIcon, LandingIcon, PortfolioIcon, BlogIcon, StoreIcon, LinkIcon, ArrowRight } from './Illustrations';

const iconMap = {
  websites: WebsitesIcon,
  landing: LandingIcon,
  portfolio: PortfolioIcon,
  blog: BlogIcon,
  store: StoreIcon,
  link: LinkIcon,
};

const BrowseByCategory = () => (
  <section className="py-10 md:py-12 bg-[#F4F6F8]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[26px] text-[#4B5056] leading-[1.2]">
        {t('browseHeading')}
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || WebsitesIcon;
          return (
            <a
              key={cat.key}
              href={`/generators#${cat.key}`}
              className="group flex items-start gap-4 bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Icon />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[14px] text-[#2E2E2F] leading-[1.3]">
                  {cat.label}
                </h3>
                <p className="mt-1 text-[13px] text-[#636972] leading-[1.5]">{cat.desc}</p>
              </div>
              <div className="flex-shrink-0 mt-1 text-[#8159BB] group-hover:translate-x-1 transition-transform">
                <ArrowRight />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default BrowseByCategory;
