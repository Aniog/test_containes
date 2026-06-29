import strings from '@/lib/strings'

const REASONS = [
  {
    title: "LIVE IN SECONDS",
    desc: "Describe your site, we build it. No setup, no learning curve.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "MOBILE BY DEFAULT",
    desc: "Every generator produces responsive sites that work on any device.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "FREE TO START",
    desc: "Generate, customize, and publish without a credit card.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export default function WhyStrikingly() {
  const { why } = strings

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[80px]">
      <div className="text-center mb-12">
        <h2 className="heading text-[26px] md:text-[32px] text-[color:var(--color-text-heading)]">
          {why.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {REASONS.map((reason, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              {reason.icon}
            </div>
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] text-[color:var(--color-text-heading-dark)] mb-3 uppercase tracking-wide">
              {reason.title}
            </h3>
            <p className="text-[15px] text-[color:var(--color-text-body)]">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
