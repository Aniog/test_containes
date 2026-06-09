import { Outlet } from 'react-router-dom'
import SiteHeader from '@/components/site/SiteHeader'
import SiteFooter from '@/components/site/SiteFooter'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
