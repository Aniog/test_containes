import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product_category: 'Consumer Electronics',
    estimated_quantity: '',
    product_details: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return "Please enter your name.";
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email address.";
    if (!values.product_details.trim()) return "Please provide some details about the product.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setStatus('submitting');

    try {
      // For this implementation, we will store the inquiry directly without upserting User first,
      // as the CRM User SDK requires a specialized backend endpoint, or we can use the regular schema
      // for the form.

      // Submit Inquiry
      const { data: response, error: dbError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            product_category: values.product_category,
            estimated_quantity: values.estimated_quantity,
            product_details: values.product_details,
            status: "new"
          }
        });

      if (dbError || response?.success === false) {
        throw new Error(dbError?.message || response?.errors?.join(', ') || "Failed to submit inquiry.");
      }

      setStatus('success');
      setValues({
        name: '', email: '', company: '', product_category: 'Consumer Electronics', estimated_quantity: '', product_details: ''
      });

    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'An error occurred while submitting your request. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300">
            Tell us about your sourcing needs. Get a free feasibility check and quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-[#c2182b] text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-red-200" />
                    <div>
                      <h4 className="font-semibold text-lg">China Office</h4>
                      <p className="text-red-100">Futian District, Shenzhen<br/>Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-red-200" />
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-red-100">inquiries@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-red-200" />
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-red-100">+86 138-0000-0000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-sm text-red-200">
                Operating Hours:<br/>
                Mon - Fri, 9:00 AM - 6:00 PM (GMT+8)
              </div>
            </div>

            {/* Form Form */}
            <div className="lg:w-2/3 p-10 lg:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Sourcing Quote</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Request Received!</h3>
                  <p className="text-green-800">Thank you for your inquiry. A sourcing specialist will review your requirements and contact you within 24 hours.</p>
                  <Button 
                    className="mt-6 bg-slate-900 hover:bg-slate-800 text-white"
                    onClick={() => setStatus('idle')}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-md text-sm font-medium border border-red-200">
                      {errorMsg}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                      <Input id="name" name="name" value={values.name} onChange={handleChange} required className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                      <Input type="email" id="email" name="email" value={values.email} onChange={handleChange} required className="bg-slate-50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" value={values.company} onChange={handleChange} className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Product Category <span className="text-red-500">*</span></Label>
                      <select 
                        id="category" 
                        name="product_category" 
                        value={values.product_category} 
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="Consumer Electronics">Consumer Electronics</option>
                        <option value="Home & Furniture">Home & Furniture</option>
                        <option value="Fitness & Sporting Goods">Fitness & Sporting Goods</option>
                        <option value="Office Supplies">Office Supplies</option>
                        <option value="Industrial & Machinery">Industrial & Machinery</option>
                        <option value="Gadgets & Novelties">Gadgets & Novelties</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated Order Quantity</Label>
                    <Input id="quantity" name="estimated_quantity" value={values.estimated_quantity} onChange={handleChange} placeholder="e.g. 500 pcs/month" className="bg-slate-50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Product Details & Specifications <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="details" 
                      name="product_details" 
                      value={values.product_details} 
                      onChange={handleChange} 
                      placeholder="Please provide links to similar products, material requirements, target price, etc." 
                      rows={5} 
                      className="bg-slate-50"
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#c2182b] hover:bg-[#a01423] text-white py-6 text-lg font-bold"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}