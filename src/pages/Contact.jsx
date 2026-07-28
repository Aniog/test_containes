import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCheck, Clock } from 'lucide-react';
import { ImageHelper, DataClient, User } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Upsert user first
      const userRecord = await User.upsert({
        email: formData.email,
        name: formData.name,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to retrieve user profile.');
      }

      // Insert contact inquiry
      const { error: responseError } = await client
        .from('ContactInquiries')
        .insert({
          data: {
            user_id: userRecord.id,
            name: formData.name,
            email: formData.email,
            company: formData.company,
            productType: formData.productType,
            message: formData.message,
          }
        });

      if (responseError) throw responseError;

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', productType: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Submission failed:', error);
      // In a real app we'd show an error state here, for now we just log it
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 pt-20 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="contact-header-bg"
          data-strk-bg="[contact-header-desc] [contact-header-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="contact-header-title" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Get a Free Sourcing Quote</h1>
          <p id="contact-header-desc" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your product requirements, and our sourcing experts will get back to you within 24 hours with an actionable plan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
               
               {/* Contact Information */}
               <div className="lg:w-1/3">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                  
                  <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-slate-900 mb-1">Office Location</h3>
                           <p className="text-slate-600 leading-relaxed text-sm">
                              123 Business Center, Tianhe District<br />
                              Guangzhou, Guangdong<br />
                              China 510000
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-slate-900 mb-1">Phone Number</h3>
                           <p className="text-slate-600 leading-relaxed text-sm">
                              <a href="tel:+8612345678900" className="hover:text-blue-600 transition-colors">+86 123 4567 8900</a><br/>
                              <span className="text-xs text-slate-500">Mon-Fri, 9am - 6pm (CST)</span>
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                           <Mail className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-slate-900 mb-1">Email Address</h3>
                           <p className="text-slate-600 leading-relaxed text-sm">
                              <a href="mailto:info@ssourcingchina.com" className="hover:text-blue-600 transition-colors">info@ssourcingchina.com</a><br/>
                              <a href="mailto:quotes@ssourcingchina.com" className="hover:text-blue-600 transition-colors">quotes@ssourcingchina.com</a>
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200">
                     <h3 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Our Response Promise
                     </h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        We understand that time is critical in global trade. We guarantee a preliminary response to all inquiries within <strong className="text-slate-900">24 business hours</strong>.
                     </p>
                  </div>
               </div>

               {/* Inquiry Form */}
               <div className="lg:w-2/3">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 relative overflow-hidden">
                     
                     {isSuccess ? (
                        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-20">
                           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                              <MessageSquareCheck className="w-10 h-10" />
                           </div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent Successfully!</h3>
                           <p className="text-slate-600 max-w-md mx-auto">
                              Thank you for reaching out. One of our sourcing specialists will review your requirements and get back to you within 24 hours.
                           </p>
                           <button 
                              onClick={() => setIsSuccess(false)}
                              className="mt-8 px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                           >
                              Send Another Inquiry
                           </button>
                        </div>
                     ) : null}

                     <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Details</h2>
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                           <div>
                              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                              <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 required
                                 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors"
                                 placeholder="John Doe"
                              />
                           </div>
                           <div>
                              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                                 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors"
                                 placeholder="john@example.com"
                              />
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                           <div>
                              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                              <input
                                 type="text"
                                 id="company"
                                 name="company"
                                 value={formData.company}
                                 onChange={handleChange}
                                 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors"
                                 placeholder="Your Company Ltd."
                              />
                           </div>
                           <div>
                              <label htmlFor="productType" className="block text-sm font-medium text-slate-700 mb-2">Product Category *</label>
                              <select
                                 id="productType"
                                 name="productType"
                                 value={formData.productType}
                                 onChange={handleChange}
                                 required
                                 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors appearance-none"
                              >
                                 <option value="" disabled>Select a category</option>
                                 <option value="electronics">Consumer Electronics</option>
                                 <option value="apparel">Apparel & Textiles</option>
                                 <option value="home">Home & Garden</option>
                                 <option value="hardware">Hardware & Tools</option>
                                 <option value="packaging">Packaging & Printing</option>
                                 <option value="other">Other / Custom</option>
                              </select>
                           </div>
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Requirements & Specifications *</label>
                           <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors resize-y"
                              placeholder="Please describe your product, estimated order quantity, target price, and any specific certifications needed..."
                           ></textarea>
                        </div>

                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed"
                        >
                           {isSubmitting ? (
                              'Sending...'
                           ) : (
                              <>
                                 Submit Inquiry <Send className="ml-2 w-4 h-4" />
                              </>
                           )}
                        </button>
                        <p className="text-xs text-slate-500 mt-4">
                           By submitting this form, you agree to our Privacy Policy. Your information is kept strictly confidential.
                        </p>
                     </form>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
}
