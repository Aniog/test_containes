import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, QC inspection, full project management, etc. We offer a free initial consultation and provide a clear quote before any work begins. There are no hidden fees.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of qualified suppliers within 5–10 business days. Complex or highly specialized products may take longer. We\'ll give you a realistic timeline upfront.',
  },
  {
    q: 'Can you work with my existing Chinese supplier?',
    a: 'Yes. If you already have a supplier, we can conduct an audit, manage QC inspections, or handle production follow-up without replacing your existing relationship.',
  },
  {
    q: 'What is your minimum order value?',
    a: 'We work with buyers at various scales. While we don\'t have a strict minimum, our services are most cost-effective for orders above USD 5,000. Contact us to discuss your specific situation.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate with trusted freight forwarders and can assist with export documentation, packing lists, and commercial invoices. We do not act as a licensed customs broker but can recommend partners.',
  },
  {
    q: 'How do you ensure supplier reliability?',
    a: 'We verify business licenses, export records, certifications, and conduct on-site factory visits. We also check references and review production samples before recommending any supplier.',
  },
  {
    q: 'What happens if there is a quality problem?',
    a: 'If a quality issue is identified during our inspection, we work with the supplier to resolve it before shipment. If a problem arises after delivery, we help you communicate with the supplier and negotiate a resolution.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-brand-light transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-brand-dark text-sm md:text-base">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-mid flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-brand-mid text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-mid text-lg">
            Answers to the most common questions from buyers considering China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
