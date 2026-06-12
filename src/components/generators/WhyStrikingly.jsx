import strings from '../../data/strings';

const s = strings.en.whyStrikingly;

function LightningIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M18 4L8 18h8l-2 10 14-16h-8l2-8z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="16" cy="25" r="1.5" fill="#8159BB" opacity="0.6" />
      <line x1="12" y1="7" x2="20" y2="7" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 4h10l14 14-10 10L4 14V4z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2" fill="#8159BB" opacity="0.5" />
    </svg>
  );
}

const icons = [<LightningIcon />, <MobileIcon />, <TagIcon />];

export default function WhyStrikingly() {
  return (
    <section
      aria-labelledby="why-heading"
      style={{ background: '#F4F6F8', paddingBlock: 60 }}
    >
      <hr className="section-divider" />
      <div className="content-wrap" style={{ paddingTop: 60 }}>
        <h2
          id="why-heading"
          className="font-heading"
          style={{ color: '#4B5056', fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 40 }}
        >
          {s.heading}
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 30,
          }}
        >
          {s.items.map((item, i) => (
            <div
              key={item.title}
              className="gen-card flex flex-col"
              style={{ background: '#ffffff' }}
            >
              <div style={{ marginBottom: 14 }}>{icons[i]}</div>
              <span
                className="font-heading"
                style={{ fontSize: 13, color: '#4B5056', marginBottom: 8 }}
              >
                {item.title}
              </span>
              <p style={{ color: '#636972', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
