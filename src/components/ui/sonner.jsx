import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  return (
    (<Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-brand-cream group-[.toaster]:text-brand-charcoal group-[.toaster]:border-brand-stone/10 group-[.toaster]:shadow-lg group-[.toaster]:font-serif",
          description: "group-[.toast]:text-brand-stone",
          actionButton:
            "group-[.toast]:bg-brand-charcoal group-[.toast]:text-white uppercase tracking-widest text-[10px]",
          cancelButton:
            "group-[.toast]:bg-brand-stone/10 group-[.toast]:text-brand-stone uppercase tracking-widest text-[10px]",
        },
      }}
      {...props} />)
  );
}

export { Toaster }
