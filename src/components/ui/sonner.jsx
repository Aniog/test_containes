import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#F7F4ED] group-[.toaster]:text-[#1C1A17] group-[.toaster]:border-[#EDE8E0] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#6B635C]",
          actionButton:
            "group-[.toast]:bg-[#B89778] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#EDE8E0] group-[.toast]:text-[#1C1A17]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
