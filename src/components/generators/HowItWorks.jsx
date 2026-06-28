import strings from '@/data/strings.en';

export default function HowItWorks() {
  const s = strings.howItWorks;
  return (
    <section className="w-full py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2
          className="text-[26px] md:text-[32px] mb-[30px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {s.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-[15px]"
                style={{ background: '#8159BB' }}
              >
                <span className="text-white text-[20px] font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {i + 1}
                </span>
              </div>
              <h3
                className="text-[14px] mb-[8px]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#2E2E2F' }}
              >
                {step.title}
              </h3>
              <p className="text-[14px]" style={{ color: '#636972' }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
