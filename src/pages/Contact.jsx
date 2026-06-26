import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_details: '',
    quantity: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: formData
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(error?.message || response?.errors?.join(', ') || 'Failed to submit inquiry');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_details: '',
        quantity: ''
      });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20 bg-cover bg-center relative">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="contact-bg"
          data-strk-bg="[contact-header] office building"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        ></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h1 id="contact-header" className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300">
            Tell us what you're looking for, and our team will get back to you within 24 hours with a comprehensive sourcing plan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-slate-600 mb-8">
                  Whether you have a specific product in mind or just want to explore how we can help your business, we're here to talk.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-slate-600">info@ssourcingchina.com</p>
                    <p className="text-slate-500 text-sm mt-1">We aim to reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-slate-600">+86 (123) 4567-8900</p>
                    <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am-6pm (Beijing Time)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                    <p className="text-slate-600">
                      Suite 1205, Times Square Building,<br />
                      Nanshan District, Shenzhen,<br />
                      Guangdong, China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6">Free Sourcing Quote</h3>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-800 mb-2">Inquiry Sent Successfully!</h4>
                  <p className="text-green-700">
                    Thank you for reaching out. One of our sourcing experts will review your requirements and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
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
                        required
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                        required
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your Company LLC"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                      <input 
                        type="text" 
                        id="quantity" 
                        name="quantity" 
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="e.g. 500 pcs, 1 20ft container"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_details" className="block text-sm font-medium text-slate-700 mb-1">Product Details & Requirements *</label>
                    <textarea 
                      id="product_details" 
                      name="product_details" 
                      value={formData.product_details}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Please describe the product you want to source, including material, size, target price, and any special requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full bg-primary text-primary-foreground py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
                  >
                    {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Your information is kept strictly confidential. We will never spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;