import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
