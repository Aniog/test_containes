import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Search, FileText, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, Users, Shield, DollarSign } from 'lucide-react';
import { processSteps, faqItems } from '../data/content';
import { cn } from '../lib/utils';

const stepIcons = [Send, Search, FileText, ClipboardCheck, Truck];

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left hover:text-[#E67E22] transition-colors duration-200"
      >
        <span className="text-lg font-semibold pr-4">{item.question}</span>
        {isOpen ? (
          <CheckCircle className="w-5 h-5 text-[#E67E22] flex-shrink-0" />
        ) : (
          <CheckCircle className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-[#6B7280] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Sourcing Process
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Our 5-step process makes sourcing from China straightforward. From your initial inquiry to final delivery, we handle every detail professionally.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Start Your Sourcing Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const IconComponent = stepIcons[index] || CheckCircle;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={cn(
                    'grid lg:grid-cols-2 gap-8 items-center',
                    !isEven && 'lg:flex-row-reverse'
                  )}
                >
                  {/* Visual */}
                  <div className={cn(!isEven && 'lg:order-2')}>
                    <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB] rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute top-4 right-4 w-20 h-20 bg-[#E67E22]/10 rounded-full" />
                      <div className="relative">
                        <div className="w-20 h-20 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mb-6">
                          <span className="text-3xl font-bold text-white">{step.step}</span>
                        </div>
                        <IconComponent className="w-16 h-16 text-[#1E3A5F]/30" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={cn(!isEven && 'lg:order-1')}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
                      Step {step.step}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-[#6B7280]">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-[#6B7280]">
              We believe in transparency. Here is what you can expect when working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: 'Quick Response',
                description: 'We respond to inquiries within 24 hours and keep you updated throughout the process.',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'You get a dedicated account manager who knows your project and is always available.',
              },
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Our verification and QC processes minimize risks and protect your investment.',
              },
              {
                icon: DollarSign,
                title: 'Cost Transparency',
                description: 'No hidden fees. We provide clear quotes and keep you informed of any changes.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#E67E22]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#E67E22]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Header */}
            <div>
              <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Find answers to questions about our process. Still have questions? Contact us directly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8">
              {faqItems.slice(0, 4).map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#E67E22] to-[#D35400]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote. Tell us about your product needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-all duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;