import React from "react"
import { cn } from "@/lib/utils"

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300"

  const variants = {
    primary:
      "bg-velmora-gold text-white hover:bg-velmora-gold-hover hover:shadow-[0_2px_12px_rgba(184,149,46,0.2)]",
    outline:
      "border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-white",
    ghost: "text-velmora-text-secondary hover:text-velmora-gold",
    text: "text-velmora-gold underline-offset-4 hover:underline",
  }

  const sizes = {
    sm: "text-[11px] px-4 py-2",
    md: "text-[13px] px-8 py-3.5",
    lg: "text-[13px] px-12 py-4",
    icon: "p-2",
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function StarRating({ rating, size = "sm" }) {
  const sizes = { sm: "w-3.5 h-3.5", md: "w-4 h-4", lg: "w-5 h-5" }
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            sizes[size],
            star <= Math.round(rating)
              ? "text-velmora-star"
              : "text-velmora-border"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-sans font-medium tracking-widest uppercase px-3 py-1",
        className
      )}
    >
      {children}
    </span>
  )
}

export function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className="border-b border-velmora-border-light">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-sans text-sm font-medium tracking-wider uppercase text-velmora-text">
          {title}
        </span>
        <svg
          className={cn(
            "w-4 h-4 text-velmora-text-secondary transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <div className="text-velmora-text-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
