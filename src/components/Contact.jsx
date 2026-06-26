import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: 'Double Folding Machine',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { data: response, error } = await client
        .from('ContactInquiry')
        .insert({
          data: formData
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.[0] || 'Submission failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', product_interest: 'Double Folding Machine', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 id="contact-title" className="text-4xl md:text-6xl mb-8">Request a <span className="text-brand-gold italic">Proposal</span></h2>
          <p className="text-brand-light/60 text-lg mb-10 font-light leading-relaxed">
            Our engineering team is ready to discuss your specific folding requirements. From architectural profiles to industrial components, we provide the solution.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center rounded-sm">
                <CheckCircle2 className="text-brand-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mt-1">Expert Advice</h4>
                <p className="text-brand-light/40 text-sm mt-1">Direct access to machinery consultants.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center rounded-sm">
                <Send className="text-brand-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mt-1">Quick Response</h4>
                <p className="text-brand-light/40 text-sm mt-1">Proposal turnaround within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 text-brand-dark rounded-sm shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-green-100 flex items-center justify-center rounded-full mx-auto mb-6">
                <CheckCircle2 className="text-green-600 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Request Received</h3>
              <p className="text-brand-gray/60">An Artitect specialist will contact you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-brand-gold font-bold uppercase tracking-widest text-sm underline"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gray/60 mb-2">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-brand-gray/20 py-2 focus:border-brand-gold outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gray/60 mb-2">Work Email</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-brand-gray/20 py-2 focus:border-brand-gold outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gray/60 mb-2">Company</label>
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b border-brand-gray/20 py-2 focus:border-brand-gold outline-none transition-colors"
                    placeholder="Artitect Ltd."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gray/60 mb-2">Machine Type</label>
                  <select 
                    name="product_interest"
                    value={formData.product_interest}
                    onChange={handleChange}
                    className="w-full border-b border-brand-gray/20 py-2 focus:border-brand-gold outline-none transition-colors bg-transparent cursor-pointer"
                  >
                    <option>Double Folding Machine</option>
                    <option>Sheet Metal Folder</option>
                    <option>Metal Folder Machine</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-gray/60 mb-2">Message / Requirements</label>
                <textarea 
                  required
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-brand-gray/10 p-4 focus:border-brand-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your project length, thickness, and material type..."
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-sm flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <button 
                disabled={status === 'loading'}
                className={cn(
                  "w-full py-5 bg-brand-gold text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2",
                  status === 'loading' && "opacity-70 cursor-not-allowed"
                )}
              >
                {status === 'loading' ? 'Processing...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
