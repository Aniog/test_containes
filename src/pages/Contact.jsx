import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Double Folding Machine',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg(null);

    try {
      const { data: response, error } = await client
        .from('ContactRequest')
        .insert({
          data: formData
        })
        .select()
        .single();

      if (error || response?.success === false) {
          console.error("Submission error:", error || response);
          setErrorMsg(error?.message || "Failed to submit request. Please try again.");
          setStatus('error');
          return;
      }
      
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: 'Double Folding Machine',
        message: ''
      });

    } catch (err) {
      console.error("Exception during submission:", err);
      setErrorMsg(err.message || "An unexpected error occurred.");
      setStatus('error');
    }
  };

  return (
    <div className="py-12 bg-white min-h-[calc(100vh-theme(spacing.16))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 uppercase">Contact Artitect</h1>
            <p className="text-lg text-slate-600">
              Get in touch with our engineering and sales team to discuss your manufacturing needs. We're here to help you find the perfect folding solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
             {/* Contact Information */}
             <div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide">Direct Contact</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 shrink-0 border border-slate-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-1">Sales & Inquiries</h3>
                      <p className="text-slate-600 text-lg">+1 (800) 555-FOLD</p>
                      <p className="text-slate-500 text-sm mt-1">Mon-Fri, 8am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 shrink-0 border border-slate-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-1">Email Us</h3>
                      <p className="text-slate-600 text-lg">sales@artitectmachinery.com</p>
                      <p className="text-slate-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 shrink-0 border border-slate-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-1">Headquarters & Manufacturing</h3>
                      <p className="text-slate-600">
                        100 Industrial Parkway<br />
                        Steel City, OH 44101<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-sans">Request a Quote or Consultation</h2>
                
                {status === 'success' ? (
                   <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                      <p className="font-semibold text-lg mb-2">Message Sent Successfully</p>
                      <p>Thank you for contacting Artitect Machinery. A representative will be in touch with you shortly.</p>
                      <Button variant="outline" className="mt-6 border-green-300 text-green-700 hover:bg-green-100" onClick={() => setStatus('idle')}>
                        Send another message
                      </Button>
                   </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md text-sm">
                           {errorMsg}
                        </div>
                     )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          className="bg-slate-50 border-slate-200 focus-visible:ring-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleInputChange}
                          className="bg-slate-50 border-slate-200 focus-visible:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                        <Input 
                          id="email" 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email} 
                          onChange={handleInputChange}
                          className="bg-slate-50 border-slate-200 focus-visible:ring-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange}
                          className="bg-slate-50 border-slate-200 focus-visible:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm font-medium text-slate-700">Area of Interest</label>
                      <select 
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                         <option value="Double Folding Machine">Double Folding Machine</option>
                         <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                         <option value="Service & Support">Service & Support</option>
                         <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Message / Requirements *</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        value={formData.message} 
                        onChange={handleInputChange}
                        className="bg-slate-50 border-slate-200 focus-visible:ring-slate-900 resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 h-12 text-base font-semibold tracking-wide" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
