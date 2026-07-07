import React from 'react'

export const TrustBar = () => {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ]

  return (
    <div className="bg-primary text-primary-foreground py-3 border-y border-border/10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-xs md:text-sm font-sans tracking-wide uppercase">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary-foreground/50 md:hidden" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}