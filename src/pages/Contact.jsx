import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      product: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to start your China sourcing project? Get in touch for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-slate-900">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-slate-900">Phone</h3>
                    <a href="tel:+8613800000000" className="text-slate-600 hover:text-slate-900">
                      +86 138 0000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-slate-900">Office</h3>
                    <p className="text-slate-600">
                      Shenzhen, China<br />
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-slate-900">Response Time</h3>
                    <p className="text-slate-600">
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Free, no-obligation consultation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Customized sourcing proposal
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Transparent pricing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    Expert advice on your product
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800">
                      Thank you for your inquiry! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                        Country *
                      </label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                      Product(s) You Want to Source *
                    </label>
                    <Input
                      id="product"
                      name="product"
                      type="text"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g., Electronics, Textiles, Home Goods"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Tell Us About Your Requirements
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your product requirements, target price, quality standards, estimated quantity, and timeline..."
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-slate-600">
                        I agree to the{' '}
                        <a href="#" className="text-slate-900 underline">
                          Privacy Policy
                        </a>{' '}
                        and consent to being contacted about my inquiry.
                      </label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Location</h2>
            <p className="text-lg text-slate-600">
              Based in Shenzhen, the heart of China's manufacturing industry
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-200 aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Shenzhen, China</p>
              <p className="text-sm text-slate-500">Gateway to China's manufacturing hubs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
