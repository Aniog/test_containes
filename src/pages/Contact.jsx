import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
            <p className="mt-4 text-slate-600 text-lg">
              Tell us about your sourcing needs. We will respond within 24 hours with a tailored proposal.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <form className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm" onSubmit={(e) => { e.preventDefault(); alert('Thank you. This is a demo form.'); }}>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-1">First Name</label>
                      <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-1">Last Name</label>
                      <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Company</label>
                    <input type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Email</label>
                    <input type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Phone / WhatsApp</label>
                    <input type="tel" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Product Category</label>
                    <select required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                      <option value="">Select a category</option>
                      <option>Electronics & Components</option>
                      <option>Home & Kitchen</option>
                      <option>Textiles & Apparel</option>
                      <option>Hardware & Tools</option>
                      <option>Gifts & Promotional</option>
                      <option>Toys & Recreation</option>
                      <option>Automotive Parts</option>
                      <option>Beauty & Personal Care</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Estimated Order Quantity</label>
                    <input type="text" placeholder="e.g. 5,000 units / 1 container" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Project Details</label>
                    <textarea rows="5" placeholder="Describe your product, target price range, and any specific requirements..." className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                    Submit Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our Privacy Policy. We will never share your information.
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <p className="text-slate-600">+86 579 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Office</p>
                      <p className="text-slate-600">Yiwu, Zhejiang, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Response Time</p>
                      <p className="text-slate-600">Within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">What happens next?</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    We review your requirements within 24 hours.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    We send a tailored sourcing proposal with timelines and costs.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    We schedule a call to discuss details and next steps.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
