import { useLocation } from 'react-router-dom'
import Header from '@/components/common/Header.jsx'
import Footer from '@/components/common/Footer.jsx'
import { useStrkImages } from '@/lib/useStrkImages.js'

const Layout = ({ children }) => {
  const location = useLocation()
  const containerRef = useStrkImages([location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
