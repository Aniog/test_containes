import { Outlet } from 'react-router-dom'
import SiteHeader from '@/components/shared/SiteHeader'
import SiteFooter from '@/components/shared/SiteFooter'

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default Layout
