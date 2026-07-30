import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title, description }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Update document title
  useEffect(() => {
    const baseTitle = 'SSourcing China'
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | China Sourcing Agent`
  }, [title])

  // Update meta description
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'SSourcing China - Your trusted China sourcing agent. Supplier verification, quality control, and shipping coordination for global buyers.')
    }
  }, [description])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[104px] md:pt-[120px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
