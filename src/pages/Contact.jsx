import React from 'react';
import SectionHeader from '../components/SectionHeader';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">Contact</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Get a free sourcing assessment</h1>
            <p className="text-lg text-slate-600">Tell us about your product and requirements. A sourcing specialist will respond within 1 business day with a preliminary assessment and recommended next steps.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <InquiryForm />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-7">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-slate-700 mb-0.5">Office</div>
                  <div className="text-slate-600">Shanghai, China</div>
                  <div className="text-slate-600">Mon–Fri 9:00–18:00 (GMT+8)</div>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-0.5">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-sky-700 hover:underline">info@ssourcingchina.com</a>
                </div>
                <div>
                  <div className="font-medium text-slate-700 mb-0.5">WhatsApp / WeChat</div>
                  <a href="https://wa.me/8613812345678" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">+86 138 1234 5678</a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 text-sm text-slate-600">
                <div className="font-medium text-slate-700 mb-2">What to include in your inquiry</div>
                <ul className="space-y-1">
                  <li>• Product description and specifications</li>
                  <li>• Target price range and annual volume</li>
                  <li>• Required certifications or testing</li>
                  <li>• Destination country and delivery terms</li>
                  <li>• Timeline for first order</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 text-xs text-slate-500">
              We do not share your information with third parties. All inquiries are reviewed by our sourcing team.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
