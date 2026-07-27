import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.");
      e.target.reset();
    }, 1500);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Ready to get your free sourcing quote? Tell us about your project.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-8">Get in Touch</h2>
                <div className="space-y-8 font-medium">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Phone size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg text-navy-900">+86 755 8888 8888</p>
                      <p className="text-sm text-gray-500">Mon - Fri, 9am - 6pm (GMT+8)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Mail size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-lg text-navy-900">info@ssourcing-china.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><MapPin size={24} /></div>
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-lg text-navy-900">Futian District, Shenzhen, China</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 p-8 rounded-2xl">
                <h3 className="font-bold text-navy-900 flex items-center gap-2 mb-4 uppercase tracking-widest text-sm">Follow Production</h3>
                <p className="text-gray-600 mb-6">Scan to chat with our sourcing specialists on WeChat.</p>
                <div className="w-48 h-48 bg-white p-4 rounded-xl mx-auto shadow-sm flex items-center justify-center">
                    <MessageCircle size={80} className="text-green-500 opacity-20" />
                    <span className="absolute text-xs font-bold text-gray-300">WECHAT QR CODE</span>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-navy-900 mb-8">Sourcing Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Work Email *</label>
                      <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Company Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="Tech Brands Ltd." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Product Category</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none">
                        <option>Consumer Electronics</option>
                        <option>Home & Furniture</option>
                        <option>Apparel & Textiles</option>
                        <option>Industrial Equipment</option>
                        <option>Beauty & Health</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Project Details *</label>
                    <textarea required rows="5" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="Describe the products you want to source, estimated quantity, and any special requirements..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-4 bg-navy-900 text-white rounded-xl font-bold text-lg hover:bg-navy-800 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3">
                    {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="h-96 w-full relative overflow-hidden grayscale opacity-50">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="map-bg"
          data-strk-bg="Shenzhen China aerial map"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-xl font-bold text-navy-900 flex items-center gap-2">
                <MapPin className="text-red-500" /> SSourcing China, Shenzhen
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
