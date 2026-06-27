import React, { useState, useRef, useEffect } from 'react';

const FaqItem = ({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-[#E2E4E7]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="font-heading font-bold text-[14px] md:text-[15px] text-[#4B5056] uppercase pr-4 group-hover:text-[#8159BB] transition-colors">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`flex-shrink-0 text-[#8159BB] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M5 8 L10 13 L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={`faq-answer-${index}`}
        ref={contentRef}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="faq-answer"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div className="pb-5 text-[14px] text-[#636972] leading-[1.6]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq = ({ heading, items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#F4F6F8] py-10 md:py-[40px]">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] font-bold text-center mb-8 text-[#4B5056] uppercase">{heading}</h2>
        <div className="bg-white border border-[#C6C9CD] rounded-[3px] px-5">
          {items.map((item, i) => (
            <FaqItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
