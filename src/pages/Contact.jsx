import React from 'react';
import InquiryForm from '@/components/contact/InquiryForm';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Contact Our Sourcing Experts</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Scale your business with a reliable partner on the ground in China. Get a free consultation and customized sourcing quote today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-xl font-bold text-primary mb-6">Direct Contact</h3>
               <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-lg mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Email Us</p>
                    <p className="text-slate-600 text-sm">contact@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-lg mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Call Us</p>
                    <p className="text-slate-600 text-sm">+86 755 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Headquarters</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Futian District, Shenzhen,<br />Guangdong, China
                    </p>
                  </div>
                </div>
               </div>
            </div>

            <div className="bg-primary p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="mr-3 text-accent" /> Working Hours
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM (GMT+8)</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>9:30 AM - 1:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
              <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/10">
                <p className="text-xs italic">"We guarantee a response to all serious inquiries within 24 business hours."</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
