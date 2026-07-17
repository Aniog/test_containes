import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/store/CartDrawer'
import { useImageLoader } from '@/hooks/useImageLoader'

const AppShell = () => {
  const shellRef = useImageLoader([])

  return (
    <div ref={shellRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default AppShell
