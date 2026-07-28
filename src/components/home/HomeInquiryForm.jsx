import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionHeader } from '@/components/shared';
import { submitSourcingInquiry } from '@/api/sourcing';

const HomeInquiryForm = () => {
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', product: '', quantity: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      await submitSourcingInquiry(form);
      setStatus('success');
    } catch (err) {
      console.error('[HomeInquiryForm] Submit error:', err);
      setErrorMsg(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-blue-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get Started"
          title="Request a Free Sourcing Quote"
          subtitle="Tell us what you need and we'll get back to you within 24 hours with a tailored proposal."
          light
        />

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
            <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              Your inquiry has been received. Our team will review your requirements and respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text" name="company" value={form.company} onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text" name="country" value={form.country} onChange={handleChange}
                  placeholder="United States"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product / Category *</label>
                <input
                  type="text" name="product" required value={form.product} onChange={handleChange}
                  placeholder="e.g. Office Chairs, LED Lights"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                <input
                  type="text" name="quantity" value={form.quantity} onChange={handleChange}
                  placeholder="e.g. 500 units"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  name="message" rows={4} value={form.message} onChange={handleChange}
                  placeholder="Describe your product requirements, target price, timeline, or any specific needs..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy focus:border-transparent resize-none"
                />
              </div>
            </div>
            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {errorMsg}
              </div>
            )}
            <div className="mt-6">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-red-china hover:bg-[#a93226] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Request'}
              </button>
              <p className="text-xs text-gray-500 mt-3">
                We respond within 24 hours. Your information is kept confidential.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default HomeInquiryForm;
