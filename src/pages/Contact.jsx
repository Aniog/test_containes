import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight,
  Factory, ShieldCheck, Truck, Search
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed';
};

const initialValues = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price_range: '',
  timeline: '',
  services_needed: [],
  additional_notes: '',
};

const productCategories = [
  'Electronics & Components',
  'Home & Kitchen Appliances',
  'Furniture & Home Decor',
  'Textiles & Garments',
  'Packaging & Printing',
  'Hardware & Tools',
  'Auto Parts & Accessories',
  'Sports & Outdoor Gear',
  'Toys & Educational Products',
  'Beauty & Personal Care',
  'Medical Devices & Supplies',
  'Industrial Machinery',
  'Other',
];

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_verification', label: 'Factory Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_monitoring', label: 'Production Monitoring' },
  { value: 'product_development', label: 'Product Development' },
  { value: 'shipping_logistics', label: 'Shipping & Logistics' },
];

const timelineOptions = [
  'As soon as possible',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring options',
];

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onServiceToggle = (serviceValue) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(serviceValue)
        ? v.services_needed.filter((s) => s !== serviceValue)
        : [...v.services_needed, serviceValue],
    }));
  };

  const validate = (v) => {
    if (!v.contact_name.trim()) return 'Please enter your name';
    if (!v.email.trim()) return 'Please enter your email';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email';
    if (!v.product_description.trim()) return 'Please describe the product you want to source';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      const { data: response, error: createError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            company_name: values.company_name,
            contact_name: values.contact_name,
            email: values.email,
            phone: values.phone,
            country: values.country,
            product_category: values.product_category,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity,
            target_price_range: values.target_price_range,
            timeline: values.timeline,
            services_needed: values.services_needed,
            additional_notes: values.additional_notes,
            status: 'new',
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        setError(getErrorMessage(response, createError));
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan. 
              No obligation, no upfront cost.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-navy mb-3">Thank You for Your Inquiry!</h2>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    We've received your sourcing request and will review it within 24 hours. 
                    A sourcing specialist will reach out to discuss your project in detail.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setValues(initialValues); }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-md hover:bg-brand-blue-dark transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact_name"
                        name="contact_name"
                        type="text"
                        required
                        value={values.contact_name}
                        onChange={onChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={values.company_name}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="e.g., United States, Germany"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Product Category
                      </label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      required
                      value={values.product_description}
                      onChange={onChange}
                      placeholder="Please describe the product you want to source — include details like materials, dimensions, features, and any reference photos or links you can share."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="estimated_quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Estimated Order Quantity
                      </label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g., 1,000 units"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price_range" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Target Price Range (USD)
                      </label>
                      <input
                        id="target_price_range"
                        name="target_price_range"
                        type="text"
                        value={values.target_price_range}
                        onChange={onChange}
                        placeholder="e.g., $5-10 per unit"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={values.timeline}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow bg-white"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Services You're Interested In
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {serviceOptions.map((svc) => (
                        <label
                          key={svc.value}
                          className={`flex items-center gap-2 px-3 py-2.5 border rounded-md cursor-pointer text-sm transition-colors ${
                            values.services_needed.includes(svc.value)
                              ? 'border-brand-blue bg-blue-50 text-brand-blue font-medium'
                              : 'border-gray-300 text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(svc.value)}
                            onChange={() => onServiceToggle(svc.value)}
                            className="sr-only"
                          />
                          <CheckCircle className={`w-4 h-4 ${values.services_needed.includes(svc.value) ? 'text-brand-blue' : 'text-gray-300'}`} />
                          {svc.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="additional_notes"
                      name="additional_notes"
                      rows={3}
                      value={values.additional_notes}
                      onChange={onChange}
                      placeholder="Any other details or questions you'd like to share..."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-shadow resize-y"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base shadow-md"
                  >
                    {status === 'submitting' ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-navy text-lg mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">Phone / WhatsApp</div>
                      <a href="tel:+8613812345678" className="text-sm text-brand-blue hover:underline">
                        +86 138 1234 5678
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-blue hover:underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">Head Office</div>
                      <span className="text-sm text-gray-500">
                        Room 1208, Building A, No. 168 Guangzhou Avenue, Guangzhou, China
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-700">Business Hours</div>
                      <span className="text-sm text-gray-500">
                        Mon-Fri: 9:00 AM - 6:00 PM (CST)<br />
                        Sat: 9:00 AM - 12:00 PM (CST)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-navy rounded-lg p-6 text-white">
                <h3 className="font-semibold text-lg mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Factory, text: '5,000+ verified factories in our network' },
                    { icon: ShieldCheck, text: '12 years of sourcing experience' },
                    { icon: Search, text: 'On-site factory audits and QC inspections' },
                    { icon: Truck, text: 'End-to-end logistics management' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="bg-brand-blue rounded-lg p-6 text-white text-center">
                <h3 className="font-semibold text-lg mb-2">Need Urgent Help?</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Call us directly for time-sensitive sourcing requests.
                </p>
                <a
                  href="tel:+8613812345678"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-blue font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}