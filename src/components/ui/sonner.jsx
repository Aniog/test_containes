import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#0F172A] group-[.toaster]:border-[#E2E8F0] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#475569]",
          actionButton:
            "group-[.toast]:bg-[#1E40AF] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#F1F5F9] group-[.toast]:text-[#475569]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
