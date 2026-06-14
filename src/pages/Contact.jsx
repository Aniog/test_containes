import React from 'react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">GET IN TOUCH</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your sourcing requirements. We will respond within one business day with a preliminary assessment and suggested next steps.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <div className="sticky top-20">
            <h2 className="font-semibold text-xl text-slate-900 mb-4">SSourcing China</h2>
            
            <div className="space-y-6 text-sm text-slate-600">
              <div>
                <div className="font-medium text-slate-700 mb-1">Office</div>
                <div>Room 1208, Building 3<br />No. 88 Keyuan Road<br />Pudong New Area, Shanghai 201203<br />China</div>
              </div>

              <div>
                <div className="font-medium text-slate-700 mb-1">Email</div>
                <a href="mailto:info@ssourcingchina.com" className="text-blue-700 hover:underline">info@ssourcingchina.com</a>
              </div>

              <div>
                <div className="font-medium text-slate-700 mb-1">Phone</div>
                <a href="tel:+862161234567" className="text-blue-700 hover:underline">+86 21 6123 4567</a>
              </div>

              <div>
                <div className="font-medium text-slate-700 mb-1">Business Hours</div>
                <div>Monday – Friday<br />8:30 – 18:00 China Standard Time</div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                We work with buyers in North America, Europe, Australia, and Southeast Asia. English-speaking project managers are available for all client communications.
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="font-semibold text-lg mb-1">Send Us Your Requirements</h3>
            <p className="text-sm text-slate-600 mb-6">Complete the form below. All information is treated as confidential.</p>
            <InquiryForm />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-300">
          We do not charge for initial consultations or preliminary supplier assessments. Fees are discussed only after we understand your requirements and you decide to proceed.
        </div>
      </div>
    </div>
  );
};

export default Contact;
