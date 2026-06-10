import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Facebook, Youtube } from 'lucide-react';
import { company } from '@/data/content';

const sections = [
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Supplier Sourcing' },
      { to: '/services', label: 'Factory Verification' },
      { to: '/services', label: 'Quality Inspection' },
      { to: '/services', label: 'Production Follow-Up' },
      { to: '/services', label: 'Shipping & Logistics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/products', label: 'Products We Source' },
      { to: '/case-studies', label: 'Case Studies' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact Us' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#081B33] text-[#C7D6EE]">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-md bg-white text-[#0B2545] flex items-center justify-center font-bold">
                SS
              </span>
              <span className="font-bold text-white text-base">SSourcing China</span>
            </div>
            <p className="text-sm leading-relaxed text-[#A6B7D1] max-w-sm">
              A China-based sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and ship — all under one project manager.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#8FA6C5] flex-shrink-0" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[#8FA6C5] flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[#8FA6C5] flex-shrink-0" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">{company.phone}</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#8FA6C5] flex-shrink-0" />
                <span>WeChat: {company.wechat}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-[#8FA6C5] flex-shrink-0" />
                <span>{company.hours}</span>
              </div>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="md:col-span-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.to} className="text-[#A6B7D1] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Follow</h3>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#8FA6C5]">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Sourcing services for international buyers · English / 中文</p>
        </div>
      </div>
    </footer>
  );
}
