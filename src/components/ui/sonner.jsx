import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-velmora-cream group-[.toaster]:text-velmora-charcoal group-[.toaster]:border-velmora-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-velmora-warm-gray",
          actionButton:
            "group-[.toast]:bg-velmora-gold group-[.toast]:text-velmora-cream",
          cancelButton:
            "group-[.toast]:bg-velmora-ivory group-[.toast]:text-velmora-charcoal",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
