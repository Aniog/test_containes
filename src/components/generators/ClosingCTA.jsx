import { strings } from '@/data/strings'

const t = strings.en.closingCTA

const ClosingCTA = () => {
  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl mb-3">
          {t.heading}
        </h2>
        <p className="text-body-text mb-8">{t.sub}</p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg text-white font-heading text-sm px-8 h-[44px] inline-flex items-center justify-center rounded hover:opacity-90 transition-opacity"
        >
          {t.cta}
        </a>
      </div>
    </section>
  )
}

export default ClosingCTA
