import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
