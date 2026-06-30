import { Toaster as Sonner } from 'sonner'

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-charcoal group-[.toaster]:text-cream group-[.toaster]:border-pearl/10 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-warm-gray",
          actionButton:
            "group-[.toast]:bg-gold group-[.toast]:text-charcoal group-[.toast]:text-xs group-[.toast]:tracking-wider group-[.toast]:uppercase",
          cancelButton:
            "group-[.toast]:bg-warm-black group-[.toast]:text-warm-gray",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
