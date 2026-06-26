import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const InquiryForm = ({ source = 'homepage', compact = false }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email';
    if (!v.message.trim()) return 'Please describe your sourcing needs';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: createError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim() || undefined,
            country: values.country.trim() || undefined,
            product_category: values.product_category.trim() || undefined,
            message: values.message.trim(),
            source,
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        const message =
          (Array.isArray(response?.errors) && response.errors.join(', ')) ||
          createError?.message ||
          'Submission failed';
        throw new Error(message);
      }

      setStatus('success');
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        product_category: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-4 ${compact ? '' : 'max-w-2xl'}`}
      aria-busy={status === 'submitting'}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            required
            placeholder="Your full name"
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
            placeholder="you@company.com"
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="Company name"
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
        </div>
        <div>
          <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-700">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            placeholder="Your country"
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product_category" className="mb-1 block text-sm font-medium text-slate-700">
          Product Category
        </label>
        <input
          id="product_category"
          name="product_category"
          type="text"
          value={values.product_category}
          onChange={onChange}
          placeholder="e.g., electronics, furniture, textiles"
          className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Sourcing Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          required
          placeholder="Describe what you need sourced, quantities, target price range, and any specific requirements..."
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
      >
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-emerald-700" role="status">
          Thank you! We will review your request and get back to you within 24 hours.
        </p>
      )}
      {status === 'error' && !!error && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}
    </form>
  );
};

export default InquiryForm;
