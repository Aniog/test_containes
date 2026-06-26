import React from "react";
import { Quote } from "lucide-react";

const QUOTES = [
  {
    quote:
      "Our ARTITECT double folding machine replaced two press brakes and cut our cycle time on enclosure panels by 41%. The repeatability is honestly best-in-class.",
    name: "Lukas Hoffmann",
    role: "Production Director",
    company: "Helvetia Metallbau, Switzerland",
  },
  {
    quote:
      "We needed a metal folder machine that could fold 0.5 mm stainless without micro-cracking. The ARTITECT team flew in, ran samples, and shipped a machine configured for our exact material.",
    name: "Priya Raman",
    role: "Head of Manufacturing",
    company: "Arclight Enclosures, India",
  },
  {
    quote:
      "The lifetime warranty on the frame, combined with their 24/7 remote diagnostics, has eliminated our downtime risk on a critical architectural cladding line.",
    name: "Marco Bianchi",
    role: "Operations Manager",
    company: "Bianchi & Co. Architectural, Italy",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-ink text-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-light">Customer voices</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-paper">
              Trusted by fabricators
              <br />
              who measure in microns.
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-base md:text-lg text-paper/70 leading-relaxed">
              From single-shop job shops to multi-plant OEMs, ARTITECT
              machines are at work in forty countries and six core industries.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-paper/10 border border-paper/10 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="bg-ink p-8 lg:p-10 flex flex-col h-full"
            >
              <Quote className="h-8 w-8 text-brass" strokeWidth={1.5} />
              <blockquote className="mt-6 font-display text-xl md:text-2xl leading-snug text-paper/90">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-paper/15">
                <p className="text-sm font-semibold text-paper">
                  {q.name}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-paper/60 mt-1">
                  {q.role}
                </p>
                <p className="text-xs text-brass mt-1">{q.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
