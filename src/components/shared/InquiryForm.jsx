import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitSourcingInquiry } from '@/api/sourcing-inquiry';

const inputClass =
  'w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white text-slate-900';
const labelClass = 'block text-sm font-medium text-navy-900 mb-1';

const InquiryForm = ({ sourcePage, showCountry = false, showService = false, compact = false }) => {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    service_needed: '',
    details: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Full name is required.';
    if (!v.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
    if (!v.product.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate(values);
    if (err) {
      setErrorMsg(err);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      await submitSourcingInquiry({ ...values, source_page: sourcePage });
      setStatus('success');
      setValues({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        product: '',
        quantity: '',
        service_needed: '',
        details: '',
      });
    } catch (err) {
      setErrorMsg(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-50 rounded-lg p-6 md:p-8 border border-slate-200 text-center">
        <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy-900 mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-4">
          Your sourcing request has been submitted. We'll respond within 24 hours on business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-brand-blue font-medium hover:text-blue-700 cursor-pointer border-none bg-transparent"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const py = compact ? 'py-2' : 'py-2.5';
  const inputCls = inputClass.replace('py-2.5', py);

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            className={inputCls}
            placeholder="John Smith"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label className={labelClass}>Company Name</label>
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={onChange}
            className={inputCls}
            placeholder="Your Company"
            disabled={status === 'submitting'}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            className={inputCls}
            placeholder="john@company.com"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={onChange}
            className={inputCls}
            placeholder="+1 234 567 890"
            disabled={status === 'submitting'}
          />
        </div>
      </div>
      {showCountry && (
        <div>
          <label className={labelClass}>Country *</label>
          <select
            name="country"
            value={values.country}
            onChange={onChange}
            className={inputCls}
            disabled={status === 'submitting'}
          >
            <option value="">Select your country</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>France</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>Netherlands</option>
            <option>Japan</option>
            <option>Other</option>
          </select>
        </div>
      )}
      <div>
        <label className={labelClass}>Product You Want to Source *</label>
        <input
          type="text"
          name="product"
          value={values.product}
          onChange={onChange}
          className={inputCls}
          placeholder={compact ? 'e.g. Stainless steel water bottles' : 'e.g. Stainless steel water bottles, CNC machines, LED panels'}
          disabled={status === 'submitting'}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Estimated Quantity</label>
          <select
            name="quantity"
            value={values.quantity}
            onChange={onChange}
            className={inputCls}
            disabled={status === 'submitting'}
          >
            <option value="">Select range</option>
            <option>1 - 500 units</option>
            <option>500 - 5,000 units</option>
            <option>5,000 - 50,000 units</option>
            <option>50,000+ units</option>
          </select>
        </div>
        {showService && (
          <div>
            <label className={labelClass}>Service Needed</label>
            <select
              name="service_needed"
              value={values.service_needed}
              onChange={onChange}
              className={inputCls}
              disabled={status === 'submitting'}
            >
              <option value="">Select service</option>
              <option>Supplier Sourcing</option>
              <option>Factory Verification</option>
              <option>Quality Inspection</option>
              <option>Full-Service Sourcing</option>
              <option>Shipping Coordination</option>
            </select>
          </div>
        )}
      </div>
      <div>
        <label className={labelClass}>Additional Details</label>
        <textarea
          name="details"
          rows={compact ? 3 : 4}
          value={values.details}
          onChange={onChange}
          className={inputCls}
          placeholder="Tell us more about your requirements, target price, timeline, etc."
          disabled={status === 'submitting'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-blue text-white py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors border-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Your Sourcing Request'
        )}
      </button>
      {status === 'error' && errorMsg && (
        <p role="alert" className="text-sm text-red-600 text-center">{errorMsg}</p>
      )}
      <p className="text-xs text-slate-500 text-center">
        {compact
          ? "We'll respond within 24 hours. Your information is kept confidential."
          : "We'll respond within 24 hours on business days. Your information is kept confidential."
        }
      </p>
    </form>
  );
};

export default InquiryForm;
