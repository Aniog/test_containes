import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  return (
    <Sonner
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast !bg-espresso !text-cream !border !border-espresso !rounded-none !shadow-[0_18px_40px_-24px_rgba(36,27,18,0.5)] !font-sans !text-sm",
          description: "!text-cream/70",
          actionButton: "!bg-bronze !text-white",
          cancelButton: "!bg-sand !text-espresso",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
