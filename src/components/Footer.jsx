import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Supplier Sourcing', href: '/services' },
    { name: 'Factory Audits', href: '/services' },
    { name: 'Quality Inspection', href: '/services' },
    { name: 'Production Following', href: '/services' },
    { name: 'Logistics & Shipping', href: '/services' },
  ],
  company: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products We Source', href: '/products' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  social: [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">SSourcing<span className="text-blue-500">China</span></span>
            </Link>
            <p className="text-sm leading-6">
              Empowering global buyers with transparent, reliable, and professional sourcing services in China. We bridge the gap between you and world-class manufacturing.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Details</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3 text-sm leading-6">
                    <MapPin className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                    <span>Futian District, Shenzhen, China 518000</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6">
                    <Phone className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                    <span>+86 123 4567 890</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6">
                    <Mail className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                    <span>info@ssourcing-china.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved. Professional China Sourcing Agent.
          </p>
        </div>
      </div>
    </footer>
  );
}
