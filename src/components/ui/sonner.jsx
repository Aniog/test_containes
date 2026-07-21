import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-ink group-[.toaster]:text-cream group-[.toaster]:border-line-dark group-[.toaster]:shadow-lg group-[.toaster]:rounded-none",
          description: "group-[.toast]:text-fog",
          actionButton: "group-[.toast]:bg-gold group-[.toast]:text-ink",
          cancelButton: "group-[.toast]:bg-espresso group-[.toast]:text-fog",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
