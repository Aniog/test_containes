import ContactForm from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Fill out the form below and we'll save your message so we can
            follow up with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Email</p>
                    <p className="text-sm text-slate-500">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Phone</p>
                    <p className="text-sm text-slate-500">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Office</p>
                    <p className="text-sm text-slate-500">
                      123 Main Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                We typically respond within{' '}
                <span className="font-bold text-white">24 hours</span> on
                business days. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
