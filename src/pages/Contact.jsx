import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-brand-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">Connect with Experts</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Whether you need technical support, a custom machine quote, or information on parts, our team is here to help you optimize your folding workflow.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
            <div className="p-8 border border-slate-100 bg-slate-50/30">
              <Mail className="w-10 h-10 text-brand-accent mx-auto mb-6" />
              <h3 className="font-bold text-brand-primary mb-2">Email</h3>
              <p className="text-slate-500 text-sm">sales@artitect.com<br />support@artitect.com</p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50/30">
              <Phone className="w-10 h-10 text-brand-accent mx-auto mb-6" />
              <h3 className="font-bold text-brand-primary mb-2">Sales</h3>
              <p className="text-slate-500 text-sm">+1 (800) 123-4567<br />Mon-Fri 8am-6pm</p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50/30">
              <MapPin className="w-10 h-10 text-brand-accent mx-auto mb-6" />
              <h3 className="font-bold text-brand-primary mb-2">Location</h3>
              <p className="text-slate-500 text-sm">Precision Park Ave<br />Tech Valley, CA 94043</p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50/30">
              <Clock className="w-10 h-10 text-brand-accent mx-auto mb-6" />
              <h3 className="font-bold text-brand-primary mb-2">Technical</h3>
              <p className="text-slate-500 text-sm">Available 24/7 for<br />Premium Clients</p>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
