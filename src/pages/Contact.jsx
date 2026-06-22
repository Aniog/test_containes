import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.js';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service_interest: 'General Inquiry',
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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address';
    if (!v.message.trim()) return 'Message is required';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    try {
      // 1. Upsert User
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        phone: values.phone,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to create or retrieve user profile.');
      }

      // 2. Insert Form Response
      const { data: response, error: responseError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            user_id: userRecord.id,
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            service_interest: values.service_interest,
            message: values.message,
          }
        });

      if (responseError || response?.success === false) {
        throw new Error(responseError?.message || 'Failed to submit form');
      }

      setStatus('success');
      setValues({ name: '', email: '', company: '', phone: '', service_interest: 'General Inquiry', message: '' });

    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred during submission.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">Get a Free Sourcing Quote</h1>
            <p className="mt-4 text-lg text-slate-600 text-center">
              Tell us what you need. Our team will review your requirements and get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {/* Contact Info */}
             <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Office</h3>
                <div className="space-y-6 text-slate-600">
                   <div className="flex gap-4 items-start">
                     <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                     <div>
                       <strong className="block text-slate-900">Guangzhou Headquarters</strong>
                       <p>Room 1234, Business Tower</p>
                       <p>Tianhe District, Guangzhou</p>
                       <p>Guangdong Province, China 510000</p>
                     </div>
                   </div>
                   <div className="flex gap-4 items-center">
                     <Phone className="w-6 h-6 text-blue-600 shrink-0" />
                     <p>+86 138 0000 0000</p>
                   </div>
                   <div className="flex gap-4 items-center">
                     <Mail className="w-6 h-6 text-blue-600 shrink-0" />
                     <p>inquiries@ssourcingchina.com</p>
                   </div>
                </div>
                
                <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                   <h4 className="font-semibold text-slate-900 mb-2">Business Hours</h4>
                   <p className="text-slate-600 mb-1">Monday - Friday</p>
                   <p className="text-slate-600 font-medium">9:00 AM - 6:00 PM (GMT+8)</p>
                </div>
             </div>

             {/* Contact Form */}
             <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200">
               <form onSubmit={onSubmit} className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">Full Name *</label>
                   <div className="mt-2">
                     <input
                       type="text"
                       name="name"
                       id="name"
                       value={values.name}
                       onChange={onChange}
                       required
                       className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                     />
                   </div>
                 </div>

                 <div>
                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Email Address *</label>
                   <div className="mt-2">
                     <input
                       type="email"
                       name="email"
                       id="email"
                       value={values.email}
                       onChange={onChange}
                       required
                       className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                     />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-900">Company</label>
                     <div className="mt-2">
                       <input
                         type="text"
                         name="company"
                         id="company"
                         value={values.company}
                         onChange={onChange}
                         className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                       />
                     </div>
                   </div>
                   <div>
                     <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">Phone</label>
                     <div className="mt-2">
                       <input
                         type="tel"
                         name="phone"
                         id="phone"
                         value={values.phone}
                         onChange={onChange}
                         className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                       />
                     </div>
                   </div>
                 </div>

                 <div>
                    <label htmlFor="service_interest" className="block text-sm font-medium leading-6 text-slate-900">Service Interest</label>
                    <div className="mt-2">
                      <select
                        id="service_interest"
                        name="service_interest"
                        value={values.service_interest}
                        onChange={onChange}
                        className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3 bg-white"
                      >
                        <option>General Inquiry</option>
                        <option>Full Sourcing Service</option>
                        <option>Factory Audit Only</option>
                        <option>Quality Inspection Only</option>
                        <option>Shipping & Logistics</option>
                      </select>
                    </div>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">Message / Product Details *</label>
                   <div className="mt-2 text-sm text-slate-500 mb-2">Please include product name, specifications, estimated order quantity, and target price if known.</div>
                   <div className="mt-2">
                     <textarea
                       name="message"
                       id="message"
                       rows={4}
                       value={values.message}
                       onChange={onChange}
                       required
                       className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3"
                     />
                   </div>
                 </div>

                 <button
                   type="submit"
                   disabled={status === 'submitting'}
                   className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {status === 'submitting' ? 'Sending...' : 'Send Message'}
                 </button>
                 
                 {status === 'success' && (
                    <div className="rounded-md bg-green-50 p-4 mt-4">
                      <p className="text-sm font-medium text-green-800">Thanks! We've received your inquiry and will be in touch shortly.</p>
                    </div>
                 )}
                 {status === 'error' && !!error && (
                    <div className="rounded-md bg-red-50 p-4 mt-4">
                      <p className="text-sm font-medium text-red-800">{error}</p>
                    </div>
                 )}
               </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;