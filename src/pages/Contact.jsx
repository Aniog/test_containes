import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_interest: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return "Valid email is required";
    if (!formData.product_interest.trim()) return "Product interest is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    const err = validate();
    if (err) {
      setErrorMessage(err);
      return;
    }

    setStatus('submitting');

    try {
      // In a real environment, we'd use the properly initialized DataClient
      if (client) {
         const { data: response, error: submitError } = await client
          .from('Inquiry')
          .insert({
            data: {
              name: formData.name,
              email: formData.email,
              company: formData.company || undefined,
              phone: formData.phone || undefined,
              product_interest: formData.product_interest,
              message: formData.message || undefined,
              status: 'new' // Default from schema
            }
          })
          .select()
          .single();

        if (submitError || response?.success === false) {
           let msg = submitError?.message || 'Request failed';
           if (Array.isArray(response?.errors) && response.errors.length > 0) {
             msg = response.errors.join(', ');
           }
           throw new Error(msg);
        }
      } else {
        // Fallback for demo when client isn't working
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Mock submitted:", formData);
      }
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_interest: '',
        message: ''
      });

    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us what you're looking for, and our team will evaluate your project and get back to you within 24-48 hours.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            
            {/* Contact Information (Left) */}
            <div className="lg:w-1/3 bg-blue-600 text-white p-10 flex flex-col">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-12">
                Fill out the form to the right, or contact us directly using the information below.
              </p>
              
              <div className="space-y-8 flex-grow">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">China Office</h3>
                    <p className="text-blue-100">123 Sourcing Hub Building<br/>Futian District, Shenzhen<br/>Guangdong 518000, China</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone / WhatsApp</h3>
                    <p className="text-blue-100">+86 123 4567 8900</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-300 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-blue-100">info@ssourcingchina.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500">
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-blue-100 text-sm">Monday - Friday: 9:00 AM - 6:00 PM (Beijing Time GMT+8)</p>
              </div>
            </div>

            {/* Form (Right) */}
            <div className="lg:w-2/3 p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tell us about your project</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col justify-center items-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. A sourcing expert will review your requirements and contact you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-center border border-red-200">
                      <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_interest" className="block text-sm font-medium text-slate-700 mb-1">What product do you want to source? *</label>
                    <input 
                      type="text" 
                      id="product_interest" 
                      name="product_interest" 
                      value={formData.product_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                      placeholder="e.g. Ergonomic Office Chairs, Stainless Steel Mugs"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                    <p className="text-xs text-slate-500 mb-2">Please include target quantities, materials, customization needs, or links to references.</p>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 resize-none"
                      placeholder="We are looking for a manufacturer who can..."
                    ></textarea>
                  </div>

                  <div>
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        'Get My Free Quote'
                      )}
                    </button>
                    <p className="text-xs text-slate-500 mt-3 flex items-center">
                       <ShieldCheck className="w-4 h-4 mr-1 text-slate-400" />
                       Your information is kept strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Re-import missing icon
import { ShieldCheck } from 'lucide-react';

export default Contact;