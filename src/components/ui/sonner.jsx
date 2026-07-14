import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-velmora-fg group-[.toaster]:border-velmora-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-none",
          description: "group-[.toast]:text-velmora-muted",
          actionButton:
            "group-[.toast]:bg-velmora-fg group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-velmora-bg group-[.toast]:text-velmora-muted",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
