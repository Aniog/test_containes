import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-700">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
