import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building, Globe, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    productCategory: initialCategory,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      // 1. Check if User object is available, if not fallback to empty user_id
      // Since @strikingly/sdk might not export User directly in this version, we'll
      // proceed with submitting the form response directly.
      
      // 2. Insert Form Response
      const { data: response, error: submitError } = await client
        .from('ContactFormResponses')
        .insert({
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            website: formData.website,
            productCategory: formData.productCategory,
            message: formData.message,
          }
        });
        
      if (submitError) {
        console.error("Submit error:", submitError);
        throw submitError;
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        website: '',
        productCategory: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Submission failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Tell us about your product requirements. Our sourcing experts usually respond within 24-48 hours.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-50 relative overflow-hidden">
        
        {/* Background decorative blob */}
        <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-blue-100/50 mix-blend-multiply blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8 mb-12 lg:mb-0">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
                <p className="mt-2 text-slate-600">Reach out directly or use the form. We're here to help.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4 text-base text-slate-600">
                    <p className="font-semibold text-slate-900">China Headquarters</p>
                    <p>Futian District</p>
                    <p>Shenzhen, Guangdong</p>
                    <p>China 518000</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4 text-base text-slate-600">
                    <p>+86 123 4567 8900</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4 text-base text-slate-600">
                    <p>info@ssourcingchina.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-xl p-6 text-white text-sm shadow-md">
                 <h3 className="font-semibold text-lg flex items-center mb-2"><MessageSquare className="w-5 h-5 mr-2" /> Working Hours</h3>
                 <p>Monday - Friday</p>
                 <p>9:00 AM - 6:00 PM (Beijing Time, UTC+8)</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="px-6 py-8 sm:p-10">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
                      <p className="text-lg text-slate-600 mb-6">Thank you for contacting us. One of our sourcing specialists will review your requirements and get back to you shortly.</p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      >
                         Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMsg && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
                            {errorMsg}
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name <span className="text-red-500">*</span></label>
                          <input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name <span className="text-red-500">*</span></label>
                          <input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Business Email <span className="text-red-500">*</span></label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-4 w-4 text-slate-400" />
                            </div>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                           <div className="mt-1 relative rounded-md shadow-sm">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-4 w-4 text-slate-400" />
                             </div>
                            <input type="tel" name="phone" id="phone" className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company Name</label>
                           <div className="mt-1 relative rounded-md shadow-sm">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building className="h-4 w-4 text-slate-400" />
                             </div>
                            <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-slate-700">Website</label>
                           <div className="mt-1 relative rounded-md shadow-sm">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Globe className="h-4 w-4 text-slate-400" />
                             </div>
                            <input type="url" name="website" id="website" value={formData.website} onChange={handleChange} placeholder="https://" className="pl-10 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700">Product Category</label>
                        <select id="productCategory" name="productCategory" value={formData.productCategory} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50">
                          <option value="">Select a category</option>
                          <option value="electronics">Consumer Electronics</option>
                          <option value="apparel">Apparel & Textiles</option>
                          <option value="home">Home & Garden</option>
                          <option value="industrial">Industrial & Tools</option>
                          <option value="health">Health & Personal Care</option>
                          <option value="custom">Custom OEM/ODM</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                          Project Details <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-slate-500 mb-2">Please include product name, specifications, estimated MOQs, and target regions.</p>
                        <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border bg-slate-50"></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                        >
                          {isSubmitting ? "Sending..." : "Submit Inquiry"}
                        </button>
                      </div>
                      <p className="text-xs text-center text-slate-500">Your information is secure and will never be shared.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
