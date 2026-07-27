import ImageLoadContainer from './components/site/ImageLoadContainer'
import SiteFooter from './components/site/SiteFooter'
import SiteHeader from './components/site/SiteHeader'

function Layout({ children }) {
  return (
    <ImageLoadContainer as="div" className="min-h-screen bg-brand-bg text-brand-ink">
      <SiteHeader />
      {children}
      <SiteFooter />
    </ImageLoadContainer>
  )
}

export default Layout
