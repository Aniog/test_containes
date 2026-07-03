import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"

import HomePage from "@/pages/HomePage"
import CollectionPage from "@/pages/CollectionPage"
import ProductPage from "@/pages/ProductPage"
import CartPage from "@/pages/CartPage"
import CheckoutPage from "@/pages/CheckoutPage"
import AboutPage from "@/pages/AboutPage"
import JournalPage from "@/pages/JournalPage"
import AccountPage from "@/pages/AccountPage"
import ContactPage from "@/pages/ContactPage"
import HelpPage from "@/pages/HelpPage"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Snap to top on route change so the new page doesn't pick up the
    // previous scroll position. Pages with their own scroll restoration
    // (none yet) can opt out by using their own effect.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:text-ink-onAccent focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<CollectionPage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<JournalPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/help/:topic" element={<HelpPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AppLayout />
      </CartProvider>
    </BrowserRouter>
  )
}
