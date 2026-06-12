import InquiryForm from '../shared/InquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function HomeInquiry() {
  return (
    <section id="inquiry" className="bg-brand text-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">
              Get a free sourcing quote
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              Tell us what you need to source from China
            </h2>
            <p className="mt-4 text-slate-200 text-lg leading-relaxed">
              Share your product, target price and quantity. A sourcing
              specialist will reply within one business day with shortlisted
              factories, indicative quotations and next steps.
            </p>

            <ul className="mt-8 space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent-500" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-300">Email</span>
                  <a className="font-medium hover:text-white" href="mailto:hello@ssourcing-china.com">
                    hello@ssourcing-china.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent-500" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-300">Phone / WhatsApp</span>
                  <span className="font-medium">+86 137 0000 0000</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent-500" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-300">Offices</span>
                  <span className="font-medium">Yiwu &amp; Shenzhen, China</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-accent-500" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-300">Response time</span>
                  <span className="font-medium">Within 1 business day</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="text-slate-900">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
