import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'Sourcing Services in China | Supplier Verification, QC & Shipping | SSourcing China',
  '/how-it-works': 'How It Works | China Sourcing Process for Overseas Buyers | SSourcing China',
  '/products': 'Products We Source in China | SSourcing China',
  '/case-studies': 'Case Studies | China Sourcing Support Results | SSourcing China',
  '/blog': 'China Sourcing Blog | SSourcing China',
  '/contact': 'Contact SSourcing China | Get a Free Sourcing Quote',
}

export default function SeoUpdater() {
  const location = useLocation()

  useEffect(() => {
    document.title = titles[location.pathname] || titles['/']
  }, [location.pathname])

  return null
}
