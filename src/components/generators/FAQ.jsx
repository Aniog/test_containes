import { useState } from 'react';
import s from '../../data/strings.js';

const styles = {
  section: {
    background: '#fff',
    padding: '60px 20px',
    borderTop: '1px solid #E2E4E7',
  },
  container: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  sectionHeading: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(22px, 2.5vw, 30px)',
    color: '#4B5056',
    textTransform: 'uppercase',
    marginBottom: '30px',
    textAlign: 'center',
  },
  item: {
    borderBottom: '1px solid #E2E4E7',
  },
  questionBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    padding: '18px 0',
    background: 'none',
    border: 'none',
    textAlign: 'start',
    cursor: 'pointer',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '15px',
    fontWeight: 600,
    color: '#2E2E2F',
    textTransform: 'none',
    letterSpacing: 'normal',
  },
  answerWrap: {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  },
  answerText: {
    fontSize: '14px',
    color: '#636972',
    lineHeight: 1.7,
    paddingBottom: '18px',
    margin: 0,
    whiteSpace: 'pre-line',
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>{s.faq.heading}</h2>
        <div>
          {s.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div key={i} style={styles.item}>
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  style={styles.questionBtn}
                >
                  <span>{item.question}</span>
                  <ChevronIcon expanded={isOpen} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  style={{
                    ...styles.answerWrap,
                    maxHeight: isOpen ? '600px' : '0px',
                  }}
                >
                  <p style={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ expanded }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{
        transform: expanded ? 'rotate(180deg)' : 'none',
        transition: 'transform 0.25s ease',
        flexShrink: 0,
        color: '#8159BB',
      }}
    >
      <path
        d="M4 7l5 5 5-5"
        stroke="#8159BB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
