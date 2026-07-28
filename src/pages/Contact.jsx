import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import InquiryForm from '../components/InquiryForm.jsx';

const Contact = () => {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let us talk about your sourcing project
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Send us your requirements and we will reply within one business day with next steps and a free quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <InquiryForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-5">Contact details</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-light text-amber flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-navy">Email</span>
                      <a href="mailto:hello@ssourcingchina.com" className="text-slate-muted hover:text-amber transition-colors">
                        hello@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-light text-amber flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-navy">Phone</span>
                      <a href="tel:+8613812345678" className="text-slate-muted hover:text-amber transition-colors">
                        +86 138 1234 5678
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-light text-amber flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-navy">Office</span>
                      <span className="text-slate-muted">Guangzhou, Guangdong, China</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-light text-amber flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-navy">Response time</span>
                      <span className="text-slate-muted">Within 24 business hours</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-light text-amber flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-navy">Languages</span>
                      <span className="text-slate-muted">English and Chinese</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-cloud rounded-xl p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-slate-muted list-decimal list-inside">
                  <li>We review your product requirements.</li>
                  <li>We send a short list of questions if needed.</li>
                  <li>We provide a service proposal and quote.</li>
                  <li>You decide if you want to move forward.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
