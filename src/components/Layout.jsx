import Navbar from './Navbar'
import Footer from './Footer'
import { Toaster } from 'sonner'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-[4.5rem]">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  )
}
