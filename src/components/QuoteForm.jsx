import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed. Please try again.';
};

const QuoteForm = ({ open, onOpenChange, defaultProduct }) => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productInterest: defaultProduct || 'Double Folding Machine',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.companyName.trim()) return 'Company name is required';
    if (!formData.contactName.trim()) return 'Contact name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.phone.trim()) return 'Phone number is required';
    if (!formData.productInterest) return 'Please select a product';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: submitError } = await client
        .from('Quote Requests')
        .insert({
          data: {
            companyName: formData.companyName.trim(),
            contactName: formData.contactName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            productInterest: formData.productInterest,
            quantity: formData.quantity.trim(),
            message: formData.message.trim(),
          },
        })
        .select()
        .single();

      if (submitError || response?.success === false) {
        setError(getErrorMessage(response, submitError));
        setStatus('error');
        return;
      }

      setSuccess(true);
      setStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          productInterest: 'Double Folding Machine',
          quantity: '',
          message: '',
        });
        setSuccess(false);
        setStatus('idle');
        onOpenChange(false);
      }, 1800);
    } catch (err) {
      console.error('Quote submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status !== 'submitting') {
      setError(null);
      setSuccess(false);
      setStatus('idle');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Tell us about your project. Our team will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="px-6 pb-8 pt-2 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-navy mb-2">Thank You</h3>
            <p className="text-brand-slate">Your quote request has been received. We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">COMPANY NAME *</label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">CONTACT NAME *</label>
                <Input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">EMAIL *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">PHONE *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">PRODUCT OF INTEREST *</label>
              <Select
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                required
              >
                <option value="Double Folding Machine">Double Folding Machine</option>
                <option value="Double Folder">Double Folder</option>
                <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                <option value="Sheet Metal Folding Machine">Sheet Metal Folding Machine</option>
                <option value="Metal Folder">Metal Folder</option>
                <option value="Metal Folder Machine">Metal Folder Machine</option>
                <option value="Metal Folding Machine">Metal Folding Machine</option>
                <option value="Other / Custom Solution">Other / Custom Solution</option>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">QUANTITY / PROJECT SCALE</label>
              <Input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 2 units, 500 sheets/day, custom line"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest text-brand-slate mb-1.5">PROJECT DETAILS</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your application, material types, thickness, production volume, or any special requirements..."
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <div className="pt-2 flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1" 
                onClick={handleClose}
                disabled={status === 'submitting'}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="gold" 
                className="flex-1"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Quote Request'}
              </Button>
            </div>

            <p className="text-[11px] text-center text-brand-slate/70 pt-1">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
