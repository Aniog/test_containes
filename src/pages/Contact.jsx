import React from 'react';
import { InquiryForm } from '@/components/InquiryForm.jsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-8 pb-24 top-padding">
      <div className="bg-slate-50 py-16 mb-16 border-b">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6 text-slate-900">
               Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
               Have a project in mind? We're ready to help you source better, faster, and safer from China. Let's discuss your requirements.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                  <p className="text-slate-600 mb-8">
                     Fill out the form with your sourcing needs, or contact us directly using the information below. We aim to respond to all inquiries within 24 hours.
                  </p>
               </div>

               <div className="space-y-6">
                  <div className="flex items-start">
                     <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                        <p className="text-slate-600">
                           Suite 802, Excellence Century Center<br/>
                           Futian District, Shenzhen<br/>
                           Guangdong Province, China 518000
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                        <p className="text-slate-600">+86 138-0000-0000</p>
                        <p className="text-sm text-slate-500 mt-1">Available via WhatsApp & WeChat</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                        <p className="text-slate-600">sourcing@ssourcingchina.com</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                        <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h3>
               <p className="text-slate-600 mb-8">Please provide as much detail as possible about your project so we can give you an accurate assessment.</p>
               <InquiryForm />
            </div>

         </div>
      </div>
    </div>
  );
}
