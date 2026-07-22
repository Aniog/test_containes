import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "./strk-img-config.json"
import "./index.css"
import App from "./App.jsx"
import { CartProvider } from "./context/CartContext.jsx"

// Run the stock image loader at boot, then App takes over for the rest.
if (typeof window !== "undefined") {
  // Defer until first paint so the DOM exists for the scan.
  window.requestAnimationFrame(() => {
    try {
      ImageHelper.loadImages(strkImgConfig, document.body)
    } catch (err) {
      console.warn("[strk-img] boot load failed", err)
    }
  })
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
