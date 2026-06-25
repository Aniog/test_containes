import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div>
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-[#475569] max-w-2xl">Tell us about your sourcing requirements. We typically respond within one business day.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="border border-[#E2E8F0] rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-xl font-semibold mb-6">Send an Inquiry</h2>
              <InquiryForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold mb-4">Office</h3>
              <div className="space-y-4 text-sm text-[#475569]">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                  <div>
                    Room 1208, Building 3<br />
                    No. 1688 North Sichuan Road<br />
                    Shanghai 200080, China
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                  <div>+86 21 5888 1234</div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                  <div>info@ssourcingchina.com</div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                  <div>Monday - Friday, 9:00 - 18:00 (GMT+8)</div>
                </div>
              </div>
            </div>

            <div className="border border-[#E2E8F0] rounded-xl p-6 bg-[#F8FAFC]">
              <h4 className="font-semibold mb-3 text-sm">What to Include</h4>
              <ul className="text-sm text-[#475569] space-y-2">
                <li>• Product category and specifications</li>
                <li>• Target quantity and timeline</li>
                <li>• Quality or certification requirements</li>
                <li>• Destination country for shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
