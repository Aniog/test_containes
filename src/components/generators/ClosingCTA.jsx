export default function ClosingCTA({ t }) {
  return (
    <section className="py-[60px] bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[28px] md:text-[32px] text-heading-dark mb-[10px]">
          {t.closingCta.heading}
        </h2>
        <p className="text-body-text text-[16px] mb-[30px]">
          {t.closingCta.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg text-white font-heading text-[14px] uppercase h-[44px] px-[24px] rounded-[4px] inline-flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          {t.closingCta.cta}
        </a>
      </div>
    </section>
  )
}
