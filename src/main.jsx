import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast:
              "bg-espresso text-bone-50 border border-bone-50/10 font-sans text-sm",
            description: "text-bone-100/70",
            actionButton: "bg-gold-300 text-espresso",
            cancelButton: "bg-bone-50/10 text-bone-50",
            error: "bg-espresso text-bone-50 border border-red-500/40",
          },
        }}
      />
    </CartProvider>
  </React.StrictMode>,
);
