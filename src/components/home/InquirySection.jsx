import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InquiryForm from '../InquiryForm';

const InquirySection = () => {
  return (
    <section id="inquiry" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
              Start your sourcing project
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Get a free sourcing quote
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Send us a brief description of what you want to source. A sourcing specialist
              will respond within one business day with next steps and an indicative quotation.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">hello@ssourcingchina.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone / WhatsApp</p>
                  <p className="text-sm text-slate-600">+86 138 0000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Office</p>
                  <p className="text-sm text-slate-600">Yiwu, Zhejiang, China</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Response time</p>
                  <p className="text-sm text-slate-600">Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
