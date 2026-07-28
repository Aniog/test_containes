import React, { useEffect, useRef } from 'react';
import InquiryForm from '../components/InquiryForm';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative text-white py-16 overflow-hidden">
        <div
          data-strk-bg-id="contact-hero-bg"
          data-strk-bg="[contact-hero-subtitle] [contact-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 id="contact-hero-title" className="text-4xl font-semibold text-white mb-4">Contact Us</h1>
          <p id="contact-hero-subtitle" className="text-lg text-slate-200 max-w-2xl mx-auto">
            Tell us about your sourcing requirements. We will respond within one business day with a preliminary assessment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-brand-navy mb-6">Send an Inquiry</h2>
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <InquiryForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Head Office</h3>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>SSourcing China Co., Ltd.</p>
                    <p>Room 1208, Tower A, Greenland Center</p>
                    <p>500 Yunjin Road, Xuhui District</p>
                    <p>Shanghai 200232, China</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Contact Information</h3>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>Email: info@ssourcingchina.com</p>
                    <p>Tel: +86 21 5888 1234</p>
                    <p>Fax: +86 21 5888 1235</p>
                    <p>WeChat: SSourcingChina</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Regional Offices</h3>
                  <div className="text-sm text-slate-600 space-y-3">
                    <div>
                      <div className="font-medium">Shenzhen</div>
                      <div>+86 755 8888 4321</div>
                    </div>
                    <div>
                      <div className="font-medium">Ningbo</div>
                      <div>+86 574 8888 5678</div>
                    </div>
                    <div>
                      <div className="font-medium">Qingdao</div>
                      <div>+86 532 8888 9012</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Business Hours</h3>
                  <div className="text-sm text-slate-600">
                    Monday – Friday: 8:30 AM – 6:00 PM (China Standard Time)<br />
                    Closed on Chinese national holidays
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-brand-navy mb-6 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="font-medium text-brand-navy mb-2">1. Initial Response</div>
              <p className="text-slate-600">We acknowledge your inquiry within 24 hours and assign a project contact.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="font-medium text-brand-navy mb-2">2. Requirements Discussion</div>
              <p className="text-slate-600">A brief call or email exchange to clarify specifications, volumes, and timeline.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="font-medium text-brand-navy mb-2">3. Preliminary Quote</div>
              <p className="text-slate-600">We provide a service proposal and fee estimate based on your project scope.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
