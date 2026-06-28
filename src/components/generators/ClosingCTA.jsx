import { strings } from '@/data/generators';

const t = strings.en;

export default function ClosingCTA() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-[60px] md:py-[80px] text-center">
        <h2 className="font-heading text-[26px] md:text-[36px] font-bold leading-[1.2] uppercase text-[#4B5056]">
          {t.closingCta.heading}
        </h2>
        <p className="mt-3 text-[14px] md:text-[16px] text-[#636972] max-w-[480px] mx-auto">
          {t.closingCta.subheading}
        </p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-6 mt-6 rounded-[4px] font-heading text-[14px] font-bold uppercase text-white bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 transition-shadow"
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  );
}
