import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { useHideInjectedText } from '@/lib/useHideInjectedText'
import { stockImageInjectedText } from '@/lib/stockImageA11y'
import NavBar from './NavBar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

const SiteShell = () => {
  const shellRef = useRef(null)

  useHideInjectedText(shellRef, stockImageInjectedText)

  return (
    <div ref={shellRef} className="min-h-screen bg-canvas text-ink">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default SiteShell
