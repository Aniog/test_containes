import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection only, or full-service management. We offer transparent, project-based pricing with no hidden fees. Contact us for a free quote tailored to your needs.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established brands managing multiple product lines. We can accommodate small MOQs and help you scale over time.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard product categories, we typically present a shortlist of qualified suppliers within 5–10 business days. Complex or highly specialized products may take longer.',
  },
  {
    q: 'Can you help with product development and customization?',
    a: 'Yes. We work with factories that offer OEM and ODM services. We can help you develop custom products, create samples, and manage the approval process before mass production.',
  },
  {
    q: 'What quality standards do your inspections follow?',
    a: 'Our inspections follow internationally recognized standards including AQL (Acceptable Quality Level) sampling. We check dimensions, functionality, packaging, labeling, and any client-specific requirements.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate with trusted freight forwarders for sea and air freight. We prepare all export documentation. Import customs clearance in your country is typically handled by your local customs broker, but we can recommend partners.',
  },
  {
    q: 'What happens if there is a quality problem after delivery?',
    a: 'We document all inspections thoroughly. If issues arise, we work with you and the supplier to resolve them — whether through replacement, credit, or rework. Our goal is to prevent problems before shipment.',
  },
];

export default function HomeFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-light-blue text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Answers to the most common questions from buyers new to China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-primary-dark pr-4">{faq.q}</span>
                {openIdx === idx
                  ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 bg-white">
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
