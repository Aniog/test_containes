import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#1E293B] group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#64748B]",
          actionButton:
            "group-[.toast]:bg-[#3A8A7B] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-gray-100 group-[.toast]:text-[#64748B]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }