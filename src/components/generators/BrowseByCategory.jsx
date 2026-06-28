import { strings } from '@/data/generators';
import {
  WebsiteIcon,
  LandingPageIcon,
  PortfolioIcon,
  BlogIcon,
  StoreIcon,
  LinkInBioIcon,
  ArrowRightIcon,
} from './Icons';

const t = strings.en;

const iconMap = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkInBioIcon,
};

export default function BrowseByCategory() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <div className="mb-8 md:mb-10">
          <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-[1.2] uppercase text-[#4B5056]">
            {t.categories.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.categories.items.map((category) => {
            const Icon = iconMap[category.id];
            return (
              <a
                key={category.id}
                href={`/generators#${category.id}`}
                className="group flex flex-col gap-4 p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-all"
              >
                {Icon && <Icon className="w-10 h-10" />}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-[16px] font-bold uppercase text-[#4B5056] group-hover:text-[#8159BB] transition-colors">
                    {category.name}
                  </h3>
                  <ArrowRightIcon className="w-5 h-5 text-[#8159BB] flex-shrink-0" />
                </div>
                <p className="text-[14px] text-[#636972] leading-[1.5]">
                  {category.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
