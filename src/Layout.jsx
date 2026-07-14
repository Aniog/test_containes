import Navbar from "@/components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} ContactUs. All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
