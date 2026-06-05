import React from 'react'
import { strings } from '../lib/strings'

const s = strings.en

export default function HowItWorks() {
  return (
    <section className="w-full py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-8">
          {s.howItWorksHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.howItWorksSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-lg mb-4 ai-gradient-bg"
                aria-hidden="true"
              >
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-heading-dark text-sm uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-body-text text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
