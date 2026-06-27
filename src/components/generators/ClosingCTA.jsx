import strings from '@/strings/strings.en.js'

export default function ClosingCTA() {
  return (
    <section className="gen-section gen-section-white" aria-labelledby="closing-heading">
      <div className="gen-container gen-center">
        <h2 id="closing-heading" className="gen-h2">{strings.closingCta.heading}</h2>
        <p className="gen-section-sub">{strings.closingCta.sub}</p>
        <a href="/s/ai_site_builder" className="gen-btn gen-btn-primary gen-btn-large gen-closing-btn">
          {strings.closingCta.cta}
        </a>
      </div>
    </section>
  )
}
