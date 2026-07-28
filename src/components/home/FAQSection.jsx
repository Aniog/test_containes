import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a sourcing agent cost?',
    a: 'Our fees depend on the scope of work. For full-service sourcing, we typically charge a commission of 3-8% of the order value, or a fixed project fee for inspection-only services. Contact us for a customized quote based on your needs.',
  },
  {
    q: 'How do you ensure supplier reliability?',
    a: 'We physically visit every factory we recommend. Our audit covers business licenses, production capacity, quality management systems, export history, and on-site working conditions. We also check for any legal disputes or red flags.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQ varies by product and factory. We negotiate on your behalf to get the lowest possible MOQ. For new buyers, we can often arrange trial orders starting from 100-500 units depending on the product category.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 5-10 business days. Factory audits and sampling add 2-4 weeks. Full production lead time depends on product complexity, but we help you plan realistic timelines from the start.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate door-to-door shipping including sea freight, air freight, or express courier. We prepare all export documentation and can recommend customs brokers in your destination country.',
  },
  {
    q: 'What if the products arrive damaged or defective?',
    a: 'Our pre-shipment inspection catches most issues before shipping. If problems still occur, we work with the factory to arrange replacements, refunds, or compensation. We stand behind the quality of every order we manage.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container max-w-3xl">
        <div className="text-center">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Get answers to common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-base font-semibold text-navy-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
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
