import { Toaster as Sonner } from "sonner"

export { toast } from "sonner"

export function Toaster({ ...props }) {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-midnight-900 group-[.toaster]:border group-[.toaster]:border-velvet-100 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-velvet-500",
          actionButton:
            "group-[.toast]:bg-gold-500 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-velvet-100 group-[.toast]:text-midnight-900",
        },
      }}
      {...props}
    />
  )
}