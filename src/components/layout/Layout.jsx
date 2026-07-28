import * as React from "react"
import { useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useImageLoader } from "@/hooks/useImageLoader"

export function Layout({ children }) {
  const location = useLocation()
  const mainRef = React.useRef(null)
  useImageLoader(mainRef, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
