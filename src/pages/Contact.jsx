import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import InquiryForm from "@/components/shared/InquiryForm";

export default function Contact() {
  return (
    <div>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to start sourcing from China? Fill out the form below or reach out directly. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 md:p-10">
                <h2 className="text-xl font-bold text-navy-900 mb-2">Send Us an Inquiry</h2>
                <p className="text-slate-600 text-sm mb-6">
                  Describe your sourcing needs and we will get back to you with a free plan and quotation.
                </p>
                <InquiryForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                <h3 className="text-base font-bold text-navy-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-navy-700" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                      <div className="text-sm text-slate-700 font-medium">info@ssourcingchina.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy-100 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-navy-700" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Phone</div>
                      <div className="text-sm text-slate-700 font-medium">+86 755 1234 5678</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-navy-700" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Office</div>
                      <div className="text-sm text-slate-700 font-medium">
                        Block A, Futian District<br />Shenzhen, Guangdong, China
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy-100 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-navy-700" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Business Hours</div>
                      <div className="text-sm text-slate-700 font-medium">
                        Mon - Fri: 9:00 AM - 6:00 PM CST
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-navy-800 rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-teal-400" />
                  <h3 className="text-base font-bold">Response Guarantee</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We respond to all inquiries within 24 hours during business days. For urgent requests, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
