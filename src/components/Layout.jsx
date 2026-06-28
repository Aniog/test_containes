import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="text-xl font-bold tracking-tight text-white block mb-4">
                  ARTITECT<span className="text-blue-500"> MACHINES</span>
                </span>
                <p className="text-sm">Precision metal folding solutions for modern manufacturing.</p>
              </div>
              <div>
                 <h3 className="text-white font-semibold mb-4">Links</h3>
                 <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                 </ul>
              </div>
              <div>
                 <h3 className="text-white font-semibold mb-4">Contact</h3>
                 <ul className="space-y-2 text-sm">
                    <li>sales@artitectmachinery.demo</li>
                    <li>+1 (555) 123-4567</li>
                    <li>123 Industrial Pkwy, Tech City</li>
                 </ul>
              </div>
           </div>
           <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center">
             &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  )
}