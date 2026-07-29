import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import SiteHeader from '@/components/common/SiteHeader.jsx'
import SiteFooter from '@/components/common/SiteFooter.jsx'
import PreviewRouteBridge from '@/components/common/PreviewRouteBridge.jsx'

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <PreviewRouteBridge />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <Toaster richColors position="top-right" />
    </div>
  )
}

export default Layout
