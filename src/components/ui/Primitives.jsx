import React from "react";
import { cn } from "@/lib/utils";

// Hairline divider, used generously sitewide.
export function Divider({ className, vertical = false }) {
  return (
    <div
      role="separator"
      className={cn(
        vertical ? "w-px h-full" : "h-px w-full",
        "bg-hairline",
        className
      )}
    />
  );
}

// Editorial eyebrow above section titles.
export function Eyebrow({ children, className }) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-medium uppercase tracking-wider2 text-claret",
        className
      )}
    >
      {children}
    </span>
  );
}

// Section header (eyebrow + serif title + optional sub).
export function SectionHeader({ eyebrow, title, subtitle, align = "center", className }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={cn("flex flex-col gap-3 mb-12 md:mb-16", alignClass, className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="serif-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05] text-cocoa max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// 5-star rating row.
export function StarRating({ rating = 5, size = 14, className }) {
  return (
    <div className={cn("flex items-center gap-0.5 text-gold", className)} aria-label={`Rated ${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} filled={i < Math.round(rating)} size={size} />
      ))}
    </div>
  );
}

function Star({ filled, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77 4.8 17.5l.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
    </svg>
  );
}

// Pill button used for variant selectors.
export function Pill({ active, children, onClick, className, ariaLabel, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      aria-label={ariaLabel}
      className={cn(
        "rounded-full border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ease-editorial",
        active
          ? "border-cocoa bg-cocoa text-ivory-light"
          : "border-hairline text-cocoa hover:border-cocoa",
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

// Lightweight accordion (controlled).
export function Accordion({ items, openId, onToggle }) {
  return (
    <div className="border-t border-hairline">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="product-name text-cocoa">{item.label}</span>
              <PlusMinus open={isOpen} />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-cocoa-soft max-w-2xl whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PlusMinus({ open }) {
  return (
    <span className="relative h-3 w-3 shrink-0" aria-hidden="true">
      <span className="absolute inset-x-0 top-1/2 h-px bg-cocoa" />
      <span
        className={cn(
          "absolute inset-y-0 left-1/2 w-px bg-cocoa transition-transform duration-300 ease-editorial",
          open && "scale-y-0"
        )}
      />
    </span>
  );
}

// Quantity stepper.
export function QuantityStepper({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className="inline-flex items-center border border-hairline">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-11 w-11 text-cocoa hover:bg-ivory-dark transition-colors duration-200"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="h-11 w-12 flex items-center justify-center text-sm text-cocoa tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="h-11 w-11 text-cocoa hover:bg-ivory-dark transition-colors duration-200"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
