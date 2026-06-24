import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-silver/30 py-12 px-6 text-center">
        <p className="font-serif text-lg text-ink mb-1">MicroCosmos</p>
        <p className="text-sm text-slate">
          An educational platform for the study of microscopic life.
        </p>
        <p className="text-xs text-silver mt-4">
          © 2026 MicroCosmos Laboratory. All specimens documented for academic use.
        </p>
      </footer>
    </div>
  )
}

export default Layout
