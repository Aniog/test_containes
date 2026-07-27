import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQSection = ({ title = "Frequently Asked Questions", subtitle = "Find answers to common questions about our China sourcing services." }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I get started with SSourcing China?',
      answer: 'Simply fill out our inquiry form with your product requirements, including details about the product, quantities, target prices, and any specific needs. We will review your request and get back to you within 24 hours with initial recommendations and a quote for our services.'
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on the services you need and the complexity of your order. We offer transparent pricing with no hidden costs. Generally, our service fees are structured as a percentage of the order value or a fixed project fee, depending on the scope of work. Contact us for a personalized quote based on your specific requirements.'
    },
    {
      question: 'How do you verify factories?',
      answer: 'We conduct thorough on-site audits that include business license verification, factory existence confirmation, production capacity assessment, quality control systems review, equipment and workforce evaluation, and certification authenticity checks. We provide you with detailed reports including photos and findings.'
    },
    {
      question: 'Can you handle shipping to my country?',
      answer: 'Yes, we coordinate all aspects of international shipping including freight forwarding by sea, air, or express, customs documentation preparation, import/export clearance handling, cargo tracking, insurance arrangement, and can coordinate door-to-door delivery to most countries worldwide.'
    },
    {
      question: 'What if quality issues arise?',
      answer: 'Our quality control process is designed to prevent issues before products ship. If problems do occur, we work with the factory to resolve them promptly. Our documentation and inspection reports support claims when necessary, helping you get corrections or compensation as appropriate.'
    },
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer: 'MOQ requirements vary by factory and product. Most factories have MOQs ranging from 500-2,000 units per design/color. Some factories offer lower MOQs for a premium price. We will help you find factories that match your order size and can often negotiate flexible MOQs for the right orders.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies by product complexity and requirements. Generally: initial response within 24 hours, supplier matching takes 1-2 weeks, samples require 1-3 weeks, production varies from 2-8 weeks depending on order size, and shipping takes 2-6 weeks depending on destination and shipping method.'
    },
    {
      question: 'Do you offer sample services?',
      answer: 'Yes, we fully support sample management. We coordinate sample requests from factories, receive and assess sample quality, handle modification requests, arrange sample shipping, and facilitate your approval process. Sample costs and shipping are typically paid by the buyer.'
    },
    {
      question: 'What payment terms do factories typically require?',
      answer: 'Standard payment terms are usually 30% deposit to start production and 70% balance before shipment. We recommend using secure payment methods and can advise on escrow services. We do not recommend paying 100% upfront to unverified suppliers.'
    },
    {
      question: 'Can you help with product development and design?',
      answer: 'While we specialize in sourcing, we can connect you with factories that offer ODM (Original Design Manufacturing) services or work with design firms. We can also help coordinate technical specifications and prototype development through our partner facilities.'
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#64748B] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#1E293B] pr-4">{faq.question}</span>
                <ChevronRight 
                  className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
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
