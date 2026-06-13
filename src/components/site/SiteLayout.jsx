import SiteFooter from '@/components/site/SiteFooter'
import SiteHeader from '@/components/site/SiteHeader'

const SiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
