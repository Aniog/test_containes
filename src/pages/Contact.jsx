import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initialFormState = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  timeline: '',
  additional_info: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.full_name.trim()) return 'Please enter your full name';
    if (!form.email.trim()) return 'Please enter your email address';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address';
    if (!form.product_description.trim()) return 'Please describe the products you want to source';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMessage(err);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { data: response, error } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: form.full_name,
            company_name: form.company_name,
            email: form.email,
            phone: form.phone,
            product_description: form.product_description,
            estimated_quantity: form.estimated_quantity,
            target_price: form.target_price,
            timeline: form.timeline,
            additional_info: form.additional_info,
          },
        });

      if (error || (response && response.success === false)) {
        const errors = response?.errors;
        const msg = Array.isArray(errors) && errors.length > 0
          ? errors.join(', ')
          : error?.message || 'Submission failed. Please try again.';
        throw new Error(msg);
      }

      setStatus('success');
      setForm(initialFormState);
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div>
        <section className="bg-primary py-16 md:py-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Thank You for Your Inquiry</h2>
            <p className="text-secondary text-lg mb-8">
              We have received your sourcing request and will review it carefully.
              Our team will get back to you within 24 hours with a free sourcing assessment.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Tell us about your product sourcing needs and we will provide a free assessment
            within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border shadow-sm p-6 md:p-8">
                {status === 'error' && errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-primary mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      value={form.full_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company_name" className="block text-sm font-medium text-primary mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company_name"
                      name="company_name"
                      type="text"
                      value={form.company_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="product_description" className="block text-sm font-medium text-primary mb-1.5">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    rows={4}
                    value={form.product_description}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary resize-y"
                    placeholder="Describe the products you want to source. Include details like materials, size, color, quantity, and any specific requirements."
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-5 mb-5">
                  <div>
                    <label htmlFor="estimated_quantity" className="block text-sm font-medium text-primary mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="estimated_quantity"
                      name="estimated_quantity"
                      type="text"
                      value={form.estimated_quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="e.g. 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="target_price" className="block text-sm font-medium text-primary mb-1.5">
                      Target Price Range
                    </label>
                    <input
                      id="target_price"
                      name="target_price"
                      type="text"
                      value={form.target_price}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="e.g. $5-10 per unit"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-primary mb-1.5">
                      Expected Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary"
                      placeholder="e.g. 2-3 months"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="additional_info" className="block text-sm font-medium text-primary mb-1.5">
                    Additional Information
                  </label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    rows={3}
                    value={form.additional_info}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-primary resize-y"
                    placeholder="Any other details, requirements, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto inline-flex items-center justify-center bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      Submit Inquiry <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="font-semibold text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-secondary hover:text-accent transition-colors">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-secondary hover:text-accent transition-colors">+86 123 4567 890</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Office</p>
                      <p className="text-sm text-secondary">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Response Time</p>
                      <p className="text-sm text-secondary">Within 24 hours on business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="font-semibold text-primary mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your requirements within 24 hours',
                    'Our team researches suitable suppliers',
                    'We prepare a free sourcing assessment',
                    'We share the proposal for your review',
                  ].map((step, idx) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-secondary">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}