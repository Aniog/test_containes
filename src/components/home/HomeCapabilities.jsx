import React from "react";
import { Check } from "lucide-react";
import { capabilities } from "@/data/content";

export default function HomeCapabilities() {
  return (
    <section className="bg-paper-50 py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow text-copper-600">Capabilities</span>
          <h2
            id="capabilities-title"
            className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-tight text-balance"
          >
            Engineering, automation, and lifetime service — under one roof.
          </h2>
          <p
            id="capabilities-subtitle"
            className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            From application engineering to robotic integration and after-sales
            care, we own the entire life of your machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="relative bg-paper-100 border border-ink-900/8 rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-xl text-ink-900">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-ink-700 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <span className="font-display font-bold text-3xl text-copper-200 leading-none">
                  {String(capabilities.indexOf(cap) + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {cap.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink-700"
                  >
                    <Check className="w-4 h-4 mt-0.5 text-copper-600 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}