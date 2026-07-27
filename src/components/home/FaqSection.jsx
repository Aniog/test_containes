import React from "react";
import Faq from "@/components/site/Faq";
import { faqs } from "@/data/site";

const FaqSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Frequently asked</span>
            <h2
              id="faq-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[40px]"
            >
              Answers before you reach out.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600">
              If your question is not here, send it through the inquiry form
              below. We answer in English within one business day.
            </p>
          </div>
          <div className="md:col-span-8">
            <Faq items={faqs} idPrefix="home-faq" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
