import { whyItems, strings } from '../../data/generators-data';

const s = strings.en;

function IconLive() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <path d="M10 16 L14 20 L22 12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMobile() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="24" r="1.5" fill="#8159BB" opacity="0.5"/>
      <rect x="13" y="8" width="6" height="1.5" rx="0.75" fill="#8159BB" opacity="0.3"/>
    </svg>
  );
}

function IconFree() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 4 L19.5 12 L28 13 L22 19 L23.5 28 L16 24 L8.5 28 L10 19 L4 13 L12.5 12 Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

const icons = [IconLive, IconMobile, IconFree];

function WhyCell({ title, body, Icon }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Icon />
      <h3 style={{ fontSize: '14px', color: 'var(--clr-heading)' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: 'var(--clr-body)', lineHeight: '1.6' }}>{body}</p>
    </div>
  );
}

export default function WhyStrikingly() {
  return (
    <section className="strk-section strk-section--light">
      <div className="strk-container">
        <h2 className="strk-section-heading">{s.whyHeading}</h2>
        <div className="why-grid" style={{ marginBlockStart: '40px' }}>
          {whyItems.map((item, i) => (
            <WhyCell key={item.title} {...item} Icon={icons[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
