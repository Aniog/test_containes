import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  'Electronics & Components',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Industrial & Machinery',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Furniture & Home Decor',
  'Automotive Parts',
  'Packaging & Materials',
  'Other',
];

export default function InquiryForm({ compact = false, onSuccess }) {
  const [formData, setFormData] = React.useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    productDescription: '',
    productCategory: '',
    estimatedVolume: '',
    targetTimeline: '',
    currentChallenges: '',
    source: '',
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.companyName.trim()) return 'Company name is required';
    if (!formData.contactName.trim()) return 'Contact name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.phone.trim()) return 'Phone / WhatsApp is required';
    if (!formData.country.trim()) return 'Country is required';
    if (!formData.productDescription.trim() || formData.productDescription.trim().length < 10) {
      return 'Please provide a detailed product description (at least 10 characters)';
    }
    if (!formData.productCategory) return 'Please select a product category';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            companyName: formData.companyName.trim(),
            contactName: formData.contactName.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            country: formData.country.trim(),
            productDescription: formData.productDescription.trim(),
            productCategory: formData.productCategory,
            estimatedVolume: formData.estimatedVolume.trim(),
            targetTimeline: formData.targetTimeline.trim(),
            currentChallenges: formData.currentChallenges.trim(),
            source: formData.source.trim(),
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        throw new Error(response?.errors?.join(', ') || insertError?.message || 'Submission failed');
      }

      setStatus('success');
      if (onSuccess) onSuccess();

      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        productDescription: '',
        productCategory: '',
        estimatedVolume: '',
        targetTimeline: '',
        currentChallenges: '',
        source: '',
      });
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setError(err.message || 'Something went wrong. Please try again or email us directly.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-emerald-900 mb-2">Thank you. Your inquiry has been received.</h3>
        <p className="text-emerald-800 mb-6 max-w-md mx-auto">
          A sourcing specialist will review your requirements and contact you within 1 business day with a preliminary assessment and next steps.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-medium text-emerald-700 hover:text-emerald-800 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Contact Name *</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="Full name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="United States"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
        <textarea
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          required
          rows={compact ? 3 : 4}
          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Describe the product(s) you want to source. Include key specifications, materials, target price range, and any certifications required."
        />
        <p className="mt-1 text-xs text-slate-500">The more specific you are, the faster we can provide an accurate assessment.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Volume</label>
          <input
            type="text"
            name="estimatedVolume"
            value={formData.estimatedVolume}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="e.g. 5,000 units / month or 1x 40ft container"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Timeline</label>
          <input
            type="text"
            name="targetTimeline"
            value={formData.targetTimeline}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            placeholder="e.g. First order in 8 weeks"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Current Challenges or Requirements</label>
        <textarea
          name="currentChallenges"
          value={formData.currentChallenges}
          onChange={handleChange}
          rows={compact ? 2 : 3}
          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Are you facing issues with quality, pricing, communication, or lead times? Any specific certifications or compliance needs?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">How did you hear about us? (Optional)</label>
        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Google, referral, trade show, etc."
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70 transition-colors"
      >
        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </button>

      <p className="text-xs text-slate-500">
        We respect your privacy. Your information will only be used to respond to your sourcing inquiry.
      </p>
    </form>
  );
}
