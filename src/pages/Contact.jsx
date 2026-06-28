import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    machineInterest: 'Double Folder',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please provide a valid email address.';
    if (!values.message.trim()) return 'Message is required.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }
    
    setStatus('submitting');
    
    try {
      const { data: response, error: createError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            machineInterest: values.machineInterest,
            message: values.message,
          }
        })
        .select()
        .single();
        
      if (createError || response?.success === false) {
        let msg = createError?.message || 'Failed to submit form.';
        if (response?.errors && response.errors.length) {
          msg = response.errors.join(', ');
        }
        setErrorMsg(msg);
        setStatus('error');
        return;
      }
      
      setStatus('success');
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        machineInterest: 'Double Folder',
        message: ''
      });
      
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'An unexpected error occurred.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-brand-light py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-brand-dark sm:text-5xl mb-4">
            Contact <span className="text-brand-primary">Our Experts</span>
          </h1>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ready to upgrade your manufacturing facility with our sheet metal folding machines? Reach out for a consultation, quote, or technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-secondary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-semibold text-brand-dark">Headquarters</p>
                    <p className="text-brand-gray mt-1">123 Industrial Parkway<br/>Manufacturing District, 45678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-secondary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-semibold text-brand-dark">Phone</p>
                    <p className="text-brand-gray mt-1">+1 (555) 123-4567<br/>Mon-Fri, 8am - 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-secondary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-semibold text-brand-dark">Email</p>
                    <p className="text-brand-gray mt-1">sales@artitectmachinery.com<br/>support@artitectmachinery.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-primary p-8 rounded-2xl shadow-sm text-white">
              <h3 className="text-xl font-bold mb-4">Service & Maintenance</h3>
              <p className="mb-4 text-blue-100">
                Already own an ARTITECT machine? Our dedicated service team is available for scheduled maintenance and emergency support.
              </p>
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="h-5 w-5 text-brand-secondary" />
                <span>24/7 Emergency Support line</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Request a Quote</h3>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for contacting ARTITECT MACHINERY. A representative will be in touch with you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm relative" role="alert">
                      {errorMsg}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="machineInterest" className="block text-sm font-medium text-gray-700 mb-1">Machine of Interest</label>
                    <select
                      id="machineInterest"
                      name="machineInterest"
                      value={values.machineInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                    >
                      <option value="Double Folding Machine">DF-Pro Double Folding Machine</option>
                      <option value="Sheet Metal Folder">SMF-X Sheet Metal Folder</option>
                      <option value="Metal Folder Machine">Compact Metal Folder</option>
                      <option value="Custom Equipment">Custom Machinery</option>
                      <option value="Parts/Service">Parts & Service</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-blue-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
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
