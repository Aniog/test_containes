import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Shipping',
    items: [
      { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available at checkout for an additional fee. All orders are shipped with tracking.' },
      { q: 'Do you ship internationally?', a: 'Yes! We offer free worldwide shipping on all orders. International delivery typically takes 7-14 business days depending on your location.' },
      { q: 'Can I track my order?', a: 'Once your order ships, you\'ll receive a confirmation email with a tracking number. You can also track your order in your account dashboard.' },
    ],
  },
  {
    category: 'Returns & Exchanges',
    items: [
      { q: 'What is your return policy?', a: 'We offer a 30-day hassle-free return policy. Items must be unworn, in original condition, and in their original packaging. Simply initiate a return from your account or contact our customer service team.' },
      { q: 'How do I exchange an item?', a: 'Exchanges are processed as a return followed by a new order. Return the original item and place a new order for the desired item. This ensures you get the item you want as quickly as possible.' },
      { q: 'Are gift sets eligible for returns?', a: 'Gift sets are eligible for exchange only. Individual items from a set cannot be returned separately.' },
    ],
  },
  {
    category: 'Product Care',
    items: [
      { q: 'How do I care for my gold plated jewelry?', a: 'Avoid contact with water, perfume, lotions, and chemicals. Store pieces in the provided pouch when not wearing. Clean gently with a soft, dry cloth.' },
      { q: 'Will the gold plating fade?', a: 'With proper care, our 18K gold plating will maintain its luster for years. Avoid wearing jewelry in the shower, pool, or while exercising to extend its life.' },
      { q: 'Are your pieces hypoallergenic?', a: 'Yes! All Velmora pieces are made with hypoallergenic materials. Our brass base is nickel-free, making our jewelry safe for sensitive skin.' },
    ],
  },
  {
    category: 'Sizing',
    items: [
      { q: 'How do I find my ring size?', a: 'Visit our size guide page for detailed instructions on measuring your finger at home. You can also visit a local jeweler for professional sizing.' },
      { q: 'Are necklace lengths adjustable?', a: 'Most of our necklaces feature an adjustable chain with a 2-inch extender, allowing you to customize the length to your preference.' },
    ],
  },
];

const HelpPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="velmora-serif text-3xl sm:text-4xl md:text-5xl text-[var(--velmora-dark)] mb-4">
            Help Center
          </h1>
          <p className="text-[var(--velmora-text-muted)] max-w-lg mx-auto">
            Find answers to common questions about shipping, returns, product care, and more.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-[var(--velmora-bg-alt)] rounded-lg p-6 sm:p-8 text-center mb-12 sm:mb-16">
          <h2 className="velmora-serif text-xl sm:text-2xl text-[var(--velmora-dark)] mb-3">
            Still need help?
          </h2>
          <p className="text-sm text-[var(--velmora-text-muted)] mb-6">
            Our customer care team is here for you Monday through Friday, 9am-6pm EST.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@velmora.com"
              className="velmora-btn-primary inline-flex"
            >
              Email Us
            </a>
            <button className="velmora-btn-outline inline-flex">
              Live Chat
            </button>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={section.category}>
              <h2 className="velmora-serif text-xl sm:text-2xl text-[var(--velmora-dark)] mb-4 pb-2 border-b border-[var(--velmora-border)]">
                {section.category}
              </h2>
              <div className="space-y-0">
                {section.items.map((item, itemIndex) => {
                  const globalIndex = `${sectionIndex}-${itemIndex}`;
                  return (
                    <div key={itemIndex} className="border-b border-[var(--velmora-border-light)]">
                      <button
                        onClick={() => toggleFaq(globalIndex)}
                        className="w-full flex items-center justify-between py-4 text-left group"
                      >
                        <span className="text-sm font-medium text-[var(--velmora-dark)] group-hover:text-[var(--velmora-accent)] transition-colors pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[var(--velmora-text-muted)] flex-shrink-0 transition-transform ${
                            openFaq === globalIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaq === globalIndex && (
                        <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
