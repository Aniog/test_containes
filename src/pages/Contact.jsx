import React from 'react';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">CONTACT</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              Let's discuss your sourcing project
            </h1>
            <p className="text-xl text-slate-300">
              Tell us what you are looking to source. We will review your requirements and respond within 1 business day with a preliminary assessment and proposed next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-x-12 gap-y-12">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Submit an inquiry</h2>
              <p className="text-slate-600">All fields marked with * are required. The more detail you provide, the more accurately we can assess your project.</p>
            </div>
            <InquiryForm />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <h3 className="font-semibold mb-6">Direct Contact</h3>

              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">EMAIL</div>
                  <a href="mailto:hello@ssourcingchina.com" className="text-slate-900 hover:underline">hello@ssourcingchina.com</a>
                </div>

                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">WHATSAPP / PHONE</div>
                  <a href="https://wa.me/861234567890" target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">+86 123 4567 890</a>
                </div>

                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">OFFICE</div>
                  <div className="text-slate-900">
                    Ningbo, Zhejiang<br />
                    China
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">BUSINESS HOURS</div>
                  <div className="text-slate-900">Monday – Friday<br />8:30 – 18:00 (China Time, UTC+8)</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
                We typically respond to inquiries within 1 business day. For urgent matters, please reach out via WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
