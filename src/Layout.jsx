import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CartDrawer } from '@/components/CartDrawer'
import { StrkImageScope } from '@/components/ui/StrkImage'

export function Layout() {
  const location = useLocation()
  return (
    <StrkImageScope className="flex min-h-screen flex-col bg-ivory" deps={[location.pathname]}>
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </StrkImageScope>
  )
}

export default Layout
