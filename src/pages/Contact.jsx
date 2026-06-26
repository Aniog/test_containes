import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-sm font-black tracking-[0.2em] text-slate-400 uppercase">Get in Touch</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Request a Personalized <span className="text-slate-500">Proposal.</span></h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Info */}
            <div className="space-y-12">
               <div className="space-y-6">
                 <h3 className="text-3xl font-black text-slate-900 leading-tight">Expert Guidance For Your <br />Industrial Production.</h3>
                 <p className="text-lg text-slate-500 leading-relaxed font-medium">
                   Our team of experts is ready to help you find the perfect folding machine for your business needs. Reach out today for technical consultations, pricing, or live demonstrations.
                 </p>
               </div>

               <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl inline-block">
                      <Phone className="w-6 h-6 text-slate-900" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Call Us</p>
                      <p className="font-bold text-slate-900">+1 (555) 000-1234</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl inline-block">
                      <Mail className="w-6 h-6 text-slate-900" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Email Us</p>
                      <p className="font-bold text-slate-900">contact@artitect.com</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl inline-block">
                      <MapPin className="w-6 h-6 text-slate-900" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Headquarters</p>
                      <p className="font-bold text-slate-900 text-sm">123 Industrial Way, Metal City, MC 94103</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl inline-block">
                      <Globe className="w-6 h-6 text-slate-900" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Global Reach</p>
                      <p className="font-bold text-slate-900">14 Worldwide Offices</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100">
               <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
