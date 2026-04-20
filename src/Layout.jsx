import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a1a0b]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#060f07] border-t border-green-900/30 py-8 px-6 text-center text-green-400/40 text-sm">
        © {new Date().getFullYear()} ForestWorld — Celebrating and protecting the world's forests.
      </footer>
    </div>
  )
}
