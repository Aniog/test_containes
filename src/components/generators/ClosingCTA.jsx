export default function ClosingCTA({ t }) {
  return (
    <section className="py-[60px] bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[28px] md:text-[32px] text-heading-section mb-3">{t.heading}</h2>
        <p className="text-body-text text-[16px] mb-8">{t.sub}</p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-[24px] rounded-[4px] ai-gradient-bg text-white font-heading font-bold text-[14px] uppercase tracking-wide hover:opacity-90 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
