import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'

const Layout = ({ cartCount, onCartOpen }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-ivory text-noir">
      <SiteHeader cartCount={cartCount} onCartOpen={onCartOpen} />
      {!isHomePage ? <div className="h-[76px] sm:h-[84px]" aria-hidden="true" /> : null}
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default Layout
