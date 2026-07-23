import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

const Layout = () => (
  <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
    <NavBar />
    <Outlet />
    <Footer />
    <CartDrawer />
  </div>
)

export default Layout
