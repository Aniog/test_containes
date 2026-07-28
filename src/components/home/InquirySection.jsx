import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import SectionHeading from "@/components/shared/SectionHeading";
import InquiryForm from "@/components/shared/InquiryForm";
import strkImgConfig from "@/strk-img-config.json";
import { Clock, MessageCircle, Globe2 } from "lucide-react";

export default function InquirySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-brand-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Get a free quote"
              title="Tell us what you need to source"
              description="We reply within one business day (China time, GMT+8) with realistic MOQs, lead times, and a shortlist of factories. No commitment, no automated drip — a real person."
            />

            <div className="mt-8 grid grid-cols-1 gap-4">
              <InfoRow
                icon={Clock}
                title="Reply within 1 business day"
                text="Most inquiries get a first response in under 4 hours during China business hours."
              />
              <InfoRow
                icon={MessageCircle}
                title="Direct line to a project manager"
                text="You'll be working with the same person from brief to delivery, not a rotating inbox."
              />
              <InfoRow
                icon={Globe2}
                title="English, 中文, Deutsch"
                text="We work comfortably in English and Mandarin, with German on request for European clients."
              />
            </div>

            <div className="mt-10 aspect-[16/10] bg-ink-100 rounded-lg overflow-hidden">
              <img
                alt="Sourcing team in Shenzhen office reviewing a buyer inquiry"
                data-strk-img-id="inquiry-photo-3f1a82"
                data-strk-img="[inquiry-eyebrow] [inquiry-title]"
                data-strk-img-ratio="16x10"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:hidden mb-6">
              <p
                id="inquiry-eyebrow"
                className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-600"
              >
                Inquiry form
              </p>
              <h2
                id="inquiry-title"
                className="mt-2 text-2xl font-bold text-ink-900"
              >
                Send the details
              </h2>
            </div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-md bg-white border border-ink-200 text-brand-800 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-ink-900">{title}</div>
        <p className="text-sm text-ink-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
