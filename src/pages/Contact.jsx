import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Send, MessageSquare, Check } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import { client, getEntity, getErrorMessage } from '@/api/postgrest-client.js';
import strkImgConfig from '@/strk-img-config.json';

export default function Contact() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          product_industry: values.subject,
          project_details: values.message,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (submitError || response?.success === false) {
      setError(getErrorMessage(response, submitError));
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to start sourcing from China? Contact us for a free consultation and we will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">info@ssourcingchina.com</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-600">+86 136 1234 5678</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Office Address</h3>
                    <p className="text-gray-600">Room 1208, Tianhe Business Center</p>
                    <p className="text-gray-500 text-sm">Guangzhou, China 510000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Saturday: 9:00 AM - 12:00 PM (CST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-primary mb-3">Why Choose SSourcing China?</h3>
                <ul className="space-y-2">
                  {[
                    'Based in Guangzhou, China',
                    '10+ years sourcing experience',
                    '500+ buyers served globally',
                    'Free consultation & quote',
                    'Dedicated account manager',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-10">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been received. We will get back to you within 24 hours.</p>
                    <Button variant="accent" className="mt-6" onClick={() => setStatus('idle')}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input type="text" name="name" value={values.name} onChange={onChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                          <input type="text" name="company" value={values.company} onChange={onChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Your Company Ltd" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input type="email" name="email" value={values.email} onChange={onChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="john@company.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" name="phone" value={values.phone} onChange={onChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="+1 234 567 8900" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                          <select name="subject" value={values.subject} onChange={onChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white">
                            <option value="">Select a subject</option>
                            <option value="sourcing">New Sourcing Project</option>
                            <option value="inspection">Quality Inspection Request</option>
                            <option value="verification">Supplier Verification</option>
                            <option value="shipping">Shipping & Logistics Inquiry</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                          <textarea rows={5} name="message" value={values.message} onChange={onChange} required className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none" placeholder="Tell us about your project, requirements, and any questions you have..." />
                        </div>
                      </div>
                      <div className="mt-8">
                        <Button variant="accent" size="lg" type="submit" disabled={status === 'submitting'}>
                          {status === 'submitting' ? 'Sending...' : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                        <p className="text-gray-400 text-sm mt-3">We respect your privacy. Your information will never be shared.</p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Location</h2>
            <p className="text-gray-600">Based in Guangzhou, the manufacturing and trading hub of Southern China.</p>
          </div>
          <div className="aspect-[21/9] bg-gray-200 rounded-lg overflow-hidden max-w-5xl mx-auto">
            <div
              data-strk-bg-id="contact-map-3d4e5f"
              data-strk-bg="[map-title]"
              data-strk-bg-ratio="21x9"
              data-strk-bg-width="1200"
              className="w-full h-full bg-cover bg-center"
            />
            <span id="map-title" className="hidden">Guangzhou China business district</span>
          </div>
        </div>
      </section>
    </div>
  );
}