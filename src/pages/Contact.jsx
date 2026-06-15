import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 id="contact-title" className="text-4xl lg:text-5xl font-extrabold mb-6">Contact SSourcing China</h1>
            <p id="contact-subtitle" className="text-xl text-slate-400">
              Stop worrying about sourcing risks. Start building a reliable supply chain today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Our Local Presence</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="p-3 bg-white rounded-lg shadow-sm mr-4 border border-slate-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Shenzhen HQ</h4>
                      <p className="text-slate-600">1203, Block B, Century Tech Tower, Nanshan, Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-white rounded-lg shadow-sm mr-4 border border-slate-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Inquiries</h4>
                      <p className="text-slate-600">sales@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-white rounded-lg shadow-sm mr-4 border border-slate-100">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Direct Contact</h4>
                      <p className="text-slate-600">+86 755 1234 5678</p>
                      <p className="text-xs text-slate-400 mt-1">Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20"
                  data-strk-bg-id="contact-bg-world"
                  data-strk-bg="world map dots network"
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="400"
                />
                <div className="relative z-10">
                  <h4 className="font-bold text-slate-900 mb-4">International Support</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Our team is fluent in English, Chinese, and Spanish. We support clients from Europe, North America, Australia, and the Middle East.
                  </p>
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200">
                        <img 
                          data-strk-img-id={`team-avatar-${i}`}
                          data-strk-img="Professional business headshot sourcing agent"
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="100"
                          className="w-full h-full rounded-full object-cover"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt="Team member" 
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder or Visual */}
      <section id="location-visual" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="rounded-3xl overflow-hidden h-[400px] border-8 border-slate-50 shadow-inner relative group">
              <img
                data-strk-img-id="office-location-img"
                data-strk-img="Aerial view of Nanshan District Shenzhen skyscrapers modern business district"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Shenzhen Location"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-6 py-4 rounded-full shadow-2xl flex items-center space-x-3 transition-transform group-hover:scale-110">
                <Globe className="h-6 w-6 text-blue-600 animate-pulse" />
                <span className="font-bold text-slate-900">Your office in Shenzhen</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
