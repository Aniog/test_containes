import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import InquiryForm from "@/components/contact/InquiryForm";

export default function Contact() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Tell us what you need and we will respond within 24 hours with a
              free sourcing proposal. No upfront fees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get a Free Sourcing Quote
              </h2>
              <InquiryForm embedded />
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a
                        href="mailto:hello@ssourcingchina.com"
                        className="text-slate-600 hover:text-brand-800"
                      >
                        hello@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Phone / WhatsApp</p>
                      <a
                        href="tel:+8613800138000"
                        className="text-slate-600 hover:text-brand-800"
                      >
                        +86 138 0013 8000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Office</p>
                      <p className="text-slate-600">
                        Shenzhen, Guangdong, China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Response Time</p>
                      <p className="text-slate-600">
                        Within 24 hours on business days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-brand-800 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Languages</p>
                      <p className="text-slate-600">English, Chinese</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-800 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    We review your inquiry within 24 hours.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-800 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    We may ask clarifying questions via email or call.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand-800 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    You receive a free sourcing proposal with next steps.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
