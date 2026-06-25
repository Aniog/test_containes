import { strings } from '@/data/strings';

const t = strings.en.closingCta;

const ClosingCTA = () => {
  return (
    <section className="py-[60px] bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-3">{t.heading}</h2>
        <p className="text-body-text mb-8">{t.sub}</p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-[20px] ai-gradient-bg text-white font-heading font-bold uppercase text-sm rounded no-underline hover:opacity-90 transition-opacity"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
