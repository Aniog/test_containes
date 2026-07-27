import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    target_price: '',
    product_details: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email';
    if (!v.product_details.trim()) return 'Product details are required';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      // Insert Inquiry
      const { data: response, error: responseError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            quantity: values.quantity,
            target_price: values.target_price,
            product_details: values.product_details,
          }
        });

      if (responseError || response?.success === false) {
        throw new Error(responseError?.message || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setValues({
        name: '', email: '', company: '', quantity: '', target_price: '', product_details: ''
      });

    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Discuss Your Sourcing Needs</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get a free quote and preliminary assessment. We typically reply within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 flex justify-center items-center rounded-md shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Headquarters</h4>
                    <p className="text-slate-600 text-sm">Futian District, Shenzhen, Guangdong Province, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 flex justify-center items-center rounded-md shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 text-sm hover:text-blue-600">info@ssourcingchina.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 flex justify-center items-center rounded-md shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                    <p className="text-slate-600 text-sm">+86 138 0000 0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
              <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company (Optional)</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">Estimated Quantity (Optional)</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={onChange}
                      placeholder="e.g., 500 pcs"
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product_details" className="block text-sm font-medium text-slate-700 mb-2">Product Details & Specifications *</label>
                  <textarea
                    id="product_details"
                    name="product_details"
                    rows={5}
                    value={values.product_details}
                    onChange={onChange}
                    required
                    placeholder="Please describe the product you are looking for, including any specific materials, features, or certifications needed."
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="target_price" className="block text-sm font-medium text-slate-700 mb-2">Target Price (Optional)</label>
                  <input
                    id="target_price"
                    name="target_price"
                    type="text"
                    value={values.target_price}
                    onChange={onChange}
                    placeholder="e.g., $10/unit"
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-md border border-red-100" role="alert">
                    {error}
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md border border-green-100" role="status">
                    Thank you! Your inquiry has been received. Our team will contact you shortly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 text-white font-semibold py-4 rounded-md hover:bg-blue-700 transition disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;