import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h1>
              <p className="mt-3 text-slate-600">Tell us about your sourcing needs and we will respond within 1 business day.</p>
              <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks for your inquiry. This is a demo form.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required placeholder="Your name" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
                  <input required type="email" placeholder="Work email" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Company" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
                  <input placeholder="Country" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
                </div>
                <input placeholder="Product category or item name" className="h-10 rounded-md border border-slate-200 px-3 text-sm w-full" />
                <textarea placeholder="Describe your sourcing needs, target price, order volume, and timeline" className="rounded-md border border-slate-200 px-3 py-2 text-sm w-full" rows="5" />
                <Button type="submit" size="lg" className="w-full md:w-auto">Get a Free Sourcing Quote</Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4" /> +86 10-8888-6666</li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4" /> info@ssourcingchina.com</li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4" /> Beijing, China</li>
                  <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4" /> Mon-Fri, 9:00-18:00 CST</li>
                  <li className="flex items-start gap-3"><Globe className="mt-0.5 h-4 w-4" /> Serving 30+ countries</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-slate-900">What happens after you contact us</h2>
                <ol className="mt-4 space-y-2 text-sm text-slate-700 list-decimal list-inside">
                  <li>We review your request within 1 business day.</li>
                  <li>We share a shortlist of relevant suppliers or next steps.</li>
                  <li>We propose a practical sourcing plan with timelines and costs.</li>
                  <li>You approve the plan and we begin execution.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
