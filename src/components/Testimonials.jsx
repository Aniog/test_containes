import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const testimonials = [
  {
    id: "t1",
    quote:
      "We replaced two press brakes with a single ARTITECT double folder. Setup time fell by 60% and our architectural panels finally come off the line ready to install.",
    name: "Mariana Voss",
    role: "Production Director",
    company: "Voss Architectural Cladding",
  },
  {
    id: "t2",
    quote:
      "The control system is the most operator-friendly I've ever used. New staff are folding production parts in their first week — that has been transformative for us.",
    name: "Hiroshi Tanabe",
    role: "Workshop Lead",
    company: "Tanabe Sheet Metal Co.",
  },
  {
    id: "t3",
    quote:
      "Three years of daily use, sub-millimeter tolerances still holding. ARTITECT's after-sales engineering is genuinely the best I have worked with.",
    name: "Elena Marković",
    role: "Owner",
    company: "Marković Metal Atelier",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-mist py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brass mb-5">
            Trusted in workshops worldwide
          </p>
          <h2
            id="testimonials-title"
            className="font-display text-4xl md:text-5xl font-light text-ink leading-[1.08]"
          >
            Folders that earn their place on the shop floor.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-paper p-8 md:p-10 flex flex-col"
            >
              <Quote className="w-7 h-7 text-brass mb-6" strokeWidth={1.25} />
              <blockquote className="font-display text-xl md:text-2xl leading-snug text-ink flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-ink/10">
                <div className="text-sm font-medium text-ink">{t.name}</div>
                <div className="text-xs text-steel mt-1">
                  {t.role}, {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
