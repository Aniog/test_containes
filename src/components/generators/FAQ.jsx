import { useState, useEffect } from 'react';
import { t } from '@/data/strings';
import { ChevronDown } from './Illustrations';

const faqs = [
  { q: 'faq1Q', a: 'faq1A' },
  { q: 'faq2Q', a: 'faq2A' },
  { q: 'faq3Q', a: 'faq3A' },
  { q: 'faq4Q', a: 'faq4A' },
  { q: 'faq5Q', a: 'faq5A' },
  { q: 'faq6Q', a: 'faq6A' },
];

const FAQItem = ({ question, answer, isOpen, onToggle, index, jsEnabled }) => {
  const contentId = `faq-answer-${index}`;
  return (
    <div className="border-b border-[#E2E4E7]">
      <button
        type="button"
        onClick={jsEnabled ? onToggle : undefined}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded"
      >
        <span className="font-[family-name:var(--font-headings)] font-bold text-[14px] md:text-[15px] text-[#2E2E2F] uppercase leading-[1.4]">
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-[#8159BB] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <ChevronDown />
        </span>
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[13px] md:text-[14px] text-[#636972] leading-[1.7]">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  return (
    <section className="py-10 md:py-12 bg-[#F4F6F8]">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[22px] md:text-[26px] text-[#4B5056] leading-[1.2] text-center">
          {t('faqHeading')}
        </h2>
        <div className="mt-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              question={t(faq.q)}
              answer={t(faq.a)}
              isOpen={jsEnabled ? openIndex === i : true}
              onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
              jsEnabled={jsEnabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
