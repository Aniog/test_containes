import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl opacity-90">Get a free consultation for your sourcing project.</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary mb-8">Let's Discuss Your Project</h2>
          <p className="text-lg text-slate-600 mb-12">
            Whether you are just starting your sourcing journey or looking for a more reliable partner in China, our team is here to help.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-slate-600">info@ssourcingchina.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us (GMT+8)</h4>
                <p className="text-slate-600">+86 123 4567 8900</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Main Office</h4>
                <p className="text-slate-600 text-left">Guangzhou International Trade Center, Guangdong, China</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input type="text" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input type="email" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company Name</label>
                <input type="text" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <select className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none">
                    <option>Product Sourcing Inquiry</option>
                    <option>Factory Audit Request</option>
                    <option>Quality Inspection Service</option>
                    <option>General Support</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea className="w-full border p-3 rounded-lg h-32 focus:ring-2 focus:ring-primary/20 outline-none" required></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-md">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
