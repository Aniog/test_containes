import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export default function HomeTestimonials() {
  return (
    <section className="bg-paper-100 py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow text-copper-600">Customer voices</span>
          <h2
            id="testimonials-title"
            className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-tight text-balance"
          >
            What fabricators say about working with ARTITECT.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <figure
              key={t.author}
              className="relative bg-paper-50 border border-ink-900/8 rounded-2xl p-8 hover-lift"
            >
              <Quote
                className="absolute top-6 right-6 w-7 h-7 text-copper-200"
                aria-hidden="true"
              />
              <blockquote
                id={`testimonial-${idx}-quote`}
                className="text-ink-800 leading-relaxed"
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-copper-400 to-copper-600 text-paper-50 font-display font-bold flex items-center justify-center"
                >
                  {t.author
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p
                    id={`testimonial-${idx}-author`}
                    className="font-display font-semibold text-sm text-ink-900"
                  >
                    {t.author}
                  </p>
                  <p
                    id={`testimonial-${idx}-role`}
                    className="text-xs text-ink-500"
                  >
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}