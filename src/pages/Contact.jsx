import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';

const projectUrl = STRK_PROJECT_URL;
const projectAnonKey = STRK_PROJECT_ANON_KEY;
const client = new DataClient(projectUrl, projectAnonKey);

// Local helper for User management since it's not exported from SDK current version
const UserHelper = {
  upsert: async (userData) => {
    // For the special Users table, we use the DataClient
    const { data: response, error } = await client
      .from('users')
      .upsert(userData, { onConflict: 'email' })
      .select()
      .single();
    
    if (error) throw error;
    return response;
  }
};

const Contact = () => {
  const location = useLocation();
  const initialProduct = location.state?.product || '';

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    product_interest: initialProduct,
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 1. Upsert user
      const userRecord = await UserHelper.upsert({
        email: values.email,
        name: values.name,
        role: 'guest'
      });

      if (!userRecord?.id) {
        throw new Error('Failed to identify user');
      }

      // 2. Insert form submission
      const { error: submitError } = await client
        .from('ContactFormSubmission')
        .insert({
          data: {
            user_id: userRecord.id,
            name: values.name,
            email: values.email,
            subject: values.subject,
            product_interest: values.product_interest,
            message: values.message
          }
        });

      if (submitError) throw submitError;

      toast.success('Message sent! Our team will contact you shortly.');
      setValues({
        name: '',
        email: '',
        subject: '',
        product_interest: '',
        message: ''
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                <p className="text-slate-600">Have questions about our machines or need a specialized solution? Our technical team is ready to help.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-amber-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-400 font-medium">Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-amber-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600">sales@artitect-machinery.com</p>
                    <p className="text-slate-600">support@artitect-machinery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-amber-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Headquarters</h3>
                    <p className="text-slate-600">123 Industrial Way<br />Tech Park, CA 94000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="General Inquiry"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Machine of Interest</label>
                      <select 
                        name="product_interest"
                        value={values.product_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-slate-50"
                      >
                        <option value="">Select a Machine</option>
                        <option value="Double Folding Machine">Double Folding Machine</option>
                        <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                        <option value="Metal Folder Machine">Metal Folder Machine</option>
                        <option value="Other">Other / Custom</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea 
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-slate-50"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
