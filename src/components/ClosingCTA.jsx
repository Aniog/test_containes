import { strings } from '../data/strings'

export default function ClosingCTA() {
  const t = strings.en

  return (
    <section className="closing-cta" aria-labelledby="closing-heading">
      <div className="container closing-container">
        <h2 id="closing-heading" className="closing-heading">{t.closingHeading}</h2>
        <p className="closing-sub">{t.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
          {t.closingCta}
        </a>
      </div>
    </section>
  )
}
