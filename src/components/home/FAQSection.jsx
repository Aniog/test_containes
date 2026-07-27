import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How do you verify Chinese suppliers?',
    a: 'We conduct a multi-step verification process including business license checks, factory visits, production capacity assessment, certifications review, and reference checks from existing clients.',
  },
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'MOQ depends on the product and supplier. We work with buyers at various scales — from startups placing their first order to established importers with large volumes. We\'ll find suppliers that match your requirements.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees vary by service scope. We offer transparent pricing with no hidden charges. Contact us for a free consultation and we\'ll provide a clear quote based on your specific needs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines: supplier shortlisting takes 5–10 business days, factory audit 3–5 days, sample production 2–4 weeks, and mass production 30–60 days depending on the product.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate with trusted freight forwarders for sea and air freight, prepare all export documentation, and can assist with customs clearance arrangements in your country.',
  },
  {
    q: 'Can you source products not listed on your website?',
    a: 'Absolutely. Our team has experience across hundreds of product categories. If you have a specific product in mind, submit an inquiry and we\'ll assess feasibility and find suitable suppliers.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Common questions from buyers considering China sourcing.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors border-0"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-brand-dark text-sm pr-4">{faq.q}</span>
                {openIndex === idx
                  ? <ChevronUp className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                }
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
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
