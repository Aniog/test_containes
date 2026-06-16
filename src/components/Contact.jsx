import React, { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Please provide your name';
    if (!v.email.trim()) return 'Please provide your email address';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email format';
    if (!v.message.trim()) return 'Please provide a message or inquiry';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      // 1. Upsert the User
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        phone: values.phone || undefined,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to register inquiry profile.');
      }

      // 2. Insert Form Response
      const { error: responseError } = await client
        .from('ContactFormResponses')
        .insert({
          data: {
            user_id: userRecord.id,
            email: values.email,
            name: values.name,
            company: values.company,
            phone: values.phone,
            message: values.message,
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      setValues({ name: '', email: '', company: '', phone: '', message: '' });

      // Reset success message after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (err) {
      console.error(err);
      setError(err.message || 'There was an error submitting your inquiry. Please try again or contact us directly.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <h2 id="contact-section-title" className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">Get in Touch</h2>
            <h3 id="contact-section-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Ready to Upgrade Your Production Line?
            </h3>
            <p id="contact-section-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
              Contact our engineering and sales team today to discuss your specific folding requirements, request machinery specifications, or arrange a demonstration of our ARTITECT folders.
            </p>
            
            <div className="hidden lg:block relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg mt-8">
               <img
                  data-strk-img-id="contact-hero-img"
                  data-strk-img="[contact-section-desc] [contact-section-heading] industrial sales office"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Contact Artitect Sales"
                  className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-800 mb-6">Request Information</h4>
            
            <form onSubmit={onSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
                    placeholder="John Doe"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
                    placeholder="john@company.com"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
                    placeholder="Acme Manufacturing"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={onChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Inquiry / Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-colors resize-y"
                  placeholder="Tell us about the thickness, length, and materials you typically fold..."
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md text-sm border border-red-200">
                  {error}
                </div>
              )}
              
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-800 rounded-md text-sm border border-green-200 font-medium">
                  Thank you! Your inquiry has been received. Our sales engineering team will contact you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-blue-900/70 text-white font-semibold py-3 px-6 rounded-md transition-colors flex justify-center items-center h-12"
              >
                {status === 'submitting' ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;