import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Button } from '@/components/ui/button';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product_category: 'Electronics',
    details: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState(null);

  const categories = [
    "Electronics", "Home & Garden", "Apparel & Textiles", "Toys & Baby", "Industrial", "Other"
  ];

  const onChange = (e) => {
      const { name, value } = e.target;
      setValues(v => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
      e.preventDefault();
      setErrorMsg(null);
      setStatus('submitting');

      try {
          // Insert Inquiry directly
          const { error: dbError } = await client.from('SourcingInquiries').insert({
              data: {
                  ...values
              }
          });

          if (dbError) throw dbError;

          setStatus('success');
          setValues({
              name: '',
              company: '',
              email: '',
              phone: '',
              product_category: 'Electronics',
              details: ''
          });

      } catch (err) {
          console.error(err);
          setErrorMsg(err.message || "Failed to submit inquiry.");
          setStatus('error');
      }
  };

  return (
    <div className="pb-20">
      {/* Page Header */}
      <div className="bg-secondary py-16 text-center text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Tell us what you're looking for, and our team will get back to you within 24 hours.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                    <p className="text-slate-600 mb-8">
                        Have questions about our process before requesting a quote? Reach out to us directly through any of these channels.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary mb-1">Office Address</h3>
                            <p className="text-slate-600">Futian District<br/>Shenzhen, Guangdong Province<br/>China 518000</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary mb-1">Phone / WhatsApp</h3>
                            <p className="text-slate-600">+86 123 4567 8900<br/>Mon-Sat: 9am - 6pm (Beijing Time)</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary mb-1">Email</h3>
                            <a href="mailto:info@ssourcingchina.com" className="text-primary hover:underline">info@ssourcingchina.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Inquiry Form</h2>
                    
                    {status === 'success' ? (
                        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                            <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                            <p>Thank you for reaching out. A sourcing expert will contact you within 24 hours.</p>
                            <Button onClick={() => setStatus('idle')} className="mt-6" variant="outline">Submit Another Request</Button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-6">
                            
                            {status === 'error' && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm border border-red-200">
                                    {errorMsg}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={values.name}
                                        onChange={onChange}
                                        required
                                        className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                                    <input 
                                        type="text" 
                                        id="company" 
                                        name="company"
                                        value={values.company}
                                        onChange={onChange}
                                        className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                                        placeholder="Company LLC"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={values.email}
                                        onChange={onChange}
                                        required
                                        className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone / WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone"
                                        value={values.phone}
                                        onChange={onChange}
                                        className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="product_category" className="text-sm font-medium text-slate-700">Product Category *</label>
                                <select 
                                    id="product_category" 
                                    name="product_category"
                                    value={values.product_category}
                                    onChange={onChange}
                                    required
                                    className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="details" className="text-sm font-medium text-slate-700">Sourcing Details *</label>
                                <textarea 
                                    id="details" 
                                    name="details"
                                    value={values.details}
                                    onChange={onChange}
                                    required
                                    rows={5}
                                    className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                                    placeholder="Please provide details about the product, quantities, target price, links to references, etc."
                                ></textarea>
                            </div>

                            <Button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                            >
                                {status === 'submitting' ? (
                                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                                ) : 'Send Inquiry'}
                            </Button>

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