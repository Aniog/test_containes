import * as React from "react"
import { cn } from "@/lib/utils"

const Toaster = ({ className, ...props }) => {
  return React.createElement(
    "div",
    {
      className: cn(
        "fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      ),
      ...props,
    }
  )
}

const toastVariants = {
  default: "bg-white text-[#1a1a1a] border border-gray-200",
  destructive: "bg-red-500 text-white",
  success: "bg-[#1a1a1a] text-white",
}

const Toast = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return React.createElement(
    "div",
    {
      ref,
      className: cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all",
        toastVariants[variant],
        className
      ),
      ...props,
    }
  )
})
Toast.displayName = "Toast"

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => {
  return React.createElement("div", {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props,
  })
})
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => {
  return React.createElement("div", {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props,
  })
})
ToastDescription.displayName = "ToastDescription"

export { Toaster, Toast, ToastTitle, ToastDescription }
