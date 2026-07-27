import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
    }, 2500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center"><span className="text-white font-semibold text-lg">SS</span></div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-slate-600 hover:text-slate-900">Services</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900">How It Works</Link>
            <Link to="/products" className="text-slate-600 hover:text-slate-900">Products</Link>
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="text-slate-900 font-medium">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800">Get a Free Quote</Link>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">GET IN TOUCH</div>
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">Tell us about your sourcing project. We'll respond within one business day.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-16 text-center">
            <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto mb-5" />
            <div className="text-2xl font-semibold text-emerald-900 mb-2">Thank you for your inquiry.</div>
            <p className="text-emerald-700">A member of our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-5 py-3.5 focus:outline-none focus:border-slate-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Business Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-5 py-3.5 focus:outline-none focus:border-slate-400" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-5 py-3.5 focus:outline-none focus:border-slate-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-5 py-3.5 focus:outline-none focus:border-slate-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Product Category</label>
              <input type="text" name="product" value={formData.product} onChange={handleChange} required placeholder="e.g., Kitchen appliances, Electronics components" className="w-full border border-gray-300 rounded-lg px-5 py-3.5 focus:outline-none focus:border-slate-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Describe your sourcing requirements, target quantities, timeline, and any specific concerns..." className="w-full border border-gray-300 rounded-lg px-5 py-3.5 focus:outline-none focus:border-slate-400 resize-y" />
            </div>
            <button type="submit" className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">Submit Inquiry</button>
            <p className="text-center text-xs text-slate-500">Your information is confidential. We respond within 24 business hours.</p>
          </form>
        )}
      </div>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0"><div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center"><span className="text-white text-xs font-semibold">SS</span></div><span>SSourcing China</span></div>
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;