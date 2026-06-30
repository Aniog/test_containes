import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  return (
    <Sonner
      position="top-center"
      richColors={false}
      toastOptions={{
        style: {
          background: "#1F1A17",
          color: "#FAF6EF",
          border: "1px solid #3A332E",
          fontSize: "13px",
          letterSpacing: "0.04em",
        },
        className: "font-sans",
      }}
      {...props}
    />
  );
};

export { Toaster };
