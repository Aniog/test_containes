import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do you help me find the best price?",
    answer: "We leverage our local network to find direct manufacturers instead of trading companies. We request quotes from multiple verified factories and negotiate based on local market insights to ensure you get the most competitive ex-factory price."
  },
  {
    question: "Do you charge a commission or a flat fee?",
    answer: "Our pricing is transparent. We offer both service-based packages (for one-time audits or inspections) and percentage-based sourcing management for long-term production. We'll provide a clear proposal based on your needs."
  },
  {
    question: "How do you ensure the quality of my goods?",
    answer: "We perform multi-stage inspections: Initial Production Check (IPC), During Production Check (DUPRO), and final Pre-Shipment Inspection (PSI). We use AQL international standards and provide detailed reports with photos and videos."
  },
  {
    question: "Can you help with Amazon FBA labeling?",
    answer: "Yes, we specialize in FBA prep. We can coordinate custom packaging, apply FNSKU labels, suffocation warning labels, and palletize your goods according to Amazon's strict requirements before shipping to the fulfillment centers."
  },
  {
    question: "Do you handle the customs clearance in my country?",
    answer: "We offer DDP (Delivered Duty Paid) shipping options for many regions (USA, EU, Australia, etc.), where we handle everything including freight, customs clearance, and local duties, delivering directly to your door."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden text-left">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-primary">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
