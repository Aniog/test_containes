import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      category: 'Orders & Shipping',
      icon: '📦',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'We offer free worldwide shipping on all orders. Standard shipping takes 5-7 business days within the US, and 7-14 business days internationally. Express shipping options are available at checkout.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes! We ship to most countries worldwide. International customers may be responsible for customs duties and taxes based on their local regulations.'
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive a confirmation email with a tracking number. You can use this to track your package on our carrier\'s website.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      icon: '↩️',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return policy. Items must be returned in their original packaging, unused, and in resalable condition. Custom or personalized items cannot be returned unless defective.'
        },
        {
          q: 'How do I initiate a return?',
          a: 'To start a return, email us at help@velmora.com with your order number and reason for return. We\'ll provide you with a return shipping label and instructions.'
        },
        {
          q: 'Can I exchange an item?',
          a: 'Yes! We\'re happy to exchange items for a different size or style. Contact us within 30 days of receiving your order to arrange an exchange.'
        }
      ]
    },
    {
      category: 'Product Care',
      icon: '✨',
      questions: [
        {
          q: 'How do I care for my jewelry?',
          a: 'To keep your Velmora pieces looking their best: Avoid contact with water, perfume, lotions, and chemicals. Store in a cool, dry place away from direct sunlight. Clean gently with a soft jewelry cloth. Remove before sleeping, exercising, or swimming.'
        },
        {
          q: 'Is your jewelry hypoallergenic?',
          a: 'Yes! All our jewelry is nickel-free and hypoallergenic. We use 18k gold plating over high-quality brass, which is safe for sensitive skin.'
        },
        {
          q: 'Will the gold plating fade?',
          a: 'With proper care, our 18k gold plating is designed to last. However, like all gold-plated jewelry, the plating may gradually fade over time depending on wear and care. This is normal and not considered a defect.'
        }
      ]
    },
    {
      category: 'Sizing & Fit',
      icon: '🤚',
      questions: [
        {
          q: 'How do I know my ring size?',
          a: 'We provide a comprehensive ring size guide on our website. You can also visit a local jeweler to get professionally measured. We recommend measuring at the end of the day when fingers are at their largest.'
        },
        {
          q: 'What if my jewelry doesn\'t fit?',
          a: 'If your item doesn\'t fit, we\'re happy to exchange it for the correct size within 30 days of purchase. The item must be unused and in original packaging.'
        },
        {
          q: 'Are your huggies adjustable?',
          a: 'Our huggies are designed with a secure hinged closure that fits most ear sizes comfortably. If you have concerns about sizing, please contact us before ordering.'
        }
      ]
    },
    {
      category: 'Materials & Quality',
      icon: '⚖️',
      questions: [
        {
          q: 'What materials do you use?',
          a: 'We use 18k gold plating over high-quality brass. All pieces are nickel-free, lead-free, and hypoallergenic. Our crystals are ethically sourced and hand-set for maximum sparkle.'
        },
        {
          q: 'Is your jewelry waterproof?',
          a: 'While our jewelry is high-quality, we recommend avoiding prolonged exposure to water. Remove your jewelry before swimming, showering, or washing hands to maintain the gold plating.'
        },
        {
          q: 'Do you offer solid gold options?',
          a: 'Currently, we specialize in demi-fine jewelry with 18k gold plating. This allows us to offer luxury-quality pieces at accessible price points. We may introduce solid gold in the future!'
        }
      ]
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Frequently Asked Questions
          </h1>
          <div className="hairline w-24 mx-auto mb-6" />
          <p className="text-velmora-warmGray max-w-2xl mx-auto">
            Can't find what you're looking for?{' '}
            <Link to="/help" className="text-velmora-gold hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section, idx) => {
            return (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-premium">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-velmora-cream rounded-full flex items-center justify-center text-2xl">
                    {section.icon}
                  </div>
                  <h2 className="font-serif text-2xl font-medium">
                    {section.category}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.questions.map((faq, qIdx) => (
                    <details key={qIdx} className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none p-4 bg-velmora-cream/50 rounded-lg hover:bg-velmora-cream transition-colors">
                        <span className="font-medium text-velmora-charcoal pr-4">
                          {faq.q}
                        </span>
                        <HelpCircle 
                          size={20} 
                          className="text-velmora-gold flex-shrink-0 group-open:rotate-180 transition-transform duration-300" 
                        />
                      </summary>
                      <div className="px-4 py-6 text-velmora-warmGray leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-velmora-charcoal text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Our customer care team is here to help. Reach out to us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/help" className="btn-primary bg-white text-velmora-charcoal hover:bg-velmora-cream">
              Contact Support
            </Link>
            <Link to="/shop" className="btn-secondary border-white text-white hover:bg-white/10">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
