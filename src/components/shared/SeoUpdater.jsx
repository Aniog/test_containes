import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMeta } from '../../siteContent.js'

const defaultTitle =
  'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China'

const SeoUpdater = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = routeMeta[location.pathname] || defaultTitle
  }, [location.pathname])

  return null
}

export default SeoUpdater
