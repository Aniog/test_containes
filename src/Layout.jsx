import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-body text-[#636972] bg-white">
      {/* Top bar */}
      <header className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex justify-between items-center">
          <a href="/" className="font-heading font-bold text-xl tracking-wide text-[#2E2E2F] flex items-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
            <span className="text-[#8159BB] mr-1">strikingly</span> AI
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full" id="main-content">
        <Outlet />
      </main>

      {/* Footer out of scope for visual polish but structurally sound */}
      <footer className="bg-[#F4F6F8] py-12 border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
             <div className="font-heading font-bold text-xl tracking-wide text-[#2E2E2F] mb-4 flex items-center">
              <span className="text-[#8159BB] mr-1">strikingly</span> AI
            </div>
          </div>
          <div className="md:w-1/4 flex flex-col gap-2">
            <h4 className="font-heading font-bold text-[#4B5056] text-sm mb-2">PRODUCT</h4>
            <span className="text-sm">Templates</span>
            <span className="text-sm">Pricing</span>
          </div>
          <div className="md:w-1/4 flex flex-col gap-2">
            <h4 className="font-heading font-bold text-[#4B5056] text-sm mb-2">COMPANY</h4>
            <span className="text-sm">About</span>
            <span className="text-sm">Blog</span>
          </div>
          <div className="md:w-1/4 flex flex-col gap-2">
            <h4 className="font-heading font-bold text-[#4B5056] text-sm mb-2">SUPPORT</h4>
            <span className="text-sm">Help Center</span>
            <span className="text-sm">Contact Us</span>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 mt-12 pt-6 border-t border-[#E2E4E7] text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Strikingly</p>
          <div className="flex gap-4 mt-4 md:mt-0 justify-center">
             <span>Terms</span>
             <span>Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
