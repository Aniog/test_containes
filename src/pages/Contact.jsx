import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { toast } from 'sonner';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    estimated_quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new',
            created_at: new Date().toISOString()
          }
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || 'Failed to submit inquiry');
      }

      toast.success('Thank you! Your sourcing inquiry has been received. Our team will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_category: '',
        estimated_quantity: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      toast.error(err.message || 'Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to start sourcing from China? Fill out the form below for a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg h-fit text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Us</h4>
                      <p className="text-slate-600 text-sm">contact@ssourcingchina.com</p>
                      <p className="text-slate-400 text-xs mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg h-fit text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Call Us</h4>
                      <p className="text-slate-600 text-sm">+86 123 4567 8910</p>
                      <p className="text-slate-400 text-xs mt-1">Mon - Fri, 9am - 6pm (CST)</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg h-fit text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Office Location</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Shenzhen Business District,<br />
                        Guangdong Province, China
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Why we are different</h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    No hidden commission fees
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    On-site factory inspections
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Fluent English communication
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Free Sourcing Inquiry</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700" htmlFor="company">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Acme Global Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700" htmlFor="product_category">Product Category</label>
                      <input
                        id="product_category"
                        name="product_category"
                        type="text"
                        value={formData.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="e.g. Consumer Electronics"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="estimated_quantity">Estimated Order Quantity</label>
                    <input
                      id="estimated_quantity"
                      name="estimated_quantity"
                      type="text"
                      value={formData.estimated_quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="e.g. 1000 units"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="message">Sourcing Requirements *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about the products you need, target price, and any special requirements..."
                    />
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Minimum 10 characters required</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-slate-500">
                    By submitting this form, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

