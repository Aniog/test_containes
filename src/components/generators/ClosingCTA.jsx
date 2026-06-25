export default function ClosingCTA({ t }) {
  return (
    <section className="py-[60px] text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[30px] md:text-[36px] text-heading-dark m-0 mb-[10px]">
          {t.closingCta.heading}
        </h2>
        <p className="text-body-text text-[16px] m-0 mb-[30px]">
          {t.closingCta.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-[24px] rounded-[4px] ai-gradient-bg text-white font-heading text-[14px] tracking-wide"
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  );
}
