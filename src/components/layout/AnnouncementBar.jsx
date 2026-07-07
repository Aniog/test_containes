import React, { useState } from "react"
import { X } from "lucide-react"

const messages = [
  "Complimentary worldwide shipping on orders over $75",
  "New: the Royal Heirloom Set — gift-ready, forever-kept",
  "Now serving 32 countries — slow shipping, fast returns",
]

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  const message = messages[0]
  return (
    <div className="bg-ink text-ivory/85 text-[11px] font-sans tracking-[0.16em] uppercase">
      <div className="container-wrap py-2.5 flex items-center justify-center gap-3 relative">
        <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-gold" />
        <span className="text-center">{message}</span>
        <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-gold" />
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-3 sm:right-5 text-ivory/50 hover:text-ivory"
          aria-label="Dismiss announcement"
        >
          <X size={12} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

export default AnnouncementBar
