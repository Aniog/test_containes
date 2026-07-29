import React, { useState, useEffect, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, Building, Package, BarChart } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    estimated_annual_volume: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Submit Inquiry
      const { data, error } = await client.from('SourcingInquiry').insert({
        data: {
          ...formData
        }
      });

      if (error) throw error;

      toast.success('Inquiry submitted successfully! Our team will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_category: '',
        estimated_annual_volume: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <section className="bg-primary py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium">
            Start your sourcing journey with a reliable partner in China. Fill out the form below, and we'll get back to you within 24 business hours.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 -mt-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-secondary mb-8">Direct Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                    <p className="text-slate-900 font-bold">+86 123 4567 8901</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Enquiry</p>
                    <p className="text-slate-900 font-bold">info@ssourcingchina.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Main Office</p>
                    <p className="text-slate-900 font-bold leading-snug">Global Trade Plaza, Futian District, Shenzhen, China</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-xl text-white shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Quality First</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Our inspection teams are stationed in major industrial hubs: Dongguan, Ningbo, and Yiwu to ensure fast dispatch for inspections.
                  </p>
                  <Link to="/how-it-works" className="text-accent font-bold text-sm hover:underline inline-flex items-center gap-2">
                    Our Process <Send size={14} />
                  </Link>
               </div>
               <div className="absolute top-0 right-0 p-4 opacity-10 transform group-hover:scale-110 transition">
                  <Package size={80} />
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-white">
              <h2 className="text-3xl font-bold text-secondary mb-8">Sourcing Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <BarChart size={16} className="text-primary" /> Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Mail size={16} className="text-primary" /> Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Building size={16} className="text-primary" /> Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Co."
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Package size={16} className="text-primary" /> Product Category
                    </label>
                    <input
                      type="text"
                      name="product_category"
                      value={formData.product_category}
                      onChange={handleChange}
                      placeholder="e.g. Consumer Electronics, Apparel"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Estimated Annual Sourcing Volume</label>
                  <select
                    name="estimated_annual_volume"
                    value={formData.estimated_annual_volume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                  >
                    <option value="">Please Select</option>
                    <option value="Under $50k">Under $50,000</option>
                    <option value="$50k - $250k">$50,000 - $250,000</option>
                    <option value="$250k - $1M">$250,000 - $1,000,000</option>
                    <option value="$1M+">$1,000,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Requirements / Questions *</label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the products you need, target price, quantities, or specific concerns..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-primary text-white font-black py-4 rounded-lg hover:bg-primary-hover shadow-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Send My Inquiry'} <Send size={20} />
                </button>
                <p className="text-center text-xs text-slate-500 font-bold">
                  Your data is protected and will only be used for sourcing consultation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
