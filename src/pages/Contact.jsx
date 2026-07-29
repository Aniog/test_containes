import React, { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    order_volume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Upsert dummy/guest user to maintain CRM
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest',
      });

      // 2. Insert inquiry into database
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            user_id: userRecord?.id
          }
        });

      if (error) throw error;
      if (response?.success === false) throw new Error(response.errors?.[0] || 'Submission failed');

      toast.success('Your inquiry has been sent successfully! Our team will contact you within 24-48 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_category: '',
        order_volume: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact SSourcing China</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to find your next top-tier supplier? Send us your requirements and we'll get to work.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Visiting Office</h4>
                      <p className="text-slate-600">Building A, High-Tech Park, Futian, Shenzhen, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Call Us</h4>
                      <p className="text-slate-600">+86 755 8888 9999</p>
                      <p className="text-slate-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Support</h4>
                      <p className="text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-lg mb-4 text-blue-900 uppercase tracking-wide">Looking to visit?</h3>
                <p className="text-slate-600 mb-6">We provide factory visitation packages including airport pickup and professional translation services.</p>
                <button className="text-amber-600 font-bold hover:underline">Learn more about factory tours →</button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Submit Your Inquiry</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Business Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Product Category *</label>
                    <select 
                      required
                      name="product_category"
                      value={formData.product_category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select Category</option>
                      <option value="Consumer Electronics">Consumer Electronics</option>
                      <option value="Home & Garden">Home & Garden</option>
                      <option value="Textiles & Apparel">Textiles & Apparel</option>
                      <option value="Industrial Machinery">Industrial Machinery</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Order Volume / Quantity</label>
                    <input 
                      type="text" 
                      name="order_volume"
                      value={formData.order_volume}
                      onChange={handleChange}
                      placeholder="e.g. 5,000 units, 1x20ft Container"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Sourcing Requirements *</label>
                    <textarea 
                      required
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe the product, specifications, and any certification requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-slate-800 text-white font-extrabold text-lg py-4 rounded-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Get My Free Sourcing Report
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-slate-500 text-sm">
                      🔒 No spam. We keep your business requirements 100% confidential.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
