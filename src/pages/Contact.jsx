import React from 'react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  const faqs = [
    {
      q: 'How much does your service cost?',
      a: 'Our fees vary based on project scope. We typically charge a percentage of order value or a fixed project fee. Contact us for a quote based on your requirements.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier shortlisting takes 3-5 business days. Full projects including verification and samples typically take 4-8 weeks before production begins.',
    },
    {
      q: 'Do you work with buyers of all sizes?',
      a: 'We work with companies of various sizes. Minimum order quantities depend on the product and supplier. We can discuss your specific volume requirements.',
    },
    {
      q: 'What regions in China do you cover?',
      a: 'We work with suppliers across major manufacturing regions including Guangdong, Zhejiang, Jiangsu, Shandong, and others.',
    },
    {
      q: 'How do you handle quality issues?',
      a: 'We conduct inspections before shipment. If issues are identified, we work with the supplier to address them before goods are released.',
    },
    {
      q: 'Can you help with existing suppliers?',
      a: 'Yes, we can conduct verification audits, quality inspections, and production monitoring for suppliers you have already identified.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Tell us about your sourcing requirements. We will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Submit Your Inquiry</h2>
            <InquiryForm />
          </div>

          <div className="md:col-span-2">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="font-semibold text-slate-900 mb-6">Office Information</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium text-slate-700 mb-1">Shanghai Office</div>
                  <div className="text-slate-600">
                    Room 1208, Tower B<br />
                    1288 Pudong Avenue<br />
                    Shanghai 200135, China
                  </div>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-blue-800 hover:underline">
                    info@ssourcingchina.com
                  </a>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-1">Phone</div>
                  <div className="text-slate-600">+86 21 5888 0000</div>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-1">Business Hours</div>
                  <div className="text-slate-600">Monday - Friday, 9:00 - 18:00 (CST)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
