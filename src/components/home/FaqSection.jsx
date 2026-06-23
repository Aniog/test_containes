import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { faqs } from '../../data/content';

const FaqSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          description="If your question is not answered here, send us an inquiry and we will reply within one business day."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-base">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
