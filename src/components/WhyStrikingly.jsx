import { strings } from '../data/strings'

const reasons = [
  {
    titleKey: 'why1Title',
    descKey: 'why1Desc',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" />
        <path d="M12 16 L15 19 L20 13" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: 'why2Title',
    descKey: 'why2Desc',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="8" x2="22" y2="8" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="12" x2="18" y2="12" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  },
  {
    titleKey: 'why3Title',
    descKey: 'why3Desc',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4 L20 12 L28 13 L22 19 L24 28 L16 24 L8 28 L10 19 L4 13 L12 12 Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function WhyStrikingly() {
  const t = strings.en

  return (
    <section className="why-strikingly" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="section-heading">{t.whyHeading}</h2>
        <div className="why-grid">
          {reasons.map((reason, i) => (
            <div key={i} className="why-card">
              <div className="why-card-icon">{reason.icon}</div>
              <h3 className="why-card-title">{t[reason.titleKey]}</h3>
              <p className="why-card-desc">{t[reason.descKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
