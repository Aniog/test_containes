import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Contact</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Tell us about your sourcing needs and we will prepare a practical quote and timeline. For urgent requests, call or email us directly.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Send an inquiry</h2>
              <p className="mt-2 text-sm text-slate-600">Fill out the form below and we will respond within 1-2 business days.</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you. This is a demo form.'); }}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Full name</label>
                    <input required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Company</label>
                    <input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone / WhatsApp</label>
                    <input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Product category</label>
                  <select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none">
                    <option value="">Select a category</option>
                    <option>Consumer Electronics</option>
                    <option>Home and Kitchen</option>
                    <option>Industrial and Hardware</option>
                    <option>Packaging and Labels</option>
                    <option>Textiles and Apparel</option>
                    <option>Beauty and Personal Care</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Project details</label>
                  <textarea required rows="5" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none" placeholder="Share product specs, target price, quantity, timeline, and any special requirements." />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" size="lg">Submit inquiry</Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:info@ssourcingchina.com">Email us directly</a>
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Contact details</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-slate-900" /> +86 10 XXXX XXXX</li>
                  <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-slate-900" /> info@ssourcingchina.com</li>
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-slate-900" /> Beijing, China</li>
                  <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-slate-900" /> Monday - Friday, 9:00 - 18:00 CST</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">What happens next</h3>
                <ol className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>1. We review your inquiry within 1-2 business days.</li>
                  <li>2. We may ask clarifying questions about specs, quantity, and timeline.</li>
                  <li>3. We prepare a practical sourcing plan and quote.</li>
                  <li>4. You approve the plan and we begin sourcing.</li>
                </ol>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Before you contact us</h3>
                <p className="mt-2 text-sm text-slate-600">To help us respond faster, please share product specifications, target price range, quantity, and shipping destination if available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
