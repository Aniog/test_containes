import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600">
              Tell us about your sourcing project. We typically respond within one business day with a preliminary assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Request a Sourcing Quote</h2>
            <InquiryForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="card bg-slate-50 border-slate-200">
              <h3 className="font-semibold text-lg text-slate-900 mb-5">Direct Contact</h3>
              
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-700 hover:text-slate-900">info@ssourcingchina.com</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <a href="tel:+8657985588888" className="text-slate-700 hover:text-slate-900">+86 579 8558 8888</a>
                    <div className="text-xs text-slate-500 mt-0.5">Mon–Fri, 8:30am–6:00pm China Time</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Office</div>
                    <div className="text-slate-700">Yiwu, Zhejiang, China</div>
                    <div className="text-xs text-slate-500 mt-0.5">We also travel regularly to Guangzhou, Ningbo, and Shanghai.</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Response Time</div>
                    <div className="text-slate-700">We aim to respond to all inquiries within 24 business hours.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-600">
                <p className="mb-2"><strong>What to include in your inquiry:</strong></p>
                <ul className="space-y-1">
                  <li>• Product description or specifications</li>
                  <li>• Target quantity or order frequency</li>
                  <li>• Quality standards or certifications required</li>
                  <li>• Target timeline and destination country</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              This website is for informational purposes. Submitting an inquiry does not create a client relationship. All engagements are subject to a written scope and fee agreement.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;