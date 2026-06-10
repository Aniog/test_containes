import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/shared/InquiryForm';

export default function InquirySection() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} id="inquiry" className="relative bg-white">
      <div className="container-x section">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Free sourcing quote</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2230] leading-tight">
              Tell us what you are sourcing. We'll reply within 1 business day.
            </h2>
            <p className="mt-4 text-base text-[#3D4A5C] leading-relaxed">
              Share a few details about your product, target quantity, and ideal price. A project manager from our Shenzhen office will email you back with next steps — and, if it is a fit, a shortlist of 3–5 suppliers within 3–5 working days.
            </p>

            <div className="mt-8 space-y-3 text-sm text-[#3D4A5C]">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8743B] mt-2 flex-shrink-0"></span>
                <span>No charge for the initial supplier shortlist on most projects.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8743B] mt-2 flex-shrink-0"></span>
                <span>Your inquiry goes to a real person, not a chatbot.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8743B] mt-2 flex-shrink-0"></span>
                <span>We treat your product idea as confidential.</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-[#DDE2EC]">
              <img
                alt="SSourcing China Shenzhen office — project managers reviewing supplier quotes"
                className="w-full h-48 object-cover"
                data-strk-img-id="inquiry-img-5b7c9d"
                data-strk-img="[inquiry-eyebrow] [inquiry-title]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6 md:p-8">
              <span id="inquiry-eyebrow" className="eyebrow">Sourcing inquiry form</span>
              <h3 id="inquiry-title" className="mt-2 text-2xl font-bold text-[#1A2230]">Get a free sourcing quote</h3>
              <p className="mt-2 text-sm text-[#3D4A5C]">We typically reply within 1 business day.</p>
              <div className="mt-6">
                <InquiryForm idPrefix="home-inquiry" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
