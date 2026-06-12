import { strings } from '../../data/strings'

const t = strings.en.whyStrikingly

function FeatureIcon({ index }) {
  const icons = [
    // Lightning bolt - Live in Seconds
    <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M15 3L5 16h7l-1 9 10-13h-7l1-9z" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Phone - Mobile by Default
    <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="14" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="12" y1="21" x2="16" y2="21" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    // Gift - Free to Start
    <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="20" height="13" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="3" y="9" width="22" height="5" rx="1.5" stroke="#8159BB" strokeWidth="1.5"/>
      <path d="M14 9V25M10 9c0-3 2-5 4-5s4 2 4 5" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
  ]
  return icons[index] || null
}

export default function WhyStrikingly() {
  return (
    <section className="py-10 bg-bg-light">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl text-center">
          {t.heading}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <FeatureIcon index={idx} />
              <h3 className="mt-4 font-heading font-bold uppercase text-heading-dark text-sm">
                {item.title}
              </h3>
              <p className="mt-2 text-body-text font-body text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
