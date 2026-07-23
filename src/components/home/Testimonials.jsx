import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/products";

export default function Testimonials() {
  return (
    <section className="section bg-editorial" aria-label="Customer reviews">
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">In Their Words</p>
          <h2 className="font-display text-cocoa-900 text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
            From the <em className="italic font-normal">dressing table</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col bg-ivory-100/60 border border-cocoa-900/8 p-7 md:p-8 rounded-sm"
            >
              <Quote
                className="w-6 h-6 text-champagne-500 mb-4"
                strokeWidth={1.2}
                fill="currentColor"
              />
              <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-3.5 h-3.5 fill-champagne-500 text-champagne-500"
                  />
                ))}
              </div>
              <blockquote className="font-display text-cocoa-900 text-[19px] md:text-xl leading-[1.45] flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-cocoa-900/10 flex items-center justify-between">
                <span className="text-[12px] tracking-button uppercase text-cocoa-900">
                  {t.name}
                </span>
                <span className="text-[11px] text-taupe-500">Verified Buyer</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
