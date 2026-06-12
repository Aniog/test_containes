import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICE_OPTIONS = [
  { value: 'supplier_sourcing', label: 'Supplier sourcing' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_logistics', label: 'Shipping & logistics' },
  { value: 'full_service', label: 'Full sourcing service' },
  { value: 'other', label: 'Other' },
];

const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP' },
  { value: 'within_1_month', label: 'Within 1 month' },
  { value: '1_3_months', label: '1–3 months' },
  { value: '3_6_months', label: '3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
];

const INITIAL = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  service_needed: 'supplier_sourcing',
  product_category: '',
  product_description: '',
  target_quantity: '',
  target_budget: '',
  timeline: 'within_1_month',
};

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition';
const labelClass = 'block text-sm font-medium text-slate-800 mb-1.5';

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your name.';
    if (!values.email.trim()) return 'Please enter your email.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.';
    if (!values.product_description.trim())
      return 'Please briefly describe the products you want to source.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const err = validate();
    if (err) {
      setErrorMessage(err);
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const payload = {
      data: {
        ...values,
        status: 'new',
      },
    };

    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert(payload)
      .select()
      .single();

    if (error || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : error?.message || 'Submission failed. Please try again.';
      setErrorMessage(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(INITIAL);
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-emerald-900">Inquiry received</h3>
        <p className="mt-2 text-emerald-800">
          Thank you. A member of our sourcing team will get back to you within
          one business day with next steps and questions.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 inline-flex items-center rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-100"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-card"
      noValidate
    >
      <div className={`grid gap-5 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
        <div>
          <label htmlFor="full_name" className={labelClass}>Full name *</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            value={values.full_name}
            onChange={onChange}
            className={inputClass}
            placeholder="Jane Smith"
            required
          />
        </div>

        <div>
          <label htmlFor="company_name" className={labelClass}>Company</label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={values.company_name}
            onChange={onChange}
            className={inputClass}
            placeholder="Acme Trading Ltd."
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Business email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 123 4567"
          />
        </div>

        <div>
          <label htmlFor="country" className={labelClass}>Country</label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="United States"
          />
        </div>

        <div>
          <label htmlFor="service_needed" className={labelClass}>Service needed</label>
          <select
            id="service_needed"
            name="service_needed"
            value={values.service_needed}
            onChange={onChange}
            className={inputClass}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="product_category" className={labelClass}>Product category</label>
          <input
            id="product_category"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. home goods, electronics, apparel"
          />
        </div>

        <div>
          <label htmlFor="timeline" className={labelClass}>Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={onChange}
            className={inputClass}
          >
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="target_quantity" className={labelClass}>Target quantity</label>
          <input
            id="target_quantity"
            name="target_quantity"
            type="text"
            value={values.target_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 5,000 pcs / order"
          />
        </div>

        <div>
          <label htmlFor="target_budget" className={labelClass}>Target unit price / budget</label>
          <input
            id="target_budget"
            name="target_budget"
            type="text"
            value={values.target_budget}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. USD 3.50 / pc"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="product_description" className={labelClass}>
            Product description *
          </label>
          <textarea
            id="product_description"
            name="product_description"
            rows={5}
            value={values.product_description}
            onChange={onChange}
            className={inputClass}
            placeholder="Describe the products: specs, materials, target market, reference links if any."
            required
          />
        </div>
      </div>

      {status === 'error' && errorMessage && (
        <div className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-slate-500">
          We respect your privacy. Your information is used only to follow up on
          this inquiry.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            'Get a Free Sourcing Quote'
          )}
        </button>
      </div>
    </form>
  );
}
