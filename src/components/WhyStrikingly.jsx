import React from 'react'
import { strings } from '../lib/strings'
import { LiveIcon, MobileIcon, FreeIcon } from './Icons'

const s = strings.en

const icons = [LiveIcon, MobileIcon, FreeIcon]

export default function WhyStrikingly() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-8">
          {s.whyStrikinglyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.whyStrikinglyItems.map((item, i) => {
            const IconComponent = icons[i]
            return (
              <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-4">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="font-heading font-bold text-heading-dark text-sm uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
