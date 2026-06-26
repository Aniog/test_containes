import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-slate-900 group-[.toaster]:text-slate-100 group-[.toaster]:border-slate-700 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-cyan-500 group-[.toast]:text-slate-950",
          cancelButton:
            "group-[.toast]:bg-slate-700 group-[.toast]:text-slate-100",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
