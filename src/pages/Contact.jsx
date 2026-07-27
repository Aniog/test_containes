import React from 'react';
import { Link } from 'react-router-dom';
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
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Full Name *</label>
                    <input type="text" className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Company Name</label>
                    <input type="text" className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="Your Company" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Email Address *</label>
                    <input type="email" className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="+1 234 567 890" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Country *</label>
                  <select className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900">
                    <option value="">Select your country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Netherlands</option>
                    <option>Japan</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Product You Want to Source *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="e.g. Stainless steel water bottles, CNC machines, LED panels" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Estimated Quantity</label>
                    <select className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900">
                      <option value="">Select range</option>
                      <option>1 - 500 units</option>
                      <option>500 - 5,000 units</option>
                      <option>5,000 - 50,000 units</option>
                      <option>50,000+ units</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Service Needed</label>
                    <select className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900">
                      <option value="">Select service</option>
                      <option>Supplier Sourcing</option>
                      <option>Factory Verification</option>
                      <option>Quality Inspection</option>
                      <option>Full-Service Sourcing</option>
                      <option>Shipping Coordination</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Additional Details</label>
                  <textarea rows={4} className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900" placeholder="Tell us more about your requirements, target price, quality standards, timeline, etc." />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors border-none cursor-pointer"
                >
                  Submit Your Sourcing Request
                </button>
                <p className="text-xs text-slate-500 text-center">
                  We'll respond within 24 hours on business days. Your information is kept confidential.
                </p>
              </form>
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
