import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">GET IN TOUCH</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600">
              Tell us about your sourcing project. We respond to all inquiries within one business day.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="font-semibold text-lg mb-6">SSourcing China</h3>
              
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Office</div>
                    <div className="text-slate-600 leading-relaxed">
                      Yiwu, Zhejiang<br />
                      China 322000
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Phone / WeChat</div>
                    <a href="tel:+8657985588888" className="text-slate-600 hover:text-slate-900">+86 579 8558 8888</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Response Time</div>
                    <div className="text-slate-600">Within 1 business day</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                We work with buyers in English. Our team is available during China business hours (GMT+8). 
                For urgent matters outside these hours, email is the most reliable channel.
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500 px-2">
              <strong>Privacy note:</strong> Your inquiry details are kept confidential. We do not share your information with suppliers without your explicit permission.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <InquiryForm title="Submit a Sourcing Inquiry" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
