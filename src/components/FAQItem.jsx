import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-semibold text-navy pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-muted shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-slate-muted leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
