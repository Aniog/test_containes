import strings from '../strings.en.js';

const reasons = [
  {
    title: strings.why1Title,
    desc: strings.why1Desc,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" />
        <polyline points="10,16 14,20 22,12" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: strings.why2Title,
    desc: strings.why2Desc,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="6" width="22" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="9" y="24" width="14" height="2" rx="1" fill="#8159BB" />
        <line x1="16" y1="22" x2="16" y2="24" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: strings.why3Title,
    desc: strings.why3Desc,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="16" y1="10" x2="16" y2="22" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="16" x2="20" y2="16" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyStrikingly() {
  return (
    <section className="py-10 md:py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[30px] text-center">
          {strings.whyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {reasons.map((r) => (
            <div key={r.title} className="text-center max-w-[320px] mx-auto">
              <div className="mb-[15px] flex justify-center">{r.icon}</div>
              <h3 className="text-[16px] text-heading-gray m-0 mb-[5px]">{r.title}</h3>
              <p className="text-[14px] text-body-gray m-0 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}