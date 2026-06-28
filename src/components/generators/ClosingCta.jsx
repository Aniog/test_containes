import strings from '@/data/strings.en';

export default function ClosingCta() {
  const s = strings.closingCta;
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2
          className="text-[26px] md:text-[32px] mb-[10px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.headline}
        </h2>
        <p className="text-[14px] mb-[25px]" style={{ color: '#636972' }}>{s.sub}</p>
        <a href="/s/ai_site_builder" className="primary-btn">
          {s.cta}
        </a>
      </div>
    </section>
  );
}
