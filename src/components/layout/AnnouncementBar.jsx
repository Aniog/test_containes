import React from 'react'

const messages = [
  'Complimentary worldwide shipping on orders over $75',
  '30-day returns on every order',
  'New: Royal Heirloom Set — gift-boxed and ready',
]

export function AnnouncementBar() {
  return (
    <div className="bg-deep text-cream/90 text-[11px] md:text-xs font-sans tracking-eyebrow uppercase">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-[shimmer_30s_linear_infinite] gap-12 py-2.5 will-change-transform">
          {[...messages, ...messages, ...messages].map((m, i) => (
            <span key={i} className="shrink-0">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
