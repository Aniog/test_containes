import * as React from "react"
import { cva } from "tailwind-variants"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ({ children }) => {
  return <div className="fixed inset-0 z-[100] flex items-end justify-end p-4 pointer-events-none">{children}</div>
}

const ToastViewport = ({ className }) => (
  <div className={cn("flex flex-col gap-2 w-full max-w-sm pointer-events-auto", className)} />
)

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Toast({ className, variant, ...props }) {
  return (
    <div
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
}

function ToastAction({ ...props }) {
  return <div {...props} />
}

function ToastClose({ className, ...props }) {
  return (
    <button
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground",
        className
      )}
      {...props}
    >
      <X className="size-4" />
    </button>
  )
}

function ToastTitle({ className, ...props }) {
  return (
    <div
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
}

function ToastDescription({ className, ...props }) {
  return (
    <div
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
}

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
