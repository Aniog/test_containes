import { useState, useId } from 'react';
import { strings } from '../../data/generatorsData.js';
import { ChevronDownIcon } from './Icons.jsx';

const s = strings.en.faq;

function FaqItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const btnId = useId();

  return (
    <div
      style={{
        borderBottom: '1px solid #E2E4E7',
      }}
    >
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          cursor: 'pointer',
          textAlign: 'start',
        }}
      >
        <span
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 600,
            fontSize: 14,
            color: '#2E2E2F',
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <ChevronDownIcon expanded={open} />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        style={{
          overflow: 'hidden',
          maxHeight: open ? 600 : 0,
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ paddingBottom: 20 }}>
          {item.a.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                margin: i === 0 ? 0 : '12px 0 0',
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 14,
                color: '#636972',
                lineHeight: 1.7,
              }}
            >
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
    <section
      aria-labelledby="faq-heading"
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 800, marginInline: 'auto' }}>
        <h2
          id="faq-heading"
          style={{
            margin: '0 0 40px',
            fontFamily: '"Josefin Sans", Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
          }}
        >
          {s.heading}
        </h2>

        <div style={{ borderTop: '1px solid #E2E4E7' }}>
          {s.items.map((item, i) => (
            <FaqItem key={item.q} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
