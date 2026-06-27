import strings from '@/strings/strings.en.js'
import { WebsiteMockupIllustration } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="gen-hero">
      <div className="gen-container gen-hero-grid">
        <div className="gen-hero-content">
          <h1 className="gen-hero-h1">
            <span className="gen-h1-line1">{strings.hero.h1Line1}</span>
            <span className="gen-h1-line2">{strings.hero.h1Line2}</span>
          </h1>
          <p className="gen-hero-sub">{strings.hero.subheadline}</p>
          <div className="gen-hero-actions">
            <a href="/s/ai_site_builder" className="gen-btn gen-btn-primary gen-btn-large">
              {strings.hero.primaryCta}
            </a>
            <a href="#all-generators" className="gen-btn gen-btn-ghost">
              {strings.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="gen-hero-image">
          <WebsiteMockupIllustration className="gen-hero-svg" width={400} height={300} />
        </div>
      </div>
    </section>
  )
}
