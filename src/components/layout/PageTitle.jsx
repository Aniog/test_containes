import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'Sourcing Services | Supplier Verification, QC & Shipping | SSourcing China',
  '/how-it-works': 'How It Works | Our 7-Step China Sourcing Process | SSourcing China',
  '/products': 'Products We Source | Electronics, Home, Industrial & More | SSourcing China',
  '/case-studies': 'Case Studies | Real Client Results | SSourcing China',
  '/blog': 'Blog | China Sourcing Guides & Insights | SSourcing China',
  '/contact': 'Contact | Get a Free Sourcing Quote | SSourcing China',
}

export default function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    const title = titles[location.pathname] || 'SSourcing China'
    document.title = title
  }, [location.pathname])

  return null
}
