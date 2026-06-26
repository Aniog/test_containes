import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InquiryForm from '../components/shared/InquiryForm';

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your sourcing needs. We will review your request and reply within one business day with a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
              <p className="mt-2 text-slate-600">
                Fill out the form and we will get back to you. For urgent inquiries, you can also reach us directly using the contact details below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">+86 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Office</p>
                    <p className="text-sm text-slate-600">Shanghai, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Business Hours</p>
                    <p className="text-sm text-slate-600">Monday - Friday, 9:00 AM - 6:00 PM (China Standard Time)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <InquiryForm source="contact_page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
