import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

// Fallback User helper since SDK exports are missing
const UserHelper = {
  upsert: async (userData) => {
    const { data, error } = await client
      .from('Users')
      .upsert(userData, { onConflict: 'email' })
      .select()
      .single();
    if (error) throw error;
    return data;
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
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
        role: 'guest',
      });

      // 2. Insert Inquiry Message
      const { error: inquiryError } = await client
        .from('InquiryMessages')
        .insert({
          data: {
            user_id: userRecord.id,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
          },
        });

      if (inquiryError) throw inquiryError;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error('Inquiry submission failed:', err);
      setError('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-slate-600">
              Have questions about our folding machines or need a custom solution? 
              Our team of experts is ready to help you optimize your sheet metal production.
            </p>

            <dl className="mt-12 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                  <Mail className="h-5 w-5 text-amber-500" />
                </div>
                <dd className="text-slate-600">sales@artitect.com</dd>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                  <Phone className="h-5 w-5 text-amber-500" />
                </div>
                <dd className="text-slate-600">+1 (555) 123-4567</dd>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <dd className="text-slate-600">123 Industrial Way, Metal City, MC 98765</dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="mt-6 text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-2 text-slate-600">We've received your inquiry and will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-900">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900">Message</label>
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
