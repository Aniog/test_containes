import { Toaster as Sonner } from "sonner";

const Toaster = ({
  className,
  toastOptions,
  ...props
}) => {
  return (
    <Sonner
      theme="light"
      className={className}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-900 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-slate-500",
          actionButton: "group-[.toast]:bg-blue-800 group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-700",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
