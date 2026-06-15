import { useState, useId } from 'react';
import { strings } from '../../data/generators';

const { heading, items } = strings.en.faq;

function FaqItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const btnId = useId();

  return (
    <div className="faq-item">
      <button
        className="faq-button"
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{item.question}</span>
        <svg
          className="faq-chevron"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 7l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`faq-panel${open ? ' open' : ''}`}
      >
        <div className="faq-panel-inner">
          {item.answer.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GeneratorsFAQ() {
  return (
    <section
      style={{
        background: 'var(--color-light-bg)',
        padding: '60px 0',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div className="content-container">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-subheading">
          Everything you need to know before you start building.
        </p>

        <div
          style={{
            maxWidth: 760,
            borderTop: '1px solid var(--color-divider)',
          }}
        >
          {items.map((item, i) => (
            <FaqItem key={i} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
