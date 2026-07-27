import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
