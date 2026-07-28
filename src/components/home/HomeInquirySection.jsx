import { useEffect, useRef } from "react";
import InquiryForm from "@/components/sections/InquiryForm.jsx";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HomeInquirySection = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    let frame;
    if (containerRef.current) {
      frame = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ink-50 border-b border-ink-200"
    >
      <div className="container-page section-pad">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Start a project</p>
            <h2
              id="quote-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              Tell us what you're sourcing. We'll come back within one
              business day.
            </h2>
            <p
              id="quote-sub"
              className="mt-4 text-base text-ink-700 leading-relaxed"
            >
              Your inquiry is reviewed by an English-speaking project manager
              based in China — not a chatbot. We respond with either a
              realistic scope and next steps, or an honest "this isn't a good
              fit" if the project is not for us.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-700">
              {[
                "Free — no commitment to use our service",
                "Plain-English reply within 1 business day (CST)",
                "Sample of our shortlist format included in the reply",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInquirySection;
