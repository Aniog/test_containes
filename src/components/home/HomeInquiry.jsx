import React from 'react';
import InquiryForm from '../common/InquiryForm';

const HomeInquiry = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 id="cta-title" className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Ready to Scale Your Sourcing?
            </h2>
            <p id="cta-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              Take the first step towards a more reliable supply chain. Fill out the form, and our sourcing experts will get back to you with a free consultation and quote.
            </p>
            
            <div className="mt-12 space-y-6">
              {[
                { title: 'Free Consultation', desc: 'Expert advice on your sourcing strategy.' },
                { title: 'Fast Quotations', desc: 'Receive supplier quotes quickly.' },
                { title: 'Secure & Transparent', desc: 'Full visibility throughout the process.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInquiry;
