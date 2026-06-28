import { strings, featuredGenerators } from '@/data/generators';

const t = strings.en;

export default function FeaturedGenerators() {
  return (
    <section className="w-full bg-[#F4F6F8]">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <div className="mb-8 md:mb-10">
          <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-[1.2] uppercase text-[#4B5056]">
            {t.featured.heading}
          </h2>
          <p className="mt-2 text-[14px] text-[#636972]">{t.featured.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((generator) => (
            <a
              key={generator.slug}
              href={`/generators/${generator.slug}`}
              className="group flex flex-col gap-3 p-5 bg-white border border-[#C6C9CD] rounded-[3px] hover:border-[#8159BB] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-all"
            >
              <span className="inline-flex self-start items-center px-[6px] py-[2px] rounded-[3px] border border-[#8159BB] text-[#8159BB] font-heading text-[11px] font-bold uppercase">
                {generator.category}
              </span>
              <h3 className="font-heading text-[16px] font-bold uppercase text-[#4B5056] group-hover:text-[#8159BB] transition-colors">
                {generator.name}
              </h3>
              <p className="text-[14px] text-[#636972] leading-[1.5]">
                {generator.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
