import { strings } from '../../data/generatorsData';

const s = strings.en.whyStrikingly;

const icons = {
  live: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="#8159BB" strokeWidth="1.5" fill="#EDE8F5" />
      <path d="M13 20l5 5 9-10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mobile: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="5" width="16" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#EDE8F5" />
      <circle cx="20" cy="31" r="1.5" fill="#8159BB" />
      <rect x="16" y="10" width="8" height="1.5" rx="0.75" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
  free: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="#8159BB" strokeWidth="1.5" fill="#EDE8F5" />
      <path d="M20 10v20M15 15h8a3 3 0 010 6h-8m0 0h9a3 3 0 010 6H15" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function WhyStrikingly() {
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60, borderTop: '1px solid #E2E4E7' }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 20px' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            margin: 0,
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          {s.heading}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
          }}
          className="why-grid"
        >
          {s.items.map((item) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 14,
                padding: '30px 20px',
                border: '1px solid #E2E4E7',
                borderRadius: 6,
                backgroundColor: '#fff',
              }}
            >
              {icons[item.iconKey]}
              <p
                className="font-heading"
                style={{ fontSize: 14, color: '#2E2E2F', margin: 0 }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: 14, color: '#636972', margin: 0, lineHeight: 1.6 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
