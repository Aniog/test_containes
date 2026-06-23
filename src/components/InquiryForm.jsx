import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PRODUCT_CATEGORIES = [
  'Consumer electronics',
  'Home & kitchen',
  'Apparel & textiles',
  'Furniture',
  'Industrial & machinery',
  'Auto parts & accessories',
  'Beauty & personal care',
  'Sports & outdoor',
  'Promotional & packaging',
  'Other',
];

const SERVICES = [
  'Supplier sourcing',
  'Factory verification',
  'Sample management',
  'Price negotiation',
  'Quality inspection',
  'Production follow-up',
  'Shipping & logistics',
  'Private labeling',
];

const TIMELINES = ['Within 1 month', '1-3 months', '3-6 months', 'Just exploring'];

const initialState = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_budget: '',
  services_needed: [],
  timeline: '',
};

const InquiryForm = ({ compact = false }) => {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleService = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your full name.';
    if (!values.email.trim()) return 'Please enter your email.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.';
    if (!values.product_description.trim()) return 'Please describe your product.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Build payload with only non-empty fields. Empty strings would violate
    // enum constraints for fields like product_category and timeline.
    const payload = {
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      product_description: values.product_description.trim(),
      status: 'new',
      created_at: new Date().toISOString(),
    };
    if (values.company_name.trim()) payload.company_name = values.company_name.trim();
    if (values.phone.trim()) payload.phone = values.phone.trim();
    if (values.country.trim()) payload.country = values.country.trim();
    if (values.product_category) payload.product_category = values.product_category;
    if (values.target_quantity.trim()) payload.target_quantity = values.target_quantity.trim();
    if (values.target_budget.trim()) payload.target_budget = values.target_budget.trim();
    if (values.timeline) payload.timeline = values.timeline;
    if (values.services_needed.length > 0) payload.services_needed = values.services_needed;

    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({ data: payload })
      .select()
      .single();

    if (import.meta.env.DEV) {
      console.log('[InquiryForm] response:', response, 'error:', insertError);
    }

    if (insertError || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.';
      setError(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialState);
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you, we received your request</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          A sourcing specialist will review your inquiry and respond within one business day.
          For urgent requests, please email hello@ssourcingchina.com.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          onClick={() => setStatus('idle')}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600';
  const labelBase = 'block text-sm font-medium text-slate-700 mb-1.5';

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Tell us what you want to source</h3>
          <p className="mt-1 text-sm text-slate-600">
            Share a few details and we will get back to you within one business day.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelBase} htmlFor="full_name">Full name *</label>
          <input id="full_name" name="full_name" type="text" required value={values.full_name} onChange={onChange} className={inputBase} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelBase} htmlFor="company_name">Company</label>
          <input id="company_name" name="company_name" type="text" value={values.company_name} onChange={onChange} className={inputBase} placeholder="Acme Trading Co." />
        </div>
        <div>
          <label className={labelBase} htmlFor="email">Business email *</label>
          <input id="email" name="email" type="email" required value={values.email} onChange={onChange} className={inputBase} placeholder="jane@company.com" />
        </div>
        <div>
          <label className={labelBase} htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} className={inputBase} placeholder="+1 555 123 4567" />
        </div>
        <div>
          <label className={labelBase} htmlFor="country">Country</label>
          <input id="country" name="country" type="text" value={values.country} onChange={onChange} className={inputBase} placeholder="United States" />
        </div>
        <div>
          <label className={labelBase} htmlFor="product_category">Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={onChange} className={inputBase}>
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className={labelBase} htmlFor="product_description">Product description *</label>
        <textarea
          id="product_description"
          name="product_description"
          rows={4}
          required
          value={values.product_description}
          onChange={onChange}
          className={inputBase}
          placeholder="Describe the product, materials, target specs, certifications, or attach a reference link."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className={labelBase} htmlFor="target_quantity">Estimated quantity</label>
          <input id="target_quantity" name="target_quantity" type="text" value={values.target_quantity} onChange={onChange} className={inputBase} placeholder="e.g. 5,000 units / month" />
        </div>
        <div>
          <label className={labelBase} htmlFor="target_budget">Target unit price</label>
          <input id="target_budget" name="target_budget" type="text" value={values.target_budget} onChange={onChange} className={inputBase} placeholder="e.g. USD 4–6 per unit" />
        </div>
      </div>

      <div className="mt-5">
        <span className={labelBase}>Services needed</span>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const active = values.services_needed.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                  active
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <label className={labelBase} htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" value={values.timeline} onChange={onChange} className={inputBase}>
          <option value="">When do you plan to start?</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {status === 'error' && error && (
        <div className="mt-5 flex items-start gap-2 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-slate-500">
          By submitting, you agree to be contacted by our team. We respect your privacy.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === 'submitting' ? 'Sending…' : 'Get a Free Sourcing Quote'}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
