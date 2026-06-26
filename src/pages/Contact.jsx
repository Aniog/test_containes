import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    country: '',
    product_type: '',
    quantity: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.message.trim()) return 'Please provide some details about your project.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setStatus('submitting');

    try {
      // Direct insertion without importing User
      const { data, error } = await client
        .from('ContactInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company_name: values.company_name,
            country: values.country,
            product_type: values.product_type,
            quantity: values.quantity,
            message: values.message
          }
        });

      if (error || data?.success === false) {
        throw new Error(data?.errors?.join(', ') || error?.message || 'Failed to submit inquiry.');
      }

      // Success
      setStatus('success');
      setValues({
        name: '', email: '', phone: '', company_name: '',
        country: '', product_type: '', quantity: '', message: ''
      });

    } catch (error) {
      console.error(error);
      setErrorMsg(error.message || 'An unexpected error occurred. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="contact-title">
          Contact Our Sourcing Experts
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto" id="contact-desc">
          Tell us about your product needs. The more details you provide, the more accurately we can quote and assist you.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col">
            <h3 className="text-2xl font-bold mb-8">Reach Out Directly</h3>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 text-slate-200">Guangzhou Office</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Suite 1205, Modern Business Center<br />
                    Tianhe District, Guangzhou<br />
                    510000, China
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 text-slate-200">Phone & WhatsApp</h4>
                  <p className="text-slate-400 text-sm">+86 138 0000 0000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 text-slate-200">Email</h4>
                  <p className="text-slate-400 text-sm">info@ssourcingchina.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 text-slate-200">Working Hours</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM (GMT+8)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-slate-500">
              Response time: We typically reply to all inquiries within 24 hours.
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-2/3 p-10">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in py-20">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Sent Successfully!</h3>
                <p className="text-slate-600 max-w-md">
                  Thank you for reaching out. One of our sourcing specialists will review your project details and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
                
                {status === 'error' && errorMsg && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                    {errorMsg}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={values.name} 
                      onChange={onChange} 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={values.email} 
                      onChange={onChange} 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone / WhatsApp</label>
                    <input 
                      type="text" 
                      id="phone" 
                      name="phone" 
                      value={values.phone} 
                      onChange={onChange} 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company_name" className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      id="company_name" 
                      name="company_name" 
                      value={values.company_name} 
                      onChange={onChange} 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="product_type" className="block text-sm font-bold text-slate-700 mb-2">Target Product</label>
                    <input 
                      type="text" 
                      id="product_type" 
                      name="product_type" 
                      value={values.product_type} 
                      onChange={onChange} 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                      placeholder="e.g. Smart Pet Feeder"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-bold text-slate-700 mb-2">Estimated Quantity</label>
                    <input 
                      type="text" 
                      id="quantity" 
                      name="quantity" 
                      value={values.quantity} 
                      onChange={onChange} 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                      placeholder="e.g. 1000 pcs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-bold text-slate-700 mb-2">Destination Country</label>
                  <input 
                    type="text" 
                    id="country" 
                    name="country" 
                    value={values.country} 
                    onChange={onChange} 
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow disabled:opacity-50"
                    placeholder="e.g. United States, UK, Australia"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={values.message} 
                    onChange={onChange} 
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none disabled:opacity-50"
                    placeholder="Please describe your requirements, specifications, target price, or any specific challenges you're facing..."
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-md flex items-center justify-center transition-colors shadow-md disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Sending Inquiry...' : (
                      <>
                        Submit Inquiry
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}