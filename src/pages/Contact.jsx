import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us</h1>
            <p className="mt-4 text-slate-600">Tell us about your sourcing needs. We’ll review your requirements and respond with a practical next step.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+86 755 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Office</p>
                  <p className="text-sm text-slate-600">Shenzhen, China</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Languages</p>
                  <p className="text-sm text-slate-600">English / 中文</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Response time</p>
                  <p className="text-sm text-slate-600">Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you. This demo form does not send data.');
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Country</label>
                <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Product or sourcing need</label>
              <textarea required rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Estimated quantity</label>
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Preferred shipping terms</label>
              <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
                <option value="">Select an option</option>
                <option value="fob">FOB</option>
                <option value="cif">CIF</option>
                <option value="exw">EXW</option>
                <option value="other">Other / Not sure</option>
              </select>
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
