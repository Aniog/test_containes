import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    message: '',
    source: '',
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
    if (!v.company.trim()) return 'Company is required';
    if (!v.country.trim()) return 'Country is required';
    if (!v.product_category.trim()) return 'Product category is required';
    if (!v.message.trim()) return 'Message is required';
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
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            product_category: values.product_category,
            message: values.message,
            source: values.source || 'Website',
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        const errorMessage = response?.errors?.join(', ') || createError?.message || 'Submission failed';
        setError(errorMessage);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        product_category: '',
        message: '',
        source: '',
      });
      toast.success('Inquiry submitted! We will get back to you within 1 business day.');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Business Email *</label>
          <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
          <Input id="company" name="company" value={values.company} onChange={onChange} required placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
          <Input id="country" name="country" value={values.country} onChange={onChange} required placeholder="Your country" />
        </div>
      </div>
      <div>
        <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">Product Category *</label>
        <Input id="product_category" name="product_category" value={values.product_category} onChange={onChange} required placeholder="e.g. Electronics, Home goods, Auto parts" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Tell us about your sourcing needs *</label>
        <Textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} required placeholder="Describe what you want to source, quantities, timeline, and any specific requirements..." />
      </div>
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-slate-700 mb-1">How did you find us?</label>
        <Input id="source" name="source" value={values.source} onChange={onChange} placeholder="Google, referral, social media, etc." />
      </div>
      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
      {status === 'success' && (
        <p className="text-sm text-green-600 text-center">Thank you! We will contact you within 1 business day.</p>
      )}
      {status === 'error' && !!error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}
    </form>
  );
};

export default ContactForm;
