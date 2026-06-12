import { useState, useId } from 'react';
import strings from '../../data/strings';

const s = strings.en.faq;

function FAQItem({ question, answer, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const answerId = useId();
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
        aria-controls={answerId}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '18px 0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          textAlign: 'start',
        }}
      >
        <span
          className="font-heading"
          style={{ fontSize: 14, color: '#4B5056', lineHeight: 1.4, flex: 1 }}
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          style={{
            color: '#8159BB',
            fontSize: 20,
            lineHeight: 1,
            flexShrink: 0,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
          }}
        >
          +
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={btnId}
        className={`faq-answer ${open ? 'expanded' : 'collapsed'}`}
      >
        <div style={{ paddingBottom: 18 }}>
          {answer.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                color: '#636972',
                fontSize: 14,
                lineHeight: 1.7,
                margin: i === 0 ? 0 : '12px 0 0',
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
      style={{ background: '#ffffff', paddingBlock: 60 }}
    >
      <hr className="section-divider" />
      <div className="content-wrap" style={{ paddingTop: 60, maxWidth: 760 }}>
        <h2
          id="faq-heading"
          className="font-heading"
          style={{ color: '#4B5056', fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 30 }}
        >
          {s.heading}
        </h2>

        <div>
          {s.items.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
