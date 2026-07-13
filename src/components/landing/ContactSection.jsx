import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact us
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in touch</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-5">Contact information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-slate-800">hello@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm font-medium text-slate-800">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Office</p>
                    <p className="text-sm font-medium text-slate-800">123 Main St, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-2">Response time</h4>
              <p className="text-indigo-100 text-sm leading-relaxed">
                We typically respond within 24 hours on business days. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
