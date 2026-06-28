import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';

const Contact = () => {
  return (
    <div>
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact SSourcing China</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to optimize your supply chain? Reach out to our team of experts in Shenzhen.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Get in Touch</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Our Office</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Room 1205, Modern Business Center,<br />
                      Futian District, Shenzhen, China 518000
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
                    <p className="text-slate-600">General: +86 123 4567 8910</p>
                    <p className="text-slate-600">WhatsApp: +86 123 4567 8910</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                    <p className="text-slate-600">Quotes: info@ssourcingchina.com</p>
                    <p className="text-slate-600">Support: support@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
                    <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                <h4 className="font-bold mb-4 text-xl">Speak to an Expert</h4>
                <p className="text-slate-400 mb-6 text-sm">We provide pre-consultations via Zoom or WeChat for large-scale procurement projects.</p>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40">
                  Book a Discovery Call
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold uppercase tracking-widest text-lg">
          [Interactive Map Placeholder]
        </div>
      </section>
    </div>
  );
};

export default Contact;
