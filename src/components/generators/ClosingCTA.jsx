import { strings } from '../../data/strings'

const t = strings.en.closingCta

export default function ClosingCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-content mx-auto px-5 text-center">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl">
          {t.heading}
        </h2>
        <p className="mt-2.5 text-body-text font-body text-base">
          {t.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="mt-8 ai-gradient-bg text-white font-heading font-bold uppercase text-sm h-11 px-6 rounded inline-flex items-center justify-center transition-shadow hover:shadow-lg focus-ring"
        >
          {t.cta}
        </a>
      </div>
    </section>
  )
}
