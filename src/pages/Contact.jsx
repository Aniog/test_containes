import React, { useEffect, useRef } from 'react';
import InquiryForm from '@/components/forms/InquiryForm';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl">
            Tell us about your sourcing requirements. We will respond within 24 business hours with a project proposal.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-6">Request a Sourcing Quote</h2>
            <div className="bg-[#f8fafc] rounded-lg p-8">
              <InquiryForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h3 className="font-semibold mb-4">Office Information</h3>
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium text-[#0A2540] mb-1">Shanghai Headquarters</div>
                  <div className="text-[#475569]">
                    Room 1208, Building 3<br />
                    1288 Yuyuan Road<br />
                    Shanghai 200050, China
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0A2540] mb-1">Phone</div>
                  <div className="text-[#475569]">+86 21 5888 1234</div>
                </div>
                <div>
                  <div className="font-medium text-[#0A2540] mb-1">Email</div>
                  <div className="text-[#475569]">info@ssourcingchina.com</div>
                </div>
                <div>
                  <div className="font-medium text-[#0A2540] mb-1">Business Hours</div>
                  <div className="text-[#475569]">
                    Monday - Friday<br />
                    8:30 AM - 6:00 PM (China Standard Time)
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t">
                <h3 className="font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-[#475569]">
                  <li className="flex gap-3"><span className="text-[#C5A46E] font-medium">1.</span> We review your requirements within 24 hours.</li>
                  <li className="flex gap-3"><span className="text-[#C5A46E] font-medium">2.</span> We send a project proposal with scope and pricing.</li>
                  <li className="flex gap-3"><span className="text-[#C5A46E] font-medium">3.</span> If you proceed, we begin supplier identification.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
