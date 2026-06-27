const icons = [
  // Zap / lightning
  <svg key="zap" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M15 3L5 16h7l-1 9 10-13h-7l1-9z" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Mobile
  <svg key="mobile" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="7" y="3" width="14" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
    <line x1="12" y1="21" x2="16" y2="21" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // Gift / free
  <svg key="gift" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="12" width="20" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
    <rect x="3" y="8" width="22" height="5" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
    <line x1="14" y1="8" x2="14" y2="24" stroke="#8159BB" strokeWidth="1.5"/>
    <path d="M14 8c-2-3-5-4-5-2s3 2 5 2" stroke="#8159BB" strokeWidth="1.2"/>
    <path d="M14 8c2-3 5-4 5-2s-3 2-5 2" stroke="#8159BB" strokeWidth="1.2"/>
  </svg>,
]

export default function WhyStrikingly({ t }) {
  return (
    <section className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section mb-[30px] text-center">
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="bg-white border border-card-border rounded-[3px] p-[20px] text-center">
              <div className="flex justify-center mb-[15px]">
                {icons[i]}
              </div>
              <h3 className="text-[14px] text-heading-dark mb-[10px]">{item.title}</h3>
              <p className="text-body-text text-[14px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
