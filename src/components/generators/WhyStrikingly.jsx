import strings from '@/data/strings.en';

const icons = [
  <svg aria-hidden="true" key="bolt" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M18 4L8 18H16L14 28L24 14H16L18 4Z" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>,
  <svg aria-hidden="true" key="mobile" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="8" y="4" width="16" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
    <circle cx="16" cy="24" r="1.5" fill="#8159BB" />
  </svg>,
  <svg aria-hidden="true" key="free" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
    <path d="M11 16H21M16 11V21" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>,
];

export default function WhyStrikingly() {
  const s = strings.whyStrikingly;
  return (
    <section className="w-full bg-white py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2
          className="text-[26px] md:text-[32px] mb-[30px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {s.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-[15px]">{icons[i]}</div>
              <h3
                className="text-[14px] mb-[8px]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#2E2E2F' }}
              >
                {item.title}
              </h3>
              <p className="text-[14px]" style={{ color: '#636972' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
