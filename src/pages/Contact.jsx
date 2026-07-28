import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import InquiryForm from '../components/ui/InquiryForm';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-[#0A2540] mb-4">Contact Us</h1>
            <p className="text-lg text-[#4B5563]">
              Tell us about your sourcing requirements. We respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-[#0A2540] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0A2540] mb-1">Office</div>
                    <p className="text-sm text-[#4B5563]">
                      Room 1208, Building 3<br />
                      1288 Huashan Road<br />
                      Shanghai 200050, China
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0A2540] mb-1">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#1E40AF] hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0A2540] mb-1">Phone</div>
                    <a href="tel:+862150000000" className="text-sm text-[#1E40AF] hover:underline">
                      +86 21 5000 0000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0A2540] mb-1">Business Hours</div>
                    <p className="text-sm text-[#4B5563]">
                      Monday – Friday<br />
                      9:00 AM – 6:00 PM (China Standard Time)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-[#F9FAFB] rounded-lg">
                <h3 className="font-semibold text-[#0A2540] mb-2 text-sm">What to Include</h3>
                <p className="text-sm text-[#4B5563]">
                  For faster response, please include product details, target specifications, estimated quantity, and your timeline in your inquiry.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[#0A2540] mb-6 text-center">What Happens Next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-[#1E40AF] font-semibold text-sm mb-2">1. Initial Review</div>
              <p className="text-sm text-[#4B5563]">
                We review your inquiry and may ask clarifying questions about your requirements.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-[#1E40AF] font-semibold text-sm mb-2">2. Preliminary Assessment</div>
              <p className="text-sm text-[#4B5563]">
                We provide an initial assessment of feasibility, timeline, and approach.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-[#1E40AF] font-semibold text-sm mb-2">3. Proposal</div>
              <p className="text-sm text-[#4B5563]">
                If appropriate, we provide a detailed proposal including scope and fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
