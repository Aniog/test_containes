import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
// Config will be created
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.js';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_category: 'Electronics',
    inquiry_type: 'Full Sourcing Service',
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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email';
    if (!v.message.trim()) return 'Message is required';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      // For this isolated build environment, we'll use a placeholder UUID 
      // since the User export from @strikingly/sdk is not available in the current mock package.
      
      const userId = '00000000-0000-0000-0000-000000000000';

      // 2. Submit the form data with the user_id
      const { error: responseError, data } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            user_id: userId,
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            product_category: values.product_category,
            inquiry_type: values.inquiry_type,
            message: values.message,
          }
        });

      if (responseError || data?.success === false) {
          console.error("Submission error data:", data);
          const errMsg = data?.errors?.join(', ') || responseError?.message || 'Submission failed';
          throw new Error(errMsg);
      }

      setStatus('success');
      setValues({
        name: '', email: '', phone: '', company: '', 
        product_category: 'Electronics', inquiry_type: 'Full Sourcing Service', message: ''
      });

    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while submitting your inquiry.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have a product you want to source from China? Let's discuss your requirements.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Sourcing Quote</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Inquiry Received!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. One of our sourcing experts will review your requirements and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
                  
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md text-sm mb-6" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input 
                        id="name" name="name" type="text" 
                        value={values.name} onChange={onChange} 
                        required 
                        className="w-full border border-slate-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input 
                        id="company" name="company" type="text" 
                        value={values.company} onChange={onChange} 
                        className="w-full border border-slate-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input 
                        id="email" name="email" type="email" 
                        value={values.email} onChange={onChange} 
                        required 
                        className="w-full border border-slate-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input 
                        id="phone" name="phone" type="tel" 
                        value={values.phone} onChange={onChange} 
                        className="w-full border border-slate-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1">Product Category</label>
                      <select 
                        id="product_category" name="product_category" 
                        value={values.product_category} onChange={onChange} 
                        className="w-full border border-slate-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white appearance-none"
                      >
                        {["Electronics", "Machinery", "Apparel", "Furniture", "Sports", "Packaging", "Other"].map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="inquiry_type" className="block text-sm font-medium text-slate-700 mb-1">Service Needed *</label>
                      <select 
                        id="inquiry_type" name="inquiry_type" 
                        value={values.inquiry_type} onChange={onChange} 
                        required
                        className="w-full border border-slate-300 rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white appearance-none"
                      >
                        {["Full Sourcing Service", "Factory Audit", "Quality Inspection", "Shipping & Logistics", "General Inquiry"].map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details *</label>
                    <textarea 
                      id="message" name="message" rows={5} 
                      value={values.message} onChange={onChange} 
                      required 
                      placeholder="Please include product specifications, target quantity, destination country, and any other relevant details."
                      className="w-full border border-slate-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 bg-white resize-y"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                  <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> We protect your information and will not share it with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Offices</h3>
              <p className="text-lg text-slate-600 mb-10">
                We are strategically located in Shenzhen, the manufacturing hub of China, allowing us rapid access to thousands of factories across Guangdong and the wider country.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-800 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Headquarters (Shenzhen)</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Suite 1205, Futian CBD Tower<br />
                      Fuhua 1st Road, Futian District<br />
                      Shenzhen, Guangdong Province, China 518048
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-800 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Phone</h4>
                    <p className="text-slate-600 leading-relaxed">
                      +86 138-xxxx-xxxx (China)<br />
                      Available on WhatsApp & WeChat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-800 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Email</h4>
                    <p className="text-slate-600 leading-relaxed">
                      info@ssourcingchina.com<br />
                      sales@ssourcingchina.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}