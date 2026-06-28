import React from 'react';
import InquiryForm from '../components/contact/InquiryForm';

const Contact = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300">Tell us about your sourcing project. We respond within 24 business hours.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6 text-sm text-slate-600">
              <div>
                <div className="font-medium text-slate-900 mb-1">Office</div>
                <p>Shanghai, China<br />Room 1208, Tower B<br />No. 88 Century Avenue</p>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Phone</div>
                <p>+86 21 5888 0000</p>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Email</div>
                <p>info@ssourcingchina.com</p>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Business Hours</div>
                <p>Monday - Friday<br />9:00 AM - 6:00 PM (CST)</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mb-8">
              <h2 className="font-semibold mb-2">Request a Free Sourcing Quote</h2>
              <p className="text-sm text-slate-600">Complete the form below and we will prepare a project assessment.</p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;