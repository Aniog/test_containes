import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, factory audit, QC inspection, or full-service management. We provide a clear fee proposal before starting any project. There are no hidden commissions from suppliers.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can provide an initial shortlist of 3–5 verified suppliers within 3–5 business days. Complex or niche products may take slightly longer.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages — from first-time importers testing with small MOQs to established brands placing large repeat orders. We\'ll advise on realistic MOQs for your product category.',
  },
  {
    q: 'Can you help with product customization and private labeling?',
    a: 'Yes. We regularly assist clients with OEM and ODM projects, including custom packaging, branding, and product modifications. We manage the entire development process with the factory.',
  },
  {
    q: 'What happens if the goods fail quality inspection?',
    a: 'If goods fail inspection, we work with the factory to resolve the issue before shipment — whether that means rework, replacement, or negotiating compensation. We document everything and keep you informed.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate freight booking and export documentation on the China side. For import customs clearance in your country, we can recommend trusted customs brokers in your region.',
  },
  {
    q: 'How do I know the suppliers you recommend are legitimate?',
    a: 'Every supplier we recommend goes through our verification process: business license check, on-site factory visit, production capacity assessment, and reference checks from previous buyers.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers considering working with us."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-brand-light transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-brand-navy text-sm md:text-base pr-4">{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
