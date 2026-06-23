import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, User } from 'lucide-react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';
import strkImgConfig from '../strk-img-config.json';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    product_interest: '',
    estimated_volume: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Submit sourcing inquiry
      const { error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new'
          }
        });

      if (error) throw error;

      toast.success('Inquiry submitted successfully! Our agent will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company_name: '',
        product_interest: '',
        estimated_volume: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit inquiry. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 id="contact-title" className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ready to start your sourcing journey in China? Fill out the form below or reach out to us directly through any of our channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-blue-900 text-white p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-slate-300">+86 123 4567 8901</p>
                  <p className="text-slate-400 text-sm">Mon - Fri, 9am - 6pm (CST)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-slate-300">info@ssourcingchina.com</p>
                  <p className="text-slate-400 text-sm">We reply within 24 business hours</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Address</h4>
                  <p className="text-slate-300">Guangzhou International Trade Center, Guangdong, China</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6">Why Work With Us?</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 100% Transparency on Factory Prices</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Legal Sourcing Contract & Invoicing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Strict Pre-shipment Inspections</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Flexible Payment Terms</li>
              </ul>
            </div>
            
            <div className="mt-12 h-48 rounded-xl overflow-hidden opacity-50 relative">
               <img 
                data-strk-img-id="contact-bg-office"
                data-strk-img="modern guangzhou office building sky"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Guangzhou Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            <h2 id="form-title" className="text-2xl font-bold text-blue-900 mb-8 text-center md:text-left">Send Sourcing Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-blue-900" /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Mail size={16} className="text-blue-900" /> Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Building2 size={16} className="text-blue-900" /> Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Search size={16} className="text-blue-900" /> Product Interest *
                  </label>
                  <input
                    type="text"
                    name="product_interest"
                    required
                    value={formData.product_interest}
                    onChange={handleChange}
                    placeholder="e.g. Solar Panels, Textiles"
                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-blue-900" /> Estimated Volume / Specific Requirements
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your sourcing needs..."
                  className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {submitting ? 'Sending...' : 'Send Inquiry'} <Send size={20} />
              </button>
              <p className="text-xs text-slate-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
