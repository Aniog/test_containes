import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a one-time sourcing fee, per-unit inspection fees, and optional ongoing management retainers. We are transparent about all costs upfront.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple SKUs. We tailor our services to your order volume and budget.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct document verification (business license, export license, certifications) and on-site audits covering production capacity, workforce, equipment, and compliance. We provide a detailed audit report with photos.',
  },
  {
    q: 'What happens if the goods fail inspection?',
    a: 'If goods fail our pre-shipment inspection, we work with the factory to resolve defects before shipment. We document all issues and negotiate remedies — rework, replacement, or price adjustment — on your behalf.',
  },
  {
    q: 'Can you handle shipping and customs documentation?',
    a: 'Yes. We coordinate with licensed freight forwarders for sea, air, and express shipments. We prepare all required export documents including commercial invoices, packing lists, and certificates of origin.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 5–10 business days. Factory audits take 3–5 days. Sample development varies by product. Full production and shipping timelines depend on the product and order size — we provide realistic estimates upfront.',
  },
  {
    q: 'Do you have minimum order requirements?',
    a: 'We do not impose our own minimums. However, Chinese factories typically have their own MOQs, which vary by product. We help you negotiate MOQs and find suppliers willing to work with smaller initial orders.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-[#f4f6f9]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers considering China sourcing."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0d2340] text-sm pr-4">{faq.q}</span>
                {openIndex === index
                  ? <ChevronUp className="w-5 h-5 text-[#1a4f8a] flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
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
