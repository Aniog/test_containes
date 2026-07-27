import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';
import strkImgConfig from '@/strk-img-config.json';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic underline underline-offset-8 decoration-secondary">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Let's discuss how we can help you scale your sourcing from China with zero risk.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 underline decoration-secondary decoration-4 underline-offset-8">Contact Details</h2>
                <div className="space-y-8">
                  <ContactDetail icon={<Mail />} title="Email Us" value="info@ssourcingchina.com" />
                  <ContactDetail icon={<Phone />} title="Call / WhatsApp" value="+86 123 4567 8901" />
                  <ContactDetail icon={<MapPin />} title="Office Address" value="Tianhe District, Guangzhou, Guangdong, China" />
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="text-secondary w-6 h-6" /> Office Hours
                </h3>
                <ul className="space-y-3 text-slate-600 font-medium">
                  <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 - 18:00 (CST)</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 14:00 (CST)</span></li>
                  <li className="flex justify-between text-slate-400"><span>Sunday</span> <span>Closed</span></li>
                </ul>
              </div>

              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  data-strk-img-id="contact-map"
                  data-strk-img="Guangzhou city skyline professional"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our Office Location"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/5 rounded-full -z-10" />
                
                <h3 className="text-2xl font-bold mb-2">Tell us about your project</h3>
                <p className="text-slate-500 mb-10">Please provide as much detail as possible so we can give you an accurate feasibility study.</p>
                
                <InquiryForm buttonText="Get Preliminary Study & Quote" />
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <TrustBox icon={<ShieldAlert className="w-6 h-6" />} title="Non-Disclosure" desc="We sign NDAs to protect your proprietary designs and trade secrets." />
                <TrustBox icon={<Globe className="w-6 h-6" />} title="Global Support" desc="We've worked with clients from 45+ countries across all continents." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactDetail = ({ icon, title, value }) => (
  <div className="flex gap-5 group">
    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{title}</h4>
      <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const TrustBox = ({ icon, title, desc }) => (
  <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all">
    <div className="text-secondary">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ShieldAlert = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

export default Contact;
