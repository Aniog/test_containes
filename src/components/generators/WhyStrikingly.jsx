const icons = [
  // Zap / lightning
  <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M15 3L5 16H14L13 25L23 12H14L15 3Z" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Mobile
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="7" y="3" width="14" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="12" y1="21" x2="16" y2="21" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Gift / free
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="12" width="20" height="13" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="3" y="8" width="22" height="5" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="14" y1="8" x2="14" y2="25" stroke="#8159BB" strokeWidth="1.5" />
    <path d="M14 8C14 8 14 5 11 4C8 3 8 6 9 7C10 8 14 8 14 8Z" stroke="#8159BB" strokeWidth="1.5" />
    <path d="M14 8C14 8 14 5 17 4C20 3 20 6 19 7C18 8 14 8 14 8Z" stroke="#8159BB" strokeWidth="1.5" />
  </svg>,
];

export default function WhyStrikingly({ t }) {
  return (
    <section className="py-[40px] bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading m-0 mb-[30px] text-center">
          {t.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {t.whyStrikingly.items.map((item, i) => (
            <div key={i} className="text-center p-[20px]">
              <div className="flex justify-center mb-[15px]">
                {icons[i]}
              </div>
              <h3 className="font-heading text-[14px] text-heading-dark m-0 mb-[10px]">
                {item.title}
              </h3>
              <p className="text-body-text text-[14px] m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
