import React, { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { toast } from 'sonner';
import { Send, Loader2, CheckCircle, Package, Users, Mail, MessageSquare, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productRange: '',
    targetQuantity: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Upsert User (CRM)
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest'
      });

      // 2. Submit Inquiry record
      const { error } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            ...formData,
            status: 'new',
            createdAt: new Date().toISOString()
          }
        });

      if (error) throw error;

      toast.success('Your message has been sent successfully!');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        productRange: '',
        targetQuantity: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send message. Please try again or contact us directly via email.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center border border-slate-100 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
        <p className="text-lg text-slate-600 mb-8">
          We have received your sourcing inquiry. Our team in Shenzhen will review your requirements and get back to you with initial feedback within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100 max-w-3xl mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <Send className="h-8 w-8 text-blue-600 mr-4" />
        Get a Free Sourcing Quote
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center">
            <Users className="h-4 w-4 mr-2" /> Name *
          </label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center">
            <Mail className="h-4 w-4 mr-2" /> Corporate Email *
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center">
            <Package className="h-4 w-4 mr-2" /> Product Category *
          </label>
          <input
            required
            name="productRange"
            value={formData.productRange}
            onChange={handleChange}
            placeholder="e.g. Smart Watches, Solar Panels"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center">
            Target Quantity
          </label>
          <input
            name="targetQuantity"
            value={formData.targetQuantity}
            onChange={handleChange}
            placeholder="e.g. 500 units / month"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2 mb-8">
        <label className="text-sm font-semibold text-slate-700 flex items-center">
          <MessageSquare className="h-4 w-4 mr-2" /> Project Details
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your requirements, quality standards, or any specific questions you have..."
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full py-4 rounded-lg text-white font-bold text-lg transition-all flex items-center justify-center",
          loading ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20 shadow-lg hover:shadow-xl"
        )}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin h-5 w-5 mr-3" />
            Processing Inquiry...
          </>
        ) : (
          <>
            Request Sourcing Consultation
          </>
        )}
      </button>

      <p className="mt-6 text-center text-sm text-slate-500">
        Your data is protected. By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
};

export default ContactForm;
