import { strings } from '@/data/strings'

const t = strings.en.whyStrikingly

const icons = [
  <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 4L6 10v12l10 6 10-6V10L16 4z" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <path d="M12 16l3 3 5-6" stroke="#7671FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <line x1="14" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="11" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <path d="M12 16h8M16 12v8" stroke="#7671FF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
]

const WhyStrikingly = () => {
  return (
    <section className="py-10 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl text-center mb-8">
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">{icons[idx]}</div>
              <h3 className="font-heading text-heading-dark text-sm mb-2">{item.title}</h3>
              <p className="text-body-text text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyStrikingly
