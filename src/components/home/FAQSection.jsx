import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a multi-step process: initial screening through our database and industry networks, verification of business licenses and certifications, on-site factory audits to confirm production capacity and quality systems, and reference checks with existing clients. Only suppliers that pass all stages are recommended to our buyers.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with a detailed cost breakdown before you commit. Typical fees include a sourcing fee (percentage of order value), inspection fees (per visit), and shipping coordination fees. We always provide a clear quote upfront with no hidden costs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier sourcing typically takes 1-2 weeks. Sample production and shipping adds 2-4 weeks. Mass production timelines vary by product complexity and order size, usually 30-60 days. We provide realistic timelines upfront and keep you updated throughout the process.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities (MOQs), we can often negotiate lower MOQs or find factories that accommodate smaller orders. We\'ll be transparent about MOQ requirements during the sourcing phase.',
  },
  {
    question: 'What if there are quality issues with my order?',
    answer: 'Quality issues are caught through our inspection process before shipment. If issues are found, we work with the factory to resolve them before goods leave China. Our pre-shipment inspection is your final checkpoint — you approve the goods before we release payment to the factory.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end shipping coordination including freight forwarding, customs documentation, and delivery to your warehouse. We work with trusted logistics partners and can arrange both sea and air freight depending on your needs and timeline.',
  },
  {
    question: 'How do you communicate during the process?',
    answer: 'We provide regular updates via email, WhatsApp, or your preferred communication channel. You\'ll receive a dedicated project manager who speaks both English and Chinese. We share photos, videos, and inspection reports at every key stage.',
  },
  {
    question: 'Is my product design and IP protected?',
    answer: 'Yes. We sign NDAs with all parties involved and can help you set up NDAs with factories. We also advise on IP registration in China and recommend strategies to protect your designs and trademarks.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="section-header">
          <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
          <p id="faq-subtitle" className="section-subtitle">
            Answers to common questions about our sourcing services.
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
