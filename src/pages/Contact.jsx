import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';
import InquiryForm from '../components/common/InquiryForm';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-header-title" className="text-4xl md:text-5xl font-bold">Connect With Our Sourcing Experts</h1>
          <p id="contact-header-subtitle" className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to optimize your supply chain? Reach out for a free consultation and project assessment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our China Offices</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Shenzhen Headquarters</h4>
                    <p className="text-slate-600">
                      Room 802, High-Tech Plaza, Nanshan District<br />
                      Shenzhen, Guangdong, China 518057
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Ningbo Logistics Hub</h4>
                    <p className="text-slate-600">
                      Level 15, International Trade Center, Jiangdong District<br />
                      Ningbo, Zhejiang, China 315000
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 text-slate-600">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>contact@ssourcingchina.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>+86 755 1234 5678</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Follow Our Sourcing Updates</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-slate-100 rounded-full hover:bg-blue-600 transition-colors group">
                      <Linkedin className="h-6 w-6 text-slate-700 group-hover:text-white" />
                    </a>
                    <a href="#" className="p-3 bg-slate-100 rounded-full hover:bg-blue-600 transition-colors group">
                      <Twitter className="h-6 w-6 text-slate-700 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <InquiryForm />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-blue-600 font-bold mb-1">12-24 Hours</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Response Time</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-blue-600 font-bold mb-1">Expert Team</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Native English Speakers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
             <div>
               <h2 id="map-title" className="text-3xl font-bold text-white mb-6">Local Presence Across China</h2>
               <p className="text-slate-400 text-lg mb-8">
                 We are strategically located near major ports and industrial clusters, allowing our team to be on-site at any factory within hours.
               </p>
               <div className="space-y-4">
                  {['Guangdong Industrial Cluster', 'Zhejiang Manufacturing Hub', 'Jiangsu Electronics Zone', 'Shandong Logistics Corridor'].map((area, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <span>{area}</span>
                    </div>
                  ))}
               </div>
             </div>
             <div className="mt-12 lg:mt-0">
               <img
                data-strk-img-id="china-map-img"
                data-strk-img="Map of China showing industrial clusters and ports sourcing agent"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="rounded-2xl opacity-80"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="China Sourcing Network"
               />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
