import React from 'react'
import { Hammer, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Hammer className="h-10 w-10 text-accent" />
              <span className="text-2xl font-bold tracking-tight">ARTITECT MACHINERY</span>
            </div>
            <p className="text-primary-foreground/80 text-base max-w-xs">
              Excellence in sheet metal folding technology. Precision engineering for the modern architectural industry.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-primary-foreground/70 hover:text-white transition-colors">Double Folding Machines</a></li>
                  <li><a href="#" className="text-base text-primary-foreground/70 hover:text-white transition-colors">Sheet Metal Folders</a></li>
                  <li><a href="#" className="text-base text-primary-foreground/70 hover:text-white transition-colors">Custom Solutions</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-primary-foreground/70 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-base text-primary-foreground/70 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-base text-primary-foreground/70 hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-base text-primary-foreground/70">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-base text-primary-foreground/70">exports@artitect.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-base text-primary-foreground/70">Industrial Park, Engineering Way, Tech City</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-base text-primary-foreground/50 xl:text-center">
            &copy; 2026 ARTITECT MACHINERY Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
