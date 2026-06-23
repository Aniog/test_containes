import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="text-2xl font-bold tracking-tight text-white">
              SSourcing<span className="text-blue-400">China</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Your reliable China sourcing agent for global buyers. We help you find trustworthy suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex space-x-6">
              {/* Add social links here if needed */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Supplier Sourcing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Factory Verification
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Quality Inspection
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Logistics & Shipping
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/how-it-works" className="text-sm leading-6 text-gray-300 hover:text-white">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/case-studies" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <MapPin className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span>Shenzhen, Guangdong, China</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <Phone className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span>+86 123 4567 8900</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <Mail className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span>info@ssourcingchina.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}