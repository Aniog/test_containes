"use client"

import { Toaster } from "sonner"

export function Sonner() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "bg-brand-surface text-brand-ink border border-brand-line shadow-lg",
          title: "font-serif text-sm",
          description: "text-brand-muted text-xs",
          actionButton:
            "bg-brand-ink text-white",
          cancelButton:
            "bg-brand-warm text-brand-ink",
        },
      }}
    />
  )
}