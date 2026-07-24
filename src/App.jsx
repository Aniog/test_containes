import { BrowserRouter } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/Layout"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout />
        <Toaster position="bottom-right" />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
