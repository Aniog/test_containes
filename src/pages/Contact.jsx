import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Factory } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Double Folder',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\\S+@\\S+\\.\\S+$/.test(v.email)) return 'Provide a valid email';
    if (!v.message.trim()) return 'Message is required';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      // Direct insertion without user relation
      const { error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company || undefined,
            interest: values.interest,
            message: values.message,
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      setValues({
        name: '',
        email: '',
        company: '',
        interest: 'Double Folder',
        message: ''
      });

    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Let's Talk Engineering</h1>
          <p className="text-xl text-slate-600">
            Whether you need detailed specifications for our double folding machines or want to discuss a custom build, our team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">Email Us</p>
                    <p className="text-slate-600">info@artitectmachinery.com</p>
                    <p className="text-slate-600">sales@artitectmachinery.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">Call Us</p>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-slate-500 text-sm">Mon-Fri, 8am - 6pm CST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">Headquarters</p>
                    <p className="text-slate-600">123 Industrial Way<br/>Engineering District, TX 75001<br/>United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-lg text-white">
              <Factory className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Our Showroom</h3>
              <p className="text-slate-300 mb-4">Want to see our machines in action? Schedule a visit to our primary manufacturing facility.</p>
              <p className="font-medium text-blue-400 tracking-wide">Appointment Only</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Request a Quote</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                  <p>Thank you for reaching out to Artitect Machinery. One of our engineers will be in touch with you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-medium hover:text-green-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium text-slate-700 text-sm">Full Name *</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        value={values.name} 
                        onChange={onChange} 
                        required 
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium text-slate-700 text-sm">Email Address *</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={values.email} 
                        onChange={onChange} 
                        required 
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block font-medium text-slate-700 text-sm">Company Name</label>
                      <input 
                        id="company" 
                        name="company" 
                        type="text" 
                        value={values.company} 
                        onChange={onChange} 
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder="Acme Fabrication"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="interest" className="block font-medium text-slate-700 text-sm">Machine of Interest</label>
                      <select 
                        id="interest" 
                        name="interest" 
                        value={values.interest} 
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="Double Folder">Double Folder D-Series</option>
                        <option value="Metal Folder">Metal Folder M-Series</option>
                        <option value="Custom Machine">Custom Machine Build</option>
                        <option value="Support">Support / Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium text-slate-700 text-sm">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      value={values.message} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      placeholder="Please describe your production line requirements..."
                    />
                  </div>

                  {status === 'error' && !!error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm" role="alert">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-md transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? 'Submitting Details...' : 'Submit Request'}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">We usually respond to all inquiries within 24 business hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;