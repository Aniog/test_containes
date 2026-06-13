import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/InquiryForm';

export default function Contact() {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div>
      {/* Banner */}
      <section ref={bannerRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="contact-banner-bg"
          data-strk-bg="[contact-subtitle] [contact-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p id="contact-subtitle" className="text-brand-400 font-semibold text-sm mb-3">Get in Touch</p>
          <h1 id="contact-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Ready to start sourcing? Submit your inquiry and we will respond within 24 hours 
            with a free assessment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">Our Office</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Address</p>
                    <p className="text-sm text-slate-500">
                      Room 1803, Global Trade Center<br />
                      Tianhe District, Guangzhou<br />
                      Guangdong, China 510620
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:text-brand-700">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Phone</p>
                    <a href="tel:+861234567890" className="text-sm text-brand-600 hover:text-brand-700">
                      +86 123 4567 890
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">WeChat / WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Office Hours</p>
                    <p className="text-sm text-slate-500">
                      Monday &ndash; Friday: 9:00 &ndash; 18:00 (CST)<br />
                      Saturday: 9:00 &ndash; 12:00 (CST)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mt-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-slate-800">Response Time</p>
                    <p className="text-sm text-slate-500">
                      We respond to all inquiries within 24 hours. Most inquiries receive a response within 4-6 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Get a Free Sourcing Quote
                </h2>
                <p className="text-slate-500 mb-6">
                  Fill out the form below and our team will prepare a free sourcing proposal tailored to your needs.
                </p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-500">Guangzhou, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}