import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div>
      <section className="bg-[#0F172A] text-white py-14">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-[#94A3B8] max-w-2xl">
            Submit your sourcing requirements. Our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card">
                <h2 className="font-semibold text-xl mb-6">Request a Sourcing Quote</h2>
                <InquiryForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="card mb-6">
                <h3 className="font-semibold mb-4">Office</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="text-[#0EA5E9] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[#334155]">SSourcing China</p>
                      <p className="text-[#475569]">Room 1208, Building 3</p>
                      <p className="text-[#475569]">No. 88 Century Avenue</p>
                      <p className="text-[#475569]">Pudong, Shanghai 200120</p>
                      <p className="text-[#475569]">China</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="text-[#0EA5E9] flex-shrink-0 mt-0.5" size={18} />
                    <a href="mailto:info@ssourcingchina.com" className="text-[#475569] hover:text-[#0EA5E9]">
                      info@ssourcingchina.com
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="text-[#0EA5E9] flex-shrink-0 mt-0.5" size={18} />
                    <a href="tel:+862150000000" className="text-[#475569] hover:text-[#0EA5E9]">
                      +86 21 5000 0000
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="text-[#0EA5E9] flex-shrink-0 mt-0.5" size={18} />
                    <div className="text-[#475569]">
                      <p>Monday – Friday</p>
                      <p>9:00 AM – 6:00 PM (China Standard Time)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm text-[#475569]">
                  <li className="flex gap-2">
                    <span className="text-[#0EA5E9]">•</span>
                    <span>Response within 24 business hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#0EA5E9]">•</span>
                    <span>Initial assessment of your requirements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#0EA5E9]">•</span>
                    <span>Transparent fee proposal before any work begins</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#0EA5E9]">•</span>
                    <span>No obligation to proceed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-t border-[#E2E8F0]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-3">Prefer to Speak Directly?</h2>
            <p className="text-[#475569] mb-4">
              Call us during business hours or send an email. We are happy to discuss your project before you submit a formal inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+862150000000" className="btn-secondary">+86 21 5000 0000</a>
              <a href="mailto:info@ssourcingchina.com" className="btn-secondary">info@ssourcingchina.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
