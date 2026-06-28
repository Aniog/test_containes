import { t } from '@/data/strings';
import { featuredGenerators } from '@/data/generators';

const FeaturedGenerators = () => (
  <section className="py-10 md:py-12">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[26px] text-[#4B5056] leading-[1.2]">
        {t('featuredHeading')}
      </h2>
      <p className="mt-2 text-[#636972] text-[14px]">{t('featuredSub')}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((g) => (
          <a
            key={g.slug}
            href={`/generators/${g.slug}`}
            className="group block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all"
          >
            <h3 className="font-[family-name:var(--font-headings)] font-bold text-[15px] text-[#2E2E2F] uppercase leading-[1.3]">
              {g.name}
            </h3>
            <p className="mt-1 text-[13px] text-[#636972] leading-[1.5]">{g.description}</p>
            <span className="inline-block mt-3 text-[11px] font-[family-name:var(--font-headings)] font-bold uppercase text-[#8159BB] border border-[#8159BB] rounded-[3px] px-[6px] py-[2px]">
              {g.category}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGenerators;
