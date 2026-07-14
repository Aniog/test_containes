import { Toaster as Sonner } from "sonner";

export function Toaster(props) {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-charcoal group-[.toaster]:text-ivory group-[.toaster]:border-charcoal group-[.toaster]:shadow-editorial group-[.toaster]:rounded-none group-[.toaster]:font-sans group-[.toaster]:text-[13px] group-[.toaster]:tracking-normal",
          description: "group-[.toast]:text-ivory/70",
          actionButton:
            "group-[.toast]:bg-ivory group-[.toast]:text-charcoal",
          cancelButton:
            "group-[.toast]:bg-ivory/20 group-[.toast]:text-ivory",
        },
      }}
      {...props}
    />
  );
}

export { toast } from "sonner";
