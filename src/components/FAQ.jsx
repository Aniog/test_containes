import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do you charge for your services?',
    a: 'We work on a transparent commission or project fee basis. There are no upfront payments required to begin supplier identification. Fees are only due after you approve a supplier and place an order, or on a fixed project basis for verification and inspection work.',
  },
  {
    q: 'How do you verify factories?',
    a: 'We conduct on-site visits, review business licenses and export records, assess production capabilities, quality systems, and financial stability. We provide detailed reports with photos and findings before you commit.',
  },
  {
    q: 'Can you handle quality control and inspections?',
    a: 'Yes. We offer pre-production, in-line, and final random inspections using AQL standards. We can also manage third-party lab testing when required.',
  },
  {
    q: 'Do you only work with large orders?',
    a: 'No. We support both small and medium businesses as well as larger importers. Minimum order quantities vary by product and supplier; we help you find options that match your volume requirements.',
  },
  {
    q: 'How long does the sourcing process usually take?',
    a: 'Initial supplier shortlisting typically takes 2–4 weeks. Full verification, sampling, and first order production can take 8–16 weeks depending on product complexity and your timeline.',
  },
  {
    q: 'Can you help with shipping and logistics?',
    a: 'We coordinate with freight forwarders, manage documentation, and can arrange door-to-door or port-to-port shipping. We also assist with customs documentation and compliance requirements.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span>{faq.q}</span>
              <span className="text-xl text-slate-400 select-none">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
