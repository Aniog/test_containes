import React from 'react';
import { Globe, ShieldCheck, Truck, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Inquiry received. We will reply within 1 business day.');
    e.target.reset();
  };

  return (
    <div className="flex-1">
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Contact SSourcing China</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Tell us about your sourcing needs. We will reply within 1 business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900">Send an inquiry</h2>
              <p className="mt-1 text-sm text-slate-600">
                Include product details, target price, order volume, and timeline for a faster response.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-700">Name</label>
                    <Input name="name" required placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700">Email</label>
                    <Input name="email" type="email" required placeholder="you@company.com" className="mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">Company</label>
                  <Input name="company" placeholder="Company name" className="mt-1" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">Product category</label>
                  <Input name="category" placeholder="Electronics, furniture, textiles..." className="mt-1" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">Project details</label>
                  <Textarea name="details" rows={5} placeholder="Specs, target price, order volume, timeline..." className="mt-1" />
                </div>
                <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-slate-900" />
                    Guangzhou, China
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-slate-900" />
                    support@ssourcingchina.com
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-slate-900" />
                    +86 20 1234 5678
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="border-slate-200 bg-slate-50">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-slate-900">What happens next</h2>
                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">1</span>
                    We review your inquiry and reply within 1 business day.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">2</span>
                    We share a short proposal with scope, timeline, and fees.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">3</span>
                    We start sourcing, verification, inspection, or shipping support.
                  </li>
                </ol>
              </div>
            </Card>

            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-slate-900">Why buyers choose us</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-slate-900" /> Verified factory access
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="mt-0.5 h-4 w-4 text-slate-900" /> English-speaking support
                  </li>
                  <li className="flex items-start gap-2">
                    <Truck className="mt-0.5 h-4 w-4 text-slate-900" /> End-to-end logistics help
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default Contact;
