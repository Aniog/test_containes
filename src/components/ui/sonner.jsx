import { Toaster as SonnerToaster } from "sonner"

const Toaster = (props) => {
  return (
    <SonnerToaster
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#1A1A1A] group-[.toaster]:border-[#E8E4DF] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#6B6560]",
          actionButton: "group-[.toast]:bg-[#B8956A] group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-[#E8E4DF] group-[.toast]:text-[#6B6560]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
