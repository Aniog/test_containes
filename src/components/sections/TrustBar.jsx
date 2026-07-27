import React from "react"
import { trustStats } from "@/data/site"

const TrustBar = () => {
  return (
    <section className="bg-warm-200 border-y border-warm-300">
      <div className="container-content py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-semibold text-navy tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-[13px] text-ink-secondary leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
