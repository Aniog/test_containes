import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Facebook } from 'lucide-react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import strkImgConfig from "@/strk-img-config.json";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      // 1. Save Inquiry to SourcingInquiry table
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new'
          }
        });

      if (error || response?.success === false) {
        const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Submission failed');
        throw new Error(msg);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        quantity: '',
        message: ''
      });
    } catch (err) {
      console.error('Contact Form Error:', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container-custom">
          <h1 id="contact-page-title" className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p id="contact-page-subtitle" className="text-xl text-slate-300 max-w-2xl">
            Ready to optimize your supply chain? Send us your sourcing requirements and get a professional quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-accent pl-4">Get in Touch</h2>
                <p className="text-slate-600">
                  Our professional sourcing consultants are ready to discuss your business needs.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">info@ssourcingchina.com</p>
                    <p className="text-xs text-slate-400 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 border border-slate-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+86 755 XXXX XXXX</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri: 9:00 - 18:00 (GMT+8)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 border border-slate-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Visit Our Office</h3>
                    <p className="text-slate-600">Shenzhen, Guangdong Province, China</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Follow us on Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-50">
                <div className="flex items-center space-x-3 mb-10">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <MessageSquare size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Sourcing Inquiry Form</h2>
                </div>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">Inquiry Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting SSourcing China. A professional sourcing consultant will review your specifications and contact you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="btn-accent px-8 py-3"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Work Email *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (123) 456-7890"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Business Ltd."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Product to Source *</label>
                        <input
                          required
                          type="text"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          placeholder="e.g. Eco-friendly Water Bottles"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Est. Order Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 units"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Your Message / Specifications *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your requirements, specific materials, target price, or any questions you have."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50 focus:bg-white"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-red-700 text-sm font-medium">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-primary text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Get My Free Sourcing Quote</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 font-medium tracking-tight">
                      By submitting this form, you agree to our Privacy Policy and allow us to contact you regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
