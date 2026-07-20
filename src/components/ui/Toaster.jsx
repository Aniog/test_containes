import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        className: "toast",
        style: {
          background: "#F8F5F1",
          color: "#2C2823",
          border: "1px solid #D4C9B8",
        },
      }}
    />
  );
}
