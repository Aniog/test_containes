import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-neutral-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
