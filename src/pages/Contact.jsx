import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address';
    if (!v.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    
    const err = validate(values);
    if (err) {
      setErrorMsg(err);
      return;
    }

    setStatus('submitting');

    try {
      // Insert into SourcingInquiry schema table
      const { data: response, error: submitError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone || '',
            company: values.company || '',
            product_interest: values.product_interest || '',
            message: values.message,
            status: 'new',
            created_at: new Date().toISOString()
          }
        });

      if (submitError || response?.success === false) {
        throw submitError || new Error(response?.errors?.join(', ') || 'Failed to submit inquiry');
      }

      setStatus('success');
      setValues({
        name: '', email: '', phone: '', company: '', product_interest: '', message: ''
      });

    } catch (error) {
      console.error('Submission error:', error);
      setErrorMsg(error.message || 'An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-600">
            Tell us what you're looking for, and our sourcing experts will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center text-slate-800">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-md">
                  Thank you for reaching out. One of our sourcing specialists will review your requirements and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-start gap-3 border border-red-100">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{errorMsg}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={values.name} 
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={values.email} 
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">Phone & WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={values.phone} 
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={values.company} 
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="product_interest" className="block text-sm font-semibold text-slate-700">What product(s) are you looking to source?</label>
                  <input 
                    type="text" 
                    id="product_interest" 
                    name="product_interest" 
                    value={values.product_interest} 
                    onChange={handleChange}
                    placeholder="e.g. Wireless headphones, Kitchen gadgets..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={values.message} 
                    onChange={handleChange}
                    placeholder="Please include details like target quantities, specifications, material requirements, or packaging needs."
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-y"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Request...
                    </span>
                  ) : 'Get Your Free Quote'}
                </button>
                <p className="text-center text-sm text-slate-500">Your information is strictly confidential. We hate spam too.</p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full opacity-20"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Info</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">China Office</h4>
                    <p className="text-slate-300">Room 101, Business Center,<br/>Futian District, Shenzhen,<br/>Guangdong, China</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone / WhatsApp</h4>
                    <p className="text-slate-300">+86 123 4567 8900</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-slate-300">info@ssourcingchina.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                    <p className="text-slate-300">Monday - Friday:<br/>9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}