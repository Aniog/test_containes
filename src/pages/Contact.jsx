import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const productCategories = [
  'Electronics & Components',
  'Textiles & Apparel',
  'Furniture & Home Goods',
  'Hardware & Industrial Parts',
  'Plastics & Packaging',
  'Promotional Items',
  'Auto Parts',
  'Medical Supplies',
  'Sports & Outdoor Equipment',
  'Other / Not Sure',
];

const Contact = () => {
  const containerRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    productDescription: '',
    orderVolume: '',
    targetPrice: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.name.trim() || !form.email.trim() || !form.productDescription.trim()) {
      setErrorMsg('Please fill in name, email, and product description at minimum.');
      return;
    }

    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setForm({
        name: '', email: '', company: '', phone: '',
        productCategory: '', productDescription: '', orderVolume: '', targetPrice: '', message: '',
      });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please email us directly at info@ssourcingchina.com');
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
    { icon: Phone, label: 'Phone', value: '+86 755 1234 5678' },
    { icon: MapPin, label: 'Office', value: 'Shenzhen, Guangdong, China' },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9:00 AM – 6:00 PM (CST)' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need. We'll respond within 24 hours with a preliminary assessment and quote — no obligation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions before submitting an inquiry? Reach out directly — we're happy to discuss your sourcing needs.
              </p>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <img
                alt="SSourcing China office in Shenzhen"
                className="rounded-xl shadow-md border border-gray-100 w-full mt-8 hidden lg:block"
                data-strk-img-id="contact-office-a1b2c3"
                data-strk-img="professional china sourcing office shenzhen business"
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-emerald-50 rounded-xl p-10 text-center border border-emerald-100">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-emerald-800 mb-3">Thank You for Your Inquiry!</h2>
                  <p className="text-emerald-700 leading-relaxed">
                    We have received your sourcing request. A dedicated project manager will review your requirements and get back to you within 24 hours with a preliminary assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                  <h2 className="text-xl font-bold text-navy mb-6">Sourcing Inquiry Form</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                        placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                        placeholder="Your company" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                        placeholder="+1 234 567 8900" />
                    </div>
                    <div>
                      <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1.5">Product Category</label>
                      <select id="productCategory" name="productCategory" value={form.productCategory} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white">
                        <option value="">Select category</option>
                        {productCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="orderVolume" className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Order Volume</label>
                      <input id="orderVolume" name="orderVolume" type="text" value={form.orderVolume} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                        placeholder="e.g., 5,000 units / month" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="targetPrice" className="block text-sm font-medium text-gray-700 mb-1.5">Target Price Range (per unit)</label>
                      <input id="targetPrice" name="targetPrice" type="text" value={form.targetPrice} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white"
                        placeholder="e.g., $5-8 USD per unit" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Product Description & Specifications <span className="text-red-500">*</span>
                      </label>
                      <textarea id="productDescription" name="productDescription" rows={4} required value={form.productDescription} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white resize-y"
                        placeholder="Describe your product in detail: dimensions, materials, key features, reference images links, required certifications, etc." />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
                      <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none bg-white resize-y"
                        placeholder="Any other requirements or questions?" />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <div className="mt-6">
                    <button type="submit" disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors disabled:opacity-70 text-base">
                      {status === 'submitting' ? (
                        <><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>
                      ) : (
                        <><Send className="w-5 h-5" />Submit Inquiry</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;