import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Microscope, Home, BookOpen, Image, FileText } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/specimens', label: 'Specimens', icon: BookOpen },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/contact', label: 'Lab Notes', icon: FileText },
  ];

  return (
    <nav className="floating-nav">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2 pr-4 mr-2 border-r border-white/30">
          <Microscope className="w-5 h-5 text-text-ink" />
          <span className="font-serif font-bold text-sm tracking-wide">MicroCosmos</span>
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link flex items-center gap-1.5 ${isActive ? 'active' : ''}`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;