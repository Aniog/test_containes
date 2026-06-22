import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Search } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email address';
    if (!v.message.trim()) return 'Please provide details about your sourcing needs';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    
    const err = validate(values);
    if (err) { 
      setErrorMessage(err); 
      return; 
    }

    setStatus('submitting');
    
    try {
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      
      // Upsert User manually using DataClient
      const resUser = await client
        .from('Users')
        .insert({
           data: {
             email: values.email,
             name: values.name,
             role: 'guest'
           }
        });
      const userResponse = resUser.data;
      const userError = resUser.error;
        
      // Just extract user id, or if error assume it's created and try to fetch
      let userId;
      if (userError) {
          const resFetchUser = await client.from('Users').select('*').eq('email', values.email);
          const fetchUser = resFetchUser.data;
          const fetchErr = resFetchUser.error;
          if (!fetchErr && fetchUser && fetchUser.list && fetchUser.list.length > 0) {
              userId = fetchUser.list[0].id;
          }
      } else {
          userId = userResponse?.id || (userResponse?.list && userResponse?.list[0]?.id);
      }

      // Insert inquiry into ContactInquiries table
      const res = await client
        .from('ContactInquiries')
        .insert({
          data: {
            user_id: userId,
            name: values.name,
            email: values.email,
            company: values.company,
            product_category: values.product_category,
            message: values.message,
            status: 'new'
          }
        });

      const response = res.data;
      const insertError = res.error;

      if (insertError) throw insertError;
      // also verify if the query result says successful but actually returned an error structure
      if (res.success === false) {
          throw new Error(res.errors ? res.errors.join(', ') : 'Failed to submit inquiry');
      }

      setStatus('success');
      setValues({
          name: '',
          email: '',
          company: '',
          product_category: '',
          message: ''
      });

    } catch (error) {
      console.error('Contact Form Error:', error);
      setErrorMessage(error.message || 'An error occurred while submitting your message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Contact Our Sourcing Experts</h1>
          <p className="text-xl text-slate-300">
            Send us your product requirements or general inquiries. We aim to respond to all qualified sourcing requests within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-grow bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Let's discuss your sourcing needs</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
                    <p className="text-slate-600 mb-1">For general inquiries and sourcing quotes:</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-blue-600 font-medium hover:underline">info@ssourcingchina.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
                    <p className="text-slate-600 mb-1">Mon-Fri from 9am to 6pm (Beijing Time)</p>
                    <a href="tel:+8612345678900" className="text-slate-900 font-medium hover:text-blue-600">+86 123 4567 8900</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Visit Our Office</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tianhe International Building, 3rd Floor<br />
                      Tianhe District, Guangzhou<br />
                      Guangdong Province, China 510000
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-500" /> What to include in your inquiry?
                </h3>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>• Product name and specifications</li>
                  <li>• Target quantity (MOQ)</li>
                  <li>• Material or quality requirements</li>
                  <li>• Target price range (if any)</li>
                  <li>• Delivery location</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h2>
                
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. One of our sourcing experts will get back to you within 24 hours.</p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-blue-600 font-medium hover:underline focus:outline-none"
                    >
                        Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    {status === 'error' && errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm font-medium">
                            {errorMessage}
                        </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                            required
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 px-4 py-3 border"
                            placeholder="John Doe"
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={onChange}
                            required
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 px-4 py-3 border"
                            placeholder="john@example.com"
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                            Company Name (Optional)
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={values.company}
                            onChange={onChange}
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 px-4 py-3 border"
                            placeholder="Acme Inc."
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-2">
                            Product Category (Optional)
                        </label>
                        <input
                            type="text"
                            id="product_category"
                            name="product_category"
                            value={values.product_category}
                            onChange={onChange}
                            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 px-4 py-3 border"
                            placeholder="e.g. Electronics, Apparel"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Inquiry *
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={values.message}
                        onChange={onChange}
                        required
                        className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 px-4 py-3 border"
                        placeholder="Please describe your sourcing needs in detail..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;