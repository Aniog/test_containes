"use client"
import { Toaster as Sonner } from "sonner"

const Toaster = (props) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-brand-text group-[.toaster]:border-brand-text/10 group-[.toaster]:shadow-lg font-sans",
          description: "group-[.toast]:text-brand-neutral",
          actionButton: "group-[.toast]:bg-brand-text group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-brand-base group-[.toast]:text-brand-neutral",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
