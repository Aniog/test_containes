import { useState, useRef, useEffect } from 'react';
import strings from '@/data/strings.en';

function FaqItem({ item, index, isOpen, toggle }) {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, [isOpen]);

  const buttonId = `faq-button-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div className="border-b border-[#E2E4E7]">
      <button
        id={buttonId}
        type="button"
        className="w-full flex items-center justify-between py-[15px] px-0 bg-transparent border-none cursor-pointer text-left"
        style={{ fontFamily: 'var(--font-body)', color: '#2E2E2F', fontSize: '14px', fontWeight: 600 }}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={toggle}
      >
        <span className="pr-[20px]">{item.question}</span>
        <svg
          aria-hidden="true"
          className="flex-shrink-0 transition-transform duration-200"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M4 6L8 10L12 6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={answerId}
        ref={answerRef}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className="faq-answer"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <p className="pb-[15px] text-[14px] leading-relaxed" style={{ color: '#636972' }}>
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  const s = strings.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[800px] mx-auto px-5">
        <h2
          className="text-[26px] md:text-[32px] mb-[20px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.heading}
        </h2>
        <div>
          {s.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
