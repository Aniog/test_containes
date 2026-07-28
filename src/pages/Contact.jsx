import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
  };

  return (
    <div ref={containerRef} className="bg-white">
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="contact-hero-bg-1"
          data-strk-bg="[contact-hero-title] [contact-hero-subtitle] office building shenzhen"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p id="contact-hero-subtitle" className="text-xl text-slate-300">
              Ready to start your sourcing journey in China? Get in touch with our expert team for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
              <h2 id="form-title" className="text-3xl font-bold mb-8 text-slate-900">Get a Free Sourcing Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@company.com" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Company" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Product Category</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white">
                      <option>Consumer Electronics</option>
                      <option>Home & Garden</option>
                      <option>Apparel & Textiles</option>
                      <option>Machinery & Tools</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Estimated Order Quantity / Details</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Tell us about the product you want to source and your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-bold flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry</span>
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. All inquiries are strictly confidential.
                </p>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900">Local Presence, Global Service</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 transition-transform hover:scale-110">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Our Shenzhen Office</h3>
                      <p className="text-slate-600">
                        Room 802, Block A, Hi-Tech Plaza<br />
                        Futian District, Shenzhen, China 518000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 transition-transform hover:scale-110">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Line</h3>
                      <p className="text-slate-600">+86 755 1234 5678</p>
                      <p className="text-slate-600">+86 138 0000 0000 (WhatsApp/WeChat)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100 transition-transform hover:scale-110">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Email Inquiries</h3>
                      <p className="text-slate-600 font-medium">info@ssourcingchina.com</p>
                      <p className="text-slate-500 text-sm">24-hour response time guaranteed.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-blue-600 font-bold">
                    <Clock className="w-5 h-5" />
                    <span>Office Hours</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)<br />
                    Sat: 10:00 AM - 2:00 PM (GMT+8)
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-blue-600 font-bold">
                    <Globe className="w-5 h-5" />
                    <span>Global Coverage</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Serving clients across USA, Europe, Australia, and ASEAN.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 border border-slate-200">
                <img 
                  data-strk-img-id="contact-map-img"
                  data-strk-img="shenzhen city map skyline"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our location in Shenzhen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Have Quick Questions?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Check out our sourcing process or FAQ section to find answers to common questions about supplier verification, shipping times, and service fees.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="outline" className="border-slate-300">View FAQ</Button>
            <Button variant="outline" className="border-slate-300">Sourcing Process</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
