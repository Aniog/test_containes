"use client"

import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-brand-charcoal group-[.toaster]:border-brand-charcoal/10 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-brand-charcoal/60",
          actionButton:
            "group-[.toast]:bg-brand-gold group-[.toast]:text-brand-charcoal",
          cancelButton:
            "group-[.toast]:bg-brand-ivory group-[.toast]:text-brand-charcoal",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
