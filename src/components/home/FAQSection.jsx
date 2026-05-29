import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. For standard sourcing, we charge a flat project fee or a percentage of the order value. We provide a clear quote before any work begins — no hidden charges.',
  },
  {
    q: 'Do you work with small orders or first-time importers?',
    a: 'Yes. We work with buyers at all stages, from first-time importers testing a new product to established brands placing large repeat orders. We adjust our service level to match your needs.',
  },
  {
    q: 'How do you verify that a supplier is legitimate?',
    a: 'We check business registration, export licenses, production capacity, certifications (ISO, CE, etc.), and trade history. For higher-value orders, we conduct an on-site factory audit.',
  },
  {
    q: 'What happens if the goods fail inspection?',
    a: 'We issue a detailed inspection report with photos and defect classification. We then work with the supplier to arrange rework, replacement, or a negotiated resolution before shipment is approved.',
  },
  {
    q: 'Can you handle shipping and customs clearance?',
    a: 'Yes. We coordinate with vetted freight forwarders for sea, air, and express shipments. We prepare all export documentation and can recommend customs brokers in your country.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 7–14 days from inquiry to supplier shortlist. Sample production adds 2–4 weeks. Production time varies by product. We provide a timeline estimate at the start of each project.',
  },
  {
    q: 'Do you source from Alibaba or trade shows?',
    a: 'We use multiple channels including our existing verified network, Canton Fair, industry-specific trade shows, and direct factory outreach. We do not rely solely on Alibaba listings.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-150"
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-gray">
      <div className="container-xl">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers considering sourcing from China."
        />
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
