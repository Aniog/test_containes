import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Anchor className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing<span className="text-blue-500">China</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-6">
              Your trusted partner in China. We help global buyers find reliable suppliers, verify factories, and manage the entire supply chain from production to delivery.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link to="/services" className="text-sm leading-6 text-slate-400 hover:text-white">Supplier Sourcing</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 text-slate-400 hover:text-white">Factory Verification</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 text-slate-400 hover:text-white">Quality Inspection (QC)</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 text-slate-400 hover:text-white">Production Follow-up</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 text-slate-400 hover:text-white">Shipping & Logistics</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link to="/how-it-works" className="text-sm leading-6 text-slate-400 hover:text-white">How It Works</Link></li>
                  <li><Link to="/products" className="text-sm leading-6 text-slate-400 hover:text-white">Products We Source</Link></li>
                  <li><Link to="/case-studies" className="text-sm leading-6 text-slate-400 hover:text-white">Case Studies</Link></li>
                  <li><Link to="/blog" className="text-sm leading-6 text-slate-400 hover:text-white">Blog</Link></li>
                  <li><Link to="/contact" className="text-sm leading-6 text-slate-400 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Us</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3 text-sm leading-6 text-slate-400">
                    <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                    <span>Guangzhou, Guangdong<br />China 510000</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-slate-400">
                    <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                    <span>+86 123 4567 8900</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-slate-400">
                    <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                    <span>info@ssourcingchina.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
