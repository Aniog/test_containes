import React from 'react';
import { t } from '../../data/strings.js';
import { ChevronDownIcon } from '../Icons.jsx';

const wrap = {
  background: 'var(--color-light-bg)',
  paddingBlock: 50,
};

const list = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  background: 'var(--color-white)',
  border: '1px solid var(--color-card-border)',
  borderRadius: 3,
  overflow: 'hidden',
};

const itemStyle = {
  borderBottom: '1px solid var(--color-divider)',
};

const itemStyleLast = {
  borderBottom: 'none',
};

const button = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  padding: '18px 20px',
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: 16,
  textTransform: 'uppercase',
  color: 'var(--color-heading-strong)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  letterSpacing: '0.01em',
};

const panel = {
  padding: '0 20px 20px 20px',
  color: 'var(--color-body)',
  fontSize: 14,
  lineHeight: 1.6,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

const iconWrap = {
  transition: 'transform 200ms ease',
  color: 'var(--color-brand-purple)',
  display: 'inline-flex',
};

export default function Faq() {
  const items = t.faq.items;
  const [openIdx, setOpenIdx] = React.useState(0);
  const handleToggle = (i) => {
    setOpenIdx((prev) => (prev === i ? -1 : i));
  };
  return (
    <section aria-labelledby="faq-heading" style={wrap}>
      <div className="container">
        <header className="section-heading">
          <h2 id="faq-heading">{t.faq.heading}</h2>
        </header>
        <div style={list}>
          {items.map((item, i) => {
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            const expanded = openIdx === i;
            return (
              <div key={item.q} style={i === items.length - 1 ? itemStyleLast : itemStyle}>
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={expanded ? 'true' : 'false'}
                  aria-controls={panelId}
                  data-faq-trigger={i}
                  style={button}
                  onClick={() => handleToggle(i)}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    data-faq-icon={i}
                    style={{
                      ...iconWrap,
                      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDownIcon size={18} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!expanded}
                  data-faq-panel={i}
                  style={panel}
                >
                  <p>{item.a}</p>
                  {item.a2 ? <p>{item.a2}</p> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
