import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much do your sourcing services cost?',
    answer: 'We offer flexible pricing based on your project size and complexity. Our typical model includes a small upfront research fee plus a commission on the order value, or a flat monthly retainer for ongoing projects. Contact us for a custom quote.',
  },
  {
    question: 'How long does it take to find a suitable supplier?',
    answer: 'For standard products, we typically present 3-5 qualified suppliers within 5-7 business days. For complex or custom products, the timeline may extend to 2-3 weeks depending on the technical requirements.',
  },
  {
    question: 'Do you work with small businesses and startups?',
    answer: 'Yes, we work with businesses of all sizes. Whether you are placing a first-time small order or managing high-volume procurement, we tailor our services to match your needs and budget.',
  },
  {
    question: 'What regions in China do you cover?',
    answer: 'Our team is based in Shenzhen, Guangzhou, and Yiwu, giving us strong coverage across Guangdong, Zhejiang, Jiangsu, and Fujian provinces — the heart of China\'s manufacturing. We can also access suppliers in other regions as needed.',
  },
  {
    question: 'Can you help with custom product development?',
    answer: 'Absolutely. We assist with prototype development, mold creation, sample refinement, and managing the transition from sample to mass production. Our engineers work directly with factory R&D teams.',
  },
  {
    question: 'What is included in a factory verification report?',
    answer: 'Our verification reports include factory registration details, production capacity assessment, equipment inspection, quality management system review, social compliance check, and photos/videos from the visit.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg">
            Quick answers to common questions about our sourcing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
