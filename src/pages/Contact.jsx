import React, { useState } from 'react';
import { createInquiry } from '@/api/inquiry';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, Loader2, Globe, ShieldCheck, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: '',
    estimated_volume: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createInquiry(formData);
      toast.success('Inquiry submitted successfully! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: '',
        estimated_volume: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 italic">Request a Free Sourcing Quote</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to find your manufacturing partner in China? Complete the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-amber-500 pl-4 uppercase tracking-tighter">Tell Us About Your Project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your professional email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="product_interest" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Product Category *</label>
                  <input
                    type="text"
                    id="product_interest"
                    name="product_interest"
                    required
                    value={formData.product_interest}
                    onChange={handleChange}
                    placeholder="e.g. Smart Watches, Tableware"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="estimated_volume" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Estimated Order Volume / MOQs</label>
                <input
                  type="text"
                  id="estimated_volume"
                  name="estimated_volume"
                  value={formData.estimated_volume}
                  onChange={handleChange}
                  placeholder="e.g. 1000 units per month, 500 units MCQ"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Project Details / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your target price, special materials, or timeline..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-amber-700 text-white font-black uppercase tracking-widest py-5 rounded-lg text-lg flex items-center justify-center gap-2 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Trust */}
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8 border-b-2 border-primary w-fit pb-2">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg mt-1 shadow-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-gray-900 font-semibold truncate">contact@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg mt-1 shadow-sm">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-gray-900 font-semibold">+86 755 8XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg mt-1 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Our Office</p>
                    <p className="text-gray-900 font-semibold">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-black mb-8 italic">Why We Respond Faster</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-accent shrink-0" />
                    <p className="text-sm leading-relaxed text-blue-100 font-semibold">24/7 dedicated support team across multiple time zones.</p>
                </div>
                <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                    <p className="text-sm leading-relaxed text-blue-100 font-semibold">Instant verification of your product specs by our engineers.</p>
                </div>
                <div className="flex gap-4">
                    <Globe className="w-6 h-6 text-accent shrink-0" />
                    <p className="text-sm leading-relaxed text-blue-100 font-semibold">Direct access to a network of 10,000+ verified China factories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
