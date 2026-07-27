import React from 'react';

const HomeFAQ = () => {
  const faqs = [
    { q: "Do you charge a monthly fee?", a: "No, we don't have subscription fees. We offer flexible service fees based on your order value or specific service needs (like one-off inspections)." },
    { q: "Which cities in China do you cover?", a: "Our team is strategically located to cover major manufacturing hubs including Shenzhen, Guangzhou, Dongguan, Ningbo, and Yiwu." },
    { q: "Can you help with Amazon FBA?", a: "Yes, we specialize in high-standard QC for FBA sellers and can coordinate direct labeling and shipping to Amazon warehouses worldwide." },
    { q: "How do you handle supplier payments?", a: "We provide secure escrow-like payment coordination, ensuring manufacturers only receive final payment after your quality approval." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center italic">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-3">Q: {faq.q}</h3>
              <p className="text-slate-600 leading-relaxed font-light">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
