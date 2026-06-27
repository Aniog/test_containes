import { strings } from '../data/strings'

export default function Hero() {
  const t = strings.en

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-heading">
            <span className="hero-heading-line hero-heading-line-1">{t.heroH1Line1}</span>
            <span className="hero-heading-line hero-heading-line-2">{t.heroH1Line2}</span>
          </h1>
          <p className="hero-subheadline">{t.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {t.heroCtaPrimary}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-large">
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <svg
            width="480"
            height="360"
            viewBox="0 0 480 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
          >
            <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
            <rect x="60" y="60" width="360" height="30" rx="4" fill="#F4F6F8" />
            <circle cx="80" cy="75" r="6" fill="#8159BB" opacity="0.3" />
            <circle cx="100" cy="75" r="6" fill="#8159BB" opacity="0.2" />
            <circle cx="120" cy="75" r="6" fill="#8159BB" opacity="0.1" />
            <rect x="60" y="110" width="160" height="120" rx="4" fill="#F4F6F8" />
            <rect x="240" y="110" width="180" height="20" rx="4" fill="#E2E4E7" />
            <rect x="240" y="140" width="180" height="10" rx="2" fill="#E2E4E7" />
            <rect x="240" y="160" width="140" height="10" rx="2" fill="#E2E4E7" />
            <rect x="240" y="180" width="160" height="10" rx="2" fill="#E2E4E7" />
            <rect x="60" y="250" width="360" height="50" rx="4" fill="#F4F6F8" />
            <rect x="80" y="265" width="100" height="20" rx="4" fill="#8159BB" opacity="0.15" />
            <rect x="200" y="265" width="100" height="20" rx="4" fill="#8159BB" opacity="0.1" />
            <rect x="320" y="265" width="80" height="20" rx="4" fill="#8159BB" opacity="0.08" />
            <path d="M200 170 L220 150 L240 170 L260 140 L280 160 L300 130" stroke="#7671FF" strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="200" cy="170" r="3" fill="#7671FF" opacity="0.6" />
            <circle cx="220" cy="150" r="3" fill="#7671FF" opacity="0.6" />
            <circle cx="240" cy="170" r="3" fill="#7671FF" opacity="0.6" />
            <circle cx="260" cy="140" r="3" fill="#7671FF" opacity="0.6" />
            <circle cx="280" cy="160" r="3" fill="#7671FF" opacity="0.6" />
            <circle cx="300" cy="130" r="3" fill="#7671FF" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
