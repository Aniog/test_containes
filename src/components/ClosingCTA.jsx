const ClosingCTA = ({ t }) => {
  return (
    <section className="py-[60px] bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[28px] md:text-[32px] text-heading-section mb-[10px]">
          {t.closingCta.heading}
        </h2>
        <p className="text-body-text text-[16px] mb-[30px]">
          {t.closingCta.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] ai-gradient-bg text-white font-heading text-[14px] uppercase tracking-wide hover:opacity-90 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
