import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>
            <p className="text-lg text-[#475569]">
              We respond to qualified inquiries within 1-2 business days. 
              Please provide as much detail as possible about your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <InquiryForm title="Submit a Sourcing Inquiry" />
            </div>

            <div className="lg:col-span-2">
              <div className="card mb-6">
                <h3 className="font-semibold mb-4">Office</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#64748B] mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p>SSourcing China</p>
                      <p className="text-[#475569]">Room 1208, Building 3</p>
                      <p className="text-[#475569]">No. 88 Caobao Road, Xuhui District</p>
                      <p className="text-[#475569]">Shanghai 200233, China</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#64748B] flex-shrink-0" size={18} />
                    <a href="mailto:info@ssourcingchina.com" className="text-[#2563EB]">info@ssourcingchina.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#64748B] flex-shrink-0" size={18} />
                    <a href="tel:+862162345678" className="text-[#2563EB]">+86 21 6234 5678</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#64748B] flex-shrink-0" size={18} />
                    <span className="text-[#475569]">Monday - Friday, 9:00 - 18:00 (CST)</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-4">What to Include</h3>
                <p className="text-sm text-[#475569] mb-3">To help us respond quickly, please provide:</p>
                <ul className="text-sm text-[#475569] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] mt-1">•</span> Product description and specifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] mt-1">•</span> Target price range and annual volume
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] mt-1">•</span> Quality requirements or certifications needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] mt-1">•</span> Target timeline for first order
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] mt-1">•</span> Your company background and market
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-3">Before You Contact Us</h2>
            <p className="text-[#475569] mb-4">
              We focus on qualified commercial inquiries. We are not able to assist with:
            </p>
            <div className="text-sm text-[#475569] space-y-1">
              <p>Personal purchases or small retail orders</p>
              <p>Requests for supplier contact information without engagement</p>
              <p>General market research without a specific sourcing project</p>
            </div>
            <p className="text-xs text-[#64748B] mt-4">
              If your inquiry falls outside our scope, we will let you know promptly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
