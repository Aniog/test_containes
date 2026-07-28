import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitInquiry } from '@/api/inquiries';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.product) {
      setError('Please fill in all required fields (Name, Email, Product).');
      return;
    }

    setSubmitting(true);

    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        country: formData.country,
        product: formData.product,
        quantity: formData.quantity,
        message: formData.message,
        source: 'homepage',
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  if (submitted) {
    return (
      <section id="inquiry" className="section-padding bg-slate-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-slate-600 mb-6">
              We've received your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' }); }}
              className="btn-secondary"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="section-padding bg-slate-50">
      <div className="container-custom max-w-3xl">
        <div className="section-header">
          <h2 id="inquiry-title" className="section-title">Get a Free Sourcing Quote</h2>
          <p id="inquiry-subtitle" className="section-subtitle">
            Tell us what you're looking for and we'll get back to you within 24 hours with a detailed sourcing plan.
          </p>
        </div>
        
        <div className="card">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                  placeholder="United States"
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                  Product You Need <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                  placeholder="e.g., Custom Bluetooth Speakers"
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                  placeholder="e.g., 5,000 units"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900 resize-none"
                placeholder="Tell us about your requirements: specifications, target price, timeline, quality standards..."
              />
            </div>
            
            <button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Sourcing Inquiry
                </>
              )}
            </button>
            
            <p className="text-xs text-slate-500">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
