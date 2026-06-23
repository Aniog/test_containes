import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        eyebrow="Contact us"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. A specialist will respond within one business day with next steps and an indicative quotation."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-slate-900">Reach our team</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Prefer email or chat? Use any of the channels below.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                      <a href="mailto:hello@ssourcingchina.com" className="text-sm text-slate-600 hover:text-blue-600">
                        hello@ssourcingchina.com
                      </a>
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
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">WeChat</p>
                      <p className="text-sm text-slate-600">SSourcingChina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Office</p>
                      <p className="text-sm text-slate-600">Yiwu International Trade City, Zhejiang, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Hours</p>
                      <p className="text-sm text-slate-600">Mon–Sat, 09:00–18:00 (GMT+8)</p>
                      <p className="text-xs text-slate-500 mt-1">Reply within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-slate-900 text-slate-200 rounded-xl p-6 md:p-8">
                <h3 className="text-base font-semibold text-white">What to include in your request</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    Product description, materials, and reference links
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    Estimated quantity and target unit price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    Required certifications and destination market
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    Timeline and any prior supplier history
                  </li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
