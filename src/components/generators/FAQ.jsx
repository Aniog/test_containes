import React, { useState } from 'react';

const faqItems = [
  {
    q: 'What is an AI site generator?',
    a: "An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly's generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your purpose before you even start customizing.",
  },
  {
    q: 'How is a generator different from a template?',
    a: "A template is a static starting point: you pick a design and fill in your own content. A generator is dynamic: it takes your input and produces a site tailored to what you described, including suggested copy, structure, and imagery.\n\nThe result still looks like a professionally designed site, but it's built around your specific business rather than a generic placeholder.",
  },
  {
    q: 'Are these generators free to use?',
    a: "Yes. You can generate, preview, and customize any site on Strikingly for free. Publishing to a custom domain or unlocking advanced features requires a paid plan, but there's no cost to explore and build.\n\nNo credit card is required to get started.",
  },
  {
    q: 'What kinds of sites can I build?',
    a: "Strikingly's generators cover business websites, personal portfolios, landing pages, online stores, blogs, wedding sites, restaurant sites, link-in-bio pages, and dozens of other use cases.\n\nIf you don't see a generator for your exact niche, the AI Website Generator is a good all-purpose starting point — just describe your business and it will figure out the right structure.",
  },
  {
    q: 'Can I customize what the generator produces?',
    a: "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element.\n\nThe generator gives you a strong starting point; the editor lets you make it yours.",
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every site built with Strikingly is responsive by default. The generator produces a layout that adapts automatically to phones, tablets, and desktops without any extra work on your part.',
  },
];

const ChevronIcon = ({ open }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    style={{
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.25s ease',
      flexShrink: 0,
    }}
  >
    <path
      d="M4 6.5l5 5 5-5"
      stroke="#8159BB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FaqItem = ({ item, index, isOpen, onToggle }) => {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-divider)',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            padding: '18px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'start',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: 'var(--color-heading)',
          }}
        >
          <span>{item.q}</span>
          <ChevronIcon open={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ paddingBottom: '18px' }}>
          {item.a.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-body)',
                lineHeight: 1.7,
                margin: i === 0 ? '0 0 12px' : '0',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item expanded by default

  return (
    <section
      style={{
        background: 'var(--color-surface)',
        padding: '60px 20px',
        borderTop: '1px solid var(--color-divider)',
      }}
    >
      <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '8px' }}>
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-body)',
            textAlign: 'center',
            margin: '0 0 40px',
          }}
        >
          Everything you need to know before you start building.
        </p>

        <div>
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
