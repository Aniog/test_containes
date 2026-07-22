import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-cardwhite group-[.toaster]:text-charcoal group-[.toaster]:border-borderwarm group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted",
          actionButton:
            "group-[.toast]:bg-gold group-[.toast]:text-white group-[.toast]:font-sans group-[.toast]:text-xs group-[.toast]:tracking-cta group-[.toast]:uppercase",
          cancelButton:
            "group-[.toast]:bg-cream group-[.toast]:text-charcoal group-[.toast]:font-sans group-[.toast]:text-xs",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
