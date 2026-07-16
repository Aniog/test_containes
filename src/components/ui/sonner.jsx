import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#FAF7F2] group-[.toaster]:text-[#1A1816] group-[.toaster]:border-[#EDE8E0] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#5C5349]",
          actionButton:
            "group-[.toast]:bg-[#C5A46E] group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-[#EDE8E0] group-[.toast]:text-[#1A1816]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
