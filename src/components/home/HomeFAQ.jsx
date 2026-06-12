import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do you charge for sourcing services?',
    a: 'Most projects use a flat service fee or a small commission on the order value, agreed in writing before we start. We never add hidden markups on the factory price, and you receive supplier invoices directly when possible.',
  },
  {
    q: 'Can I work with the factory directly after you find it?',
    a: 'Yes. We can step out after the supplier search and sample stage, or stay involved for inspections, production follow-up and shipping. The choice is yours, project by project.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you can support?',
    a: 'MOQs depend on the factory and product. For trial orders we often work with smaller volumes by using existing factory tooling or stock components. We will be honest about what is realistic for your product.',
  },
  {
    q: 'Do you sign an NDA?',
    a: 'Yes. We routinely sign NDAs with buyers and with shortlisted factories on your behalf, especially for branded or original designs.',
  },
  {
    q: 'What does a quality inspection report include?',
    a: 'Inspection reports include AQL sampling results, dimensional and functional checks against your specification, photos and short videos of the goods, packaging and shipping marks, and a clear pass/fail summary.',
  },
  {
    q: 'Which shipping methods do you handle?',
    a: 'Sea freight (FCL/LCL), air freight, China-Europe rail, and express. We work with established forwarders and prepare commercial invoice, packing list, certificate of origin and other documents required for your destination.',
  },
];

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-slate-600">
              Don&apos;t see your question here? Reach out and a sourcing
              specialist will reply within one business day.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white shadow-card">
              {faqs.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      className="w-full flex items-start gap-4 text-left px-5 md:px-6 py-5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 font-semibold text-slate-900">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 mt-0.5 text-slate-500 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-5 text-slate-600 leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
