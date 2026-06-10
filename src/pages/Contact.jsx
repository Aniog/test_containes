import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import InquiryForm from "../components/InquiryForm";

const Contact = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you need to source. A sourcing manager will reply within one business day with a clear scope, fee, and proposed timeline."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Reach us directly</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Prefer email or messaging? Use any of the channels below — we reply within
                  one business day, China hours.
                </p>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <a
                      href="mailto:hello@ssourcing-china.com"
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      hello@ssourcing-china.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Phone / WhatsApp</div>
                    <p className="text-sm text-slate-600">+86 138 0000 0000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">WeChat</div>
                    <p className="text-sm text-slate-600">SSourcing-China</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Office</div>
                    <p className="text-sm text-slate-600">
                      Yiwu, Zhejiang, China
                      <br />
                      Visits by appointment
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Hours</div>
                    <p className="text-sm text-slate-600">
                      Mon–Fri, 09:00–18:00 China Standard Time (UTC+8)
                    </p>
                  </div>
                </li>
              </ul>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  Information is confidential
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Your inquiry details are never shared with anyone outside our small sourcing
                  team. We are happy to sign an NDA before any product details are exchanged.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
