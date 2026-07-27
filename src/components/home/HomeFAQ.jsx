import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, full project management, or inspection services. We offer a free initial consultation and quote. Most clients find our fees are offset by the savings we negotiate with suppliers.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple SKUs. We tailor our service to your order volume and budget.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 1–2 weeks. Factory audits and sample rounds add another 2–4 weeks. Total time from brief to confirmed supplier is usually 4–6 weeks, depending on product complexity.',
  },
  {
    q: 'Can you help if I already have a supplier?',
    a: 'Absolutely. We can conduct a factory audit on your existing supplier, manage quality inspections, or simply handle production follow-up and shipping coordination.',
  },
  {
    q: 'What regions of China do you cover?',
    a: 'We operate across all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. Our QC team can reach most factories within 24–48 hours.',
  },
  {
    q: 'Do you handle customs and import documentation?',
    a: 'We coordinate with freight forwarders and can assist with export documentation from the China side. For import customs in your country, we recommend working with a licensed customs broker.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill in our sourcing inquiry form with your product details and requirements. We\'ll review your brief and get back to you within 24 hours with a proposed approach and fee estimate.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-brand-dark pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-mid flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-brand-mid text-sm leading-relaxed border-t border-brand-border bg-gray-50">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-label">Common Questions</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Answers to the questions we hear most often from buyers considering China sourcing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
