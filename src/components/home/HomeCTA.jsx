import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative bg-paper-50 py-24 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="relative rounded-3xl bg-navy-950 text-paper-50 overflow-hidden p-10 md:p-16 lg:p-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-precision-grid opacity-40"
          />
          <div
            aria-hidden="true"
            className="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(184,117,74,0.28), transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 eyebrow text-copper-400">
                <Sparkles className="w-4 h-4" />
                Start a conversation
              </span>
              <h2
                id="cta-title"
                className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-paper-50 text-balance"
              >
                Tell us about your parts — we'll spec the right folder.
              </h2>
              <p
                id="cta-subtitle"
                className="mt-5 text-paper-50/75 text-base md:text-lg max-w-2xl leading-relaxed"
              >
                Send us a sample drawing or a description of your production
                goals. Our application engineers will respond within one
                business day with a recommendation.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-copper-500 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-copper-500/20"
              >
                Request a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:sales@artitectmachinery.com"
                className="inline-flex items-center justify-center gap-2 bg-paper-50/10 hover:bg-paper-50/15 border border-paper-50/20 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
              >
                Email our engineers
              </a>
              <p className="text-paper-50/55 text-xs mt-2 text-center">
                Most quotes returned within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}