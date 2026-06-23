import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Contact = () => {
  const containerRef = useRef(null);
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <section 
        className="relative bg-slate-900 py-16 md:py-24 text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-slate-800"
          data-strk-bg-id="contact-header-bg-99x2b"
          data-strk-bg="[contact-page-desc] [contact-page-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 id="contact-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Get a Free Sourcing Quote</h1>
          <p id="contact-page-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tell us about your project. Our sourcing experts will reply within 24 hours with an initial feasibility assessment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Offices</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="font-bold text-slate-900">China Head Office</h4>
                      <p className="text-slate-600 mt-1">Rm 1205, Modern Business Center,<br/>Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600 mt-1">+86 123 4567 8900</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600 mt-1">info@ssourcingchina.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2 mt-0.5">1.</span>
                    <span className="text-slate-600 text-sm">We review your requirements within 24 hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2 mt-0.5">2.</span>
                    <span className="text-slate-600 text-sm">We schedule a brief call to align on expectations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2 mt-0.5">3.</span>
                    <span className="text-slate-600 text-sm">We start identifying qualified suppliers.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
                {formStatus === 'success' ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Inquiry Received!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for contacting SSourcing China. One of our sourcing specialists will review your requirements and get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setFormStatus('idle')} variant="outline">Send Another Inquiry</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-slate-900">First Name</label>
                        <input required id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-slate-900">Last Name</label>
                        <input required id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address</label>
                        <input required id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-900">Company Name</label>
                        <input id="company" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Company Ltd." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-900">Interested Service</label>
                      <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white">
                        <option>Full Sourcing Service (A-Z)</option>
                        <option>Supplier Verification / Factory Audit</option>
                        <option>Quality Control Inspection</option>
                        <option>Shipping & Logistics</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="details" className="text-sm font-medium text-slate-900">Product Details & Requirements</label>
                      <textarea required id="details" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-y" placeholder="Please describe the product you want to source, target quantities, budget, and any specific requirements..."></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={formStatus === 'submitting'}>
                      {formStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                    <p className="text-xs text-center text-slate-500">We respect your privacy. All information is kept confidential.</p>
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
