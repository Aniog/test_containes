import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. For standard sourcing, we charge a service fee based on order value. Factory audits and QC inspections are priced separately. We provide a full cost breakdown before you commit to anything.',
  },
  {
    q: 'Do I need to travel to China to work with you?',
    a: 'No. We handle everything on the ground in China on your behalf. All communication is done via email, video calls, and our project management system. You receive regular updates and reports throughout the process.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of qualified suppliers within 5–10 business days. Complex or highly specialized products may take longer. We\'ll give you a realistic timeline upfront.',
  },
  {
    q: 'Can you help with small orders or trial orders?',
    a: 'Yes. We work with buyers at all stages, including those placing their first trial order. We can help negotiate lower MOQs and find suppliers willing to work with smaller initial quantities.',
  },
  {
    q: 'What quality standards do your inspections follow?',
    a: 'Our inspections follow AQL (Acceptable Quality Limit) standards, which are internationally recognized. We also use client-specific checklists to check dimensions, functionality, labeling, and packaging.',
  },
  {
    q: 'Do you handle customs clearance and import duties?',
    a: 'We coordinate with freight forwarders and prepare all export documentation. Import duties and customs clearance in your country are typically handled by your local customs broker, but we can recommend trusted partners.',
  },
  {
    q: 'What if there is a quality problem after delivery?',
    a: 'We document all inspections thoroughly. If a quality issue arises, we help you communicate with the supplier and negotiate remedies such as replacements, refunds, or discounts on future orders.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
          <p className="text-text-secondary text-lg">
            Common questions from buyers considering China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-bg-light transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-text-primary font-semibold text-sm pr-4">{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                }
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 bg-bg-light border-t border-border">
                  <p className="text-text-secondary text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
