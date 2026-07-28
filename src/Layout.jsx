import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function Layout() {
  const mainRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, mainRef.current)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main ref={mainRef} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
