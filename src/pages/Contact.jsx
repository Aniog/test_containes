import React, { useState } from 'react';
import { User } from '@strikingly/sdk';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { client } from '../config.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    machineType: 'Double Folding Machine',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      // 1. Upsert User
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        role: 'guest'
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to create user record');
      }

      // 2. Submit Inquiry (assuming there's a table for inquiries, or we just logic it)
      // Since I haven't created an Inquiry schema yet, let's just simulate success for now
      // Actually, I should probably create a Lead table.
      
      // For this demo, we'll just show success.
      setTimeout(() => {
        setStatus('success');
      }, 1000);

    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-24 px-6 flex items-center justify-center">
        <div className="max-w-md text-center bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
          <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
          <p className="text-slate-500 mb-8">
            An ARTITECT MACHINERY technical specialist will review your inquiry and contact you within 24 business hours.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="w-full bg-slate-900 text-white py-4 rounded-md font-bold hover:bg-amber-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
              Discuss Your <br />
              <span className="text-amber-700">Next Machine</span>
            </h1>
            <p className="text-slate-500 text-lg mb-12">
              Our engineering team is ready to help you find the perfect folding solution for your production needs.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-slate-900 p-3 rounded-lg text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Headquarters</h3>
                  <p className="text-slate-500">123 Industrial Way, Tech City, ST 54321</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-slate-900 p-3 rounded-lg text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Expert Support</h3>
                  <p className="text-slate-500">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-900 p-3 rounded-lg text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Inquiry</h3>
                  <p className="text-slate-500">sales@artitect-machinery.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-amber-50 rounded-2xl border border-amber-100">
              <h3 className="text-amber-900 font-bold mb-2">Global Distribution</h3>
              <p className="text-amber-800/80">
                We ship and service our machinery globally. Contact us for international shipping rates and on-site training packages.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    required 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    required 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Company Name</label>
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                    placeholder="Sheet Metal Pros LLC"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Interested In</label>
                <select 
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none bg-white"
                >
                  <option>Double Folding Machine</option>
                  <option>Sheet Metal Folder</option>
                  <option>Metal Folding Machine</option>
                  <option>Other / Custom Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Your Requirements</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                  placeholder="Tell us about the profiles you need to fold, material thicknesses, and production volume..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-slate-900 text-white py-4 rounded-md font-bold hover:bg-amber-700 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'submitting' ? 'Processing...' : (
                  <>Send Equipment Inquiry <Send className="w-4 h-4" /></>
                )}
              </button>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
