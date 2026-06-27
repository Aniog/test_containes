import { useState } from 'react';
import { faqItems, strings } from '../../data/generators-data';

const s = strings.en;

function PlusIcon({ open }) {
  return (
    <svg
      className={`faq-icon${open ? ' open' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function FAQItem({ id, question, answer, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-panel`;

  return (
    <div className="faq-item">
      <button
        className="faq-btn"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{question}</span>
        <PlusIcon open={open} />
      </button>
      <div
        id={panelId}
        className={`faq-panel${open ? ' open' : ''}`}
        role="region"
        aria-labelledby={id}
      >
        {answer.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="strk-section">
      <div className="strk-container" style={{ maxWidth: '760px' }}>
        <h2 className="strk-section-heading">{s.faqHeading}</h2>
        <div style={{ marginBlockStart: '30px', borderBlockStart: '1px solid var(--clr-divider)' }}>
          {faqItems.map((item, i) => (
            <FAQItem key={item.id} {...item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
