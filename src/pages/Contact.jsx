import React from 'react';
import { Link } from 'react-router-dom';
import InquiryForm from '@/components/shared/InquiryForm';
import {
  Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2,
  Globe, Factory, ShieldCheck
} from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-3">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Tell us about your sourcing needs and we'll respond within 24 hours with a tailored proposal. No commitment required.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us Your Sourcing Request</h2>
              <InquiryForm sourcePage="contact" showCountry showService />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Email</p>
                    <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Phone</p>
                    <p className="text-sm text-slate-600">+86 755 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Office</p>
                    <p className="text-sm text-slate-600">Shenzhen, Guangdong, China</p>
                    <p className="text-xs text-slate-500 mt-1">Near Hong Kong border — convenient for factory visits across southern China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Business Hours</p>
                    <p className="text-sm text-slate-600">Mon-Fri: 9:00 - 18:00 (CST)</p>
                    <p className="text-sm text-slate-600">Sat: 10:00 - 15:00 (CST)</p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-base font-semibold text-navy-900 mb-4">Why Work With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Free initial consultation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Response within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">2,000+ verified suppliers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">On-the-ground team in China</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Confidential handling of your info</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
