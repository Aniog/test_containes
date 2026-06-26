import * as React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Layout() {
  return (
    <Toaster>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Toaster>
  )
}
