import { useState, useId } from 'react';
import { strings } from '@/data/generators';

const s = strings.en.faq;

function FaqItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  return (
    <div className="faq-item">
      <button
        className="faq-btn"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{item.q}</span>
        <svg
          className={`faq-chevron${open ? ' open' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={bodyId}
        className={`faq-body${open ? ' open' : ''}`}
        role="region"
        aria-label={item.q}
      >
        <div className="faq-body-inner">
          {item.a.split('\n\n').map((para, i) => (
            <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0' }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section style={{ padding: '60px 20px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 800, marginInline: 'auto' }}>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: 'var(--heading)', margin: '0 0 30px' }}
        >
          {s.heading}
        </h2>

        <div style={{ borderTop: '1px solid var(--divider)' }}>
          {s.items.map((item, i) => (
            <FaqItem key={item.q} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
