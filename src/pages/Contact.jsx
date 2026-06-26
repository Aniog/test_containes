import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  Globe2,
  Send,
} from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      product: form.product.value.trim(),
      message: form.message.value.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setError('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    try {
      // In a real app, this would be an API call.
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      form.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contact us</h1>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your sourcing needs. We will reply within 1 business day with a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Send us an inquiry</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in the form and we will get back to you with a tailored response.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-900">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-900">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-900">
                      Company
                    </label>
                    <Input id="company" name="company" placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="product" className="mb-1 block text-sm font-medium text-slate-900">
                      Product category
                    </label>
                    <Input id="product" name="product" placeholder="e.g. electronics, furniture" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-900">
                    Project details <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Share product specs, target quantity, budget, and timeline."
                  />
                </div>
                {status === 'error' && error && (
                  <p className="text-sm text-red-600" role="alert">{error}</p>
                )}
                {status === 'success' && (
                  <p className="text-sm text-green-700" role="status">
                    Thank you. Your inquiry has been received. We will reply within 1 business day.
                  </p>
                )}
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Contact details</h3>
                <ul className="mt-4 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div>info@ssourcingchina.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-slate-900">Phone / WeChat</div>
                      <div>+86 755-1234-5678</div>
                      <div>WeChat: SSourcingChina</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-slate-900">Office</div>
                      <div>Shenzhen, China</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-slate-900">Response time</div>
                      <div>Within 1 business day</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">What to expect</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    A reply within 1 business day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    Clear next steps and estimated timeline
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    Confidential handling of your product details
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    No commitment required to continue
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                  <Globe2 className="h-4 w-4 text-blue-600" />
                  Serving buyers worldwide
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  We support clients across North America, Europe, Australia, and Asia with English as the primary working language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
