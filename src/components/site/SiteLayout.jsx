import { Outlet, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import Seo from '@/components/site/Seo'
import { pageTitles, siteDescription } from '@/data/siteContent'
import { useStrkImages } from '@/components/site/useStrkImages'

const SiteLayout = () => {
  const location = useLocation()
  const containerRef = useRef(null)

  useStrkImages(containerRef, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900">
      <Seo title={pageTitles[location.pathname] || pageTitles['/']} description={siteDescription} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
