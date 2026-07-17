import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-espresso group-[.toaster]:text-ivory group-[.toaster]:border-hairline-dark group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-ivory/70",
          actionButton:
            "group-[.toast]:bg-gold group-[.toast]:text-espresso",
          cancelButton:
            "group-[.toast]:bg-espresso-soft group-[.toast]:text-ivory",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
