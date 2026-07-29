import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, Mail, MapPin, Globe, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/shared/SectionHeader';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
];

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_description.trim()) return 'Product description is required.';
  return null;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');
    console.log('Submitting sourcing inquiry:', values);

    try {
      const payload = {
        data: {
          full_name: values.full_name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          message: values.message || undefined,
        },
      };

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert(payload)
        .select()
        .single();

      console.log('Insert response:', response, insertError);

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed.');
        setError(msgs);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Inquiry Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your sourcing inquiry. Our team will review your requirements and get back to you within 24 business hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-brand-blue font-semibold text-sm hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="full_name">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            value={values.full_name}
            onChange={onChange}
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
            Business Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="company">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="Your company"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="country">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            placeholder="e.g. United States"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="product_category">
            Product Category
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Estimated Quantity */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="estimated_quantity">
            Estimated Quantity
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            placeholder="e.g. 500 units/month"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
      </div>

      {/* Target Price */}
      <div className="mt-5">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="target_price">
          Target Unit Price / Budget (optional)
        </label>
        <input
          id="target_price"
          name="target_price"
          type="text"
          value={values.target_price}
          onChange={onChange}
          placeholder="e.g. USD 5–8 per unit"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        />
      </div>

      {/* Product Description */}
      <div className="mt-5">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="product_description">
          Product Description <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="product_description"
          name="product_description"
          rows={4}
          value={values.product_description}
          onChange={onChange}
          placeholder="Describe the product you want to source — materials, dimensions, specifications, certifications needed, etc."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
        />
      </div>

      {/* Services Needed */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-gray-700 mb-3">Services Needed (select all that apply)</p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((svc) => (
            <button
              key={svc}
              type="button"
              onClick={() => toggleService(svc)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                values.services_needed.includes(svc)
                  ? 'bg-navy-900 border-navy-900 text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-navy-300'
              }`}
            >
              {svc}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Message */}
      <div className="mt-5">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
          Additional Notes (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={values.message}
          onChange={onChange}
          placeholder="Any other requirements, questions, or context that would help us assist you."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
        />
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
        </Button>
        <p className="text-xs text-gray-400 text-center mt-3">
          We respond within 24 business hours. Your information is kept confidential.
        </p>
      </div>
    </form>
  );
}
