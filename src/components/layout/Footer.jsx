import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Twitter, Youtube, Twitch, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070710] border-t border-purple-900/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text font-gaming">GameVault</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your ultimate destination for gaming news, platform deals, and digital game purchases.
            </p>
            <div className="flex gap-3 mt-4">
              {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-purple-400 hover:bg-purple-600/10 transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/news', 'News & Articles'], ['/deals', 'Platform Deals'], ['/store', 'Game Store']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo Switch', 'PlayStation', 'Xbox'].map(p => (
                <li key={p}>
                  <Link to={`/deals?platform=${p.split(' ')[0]}`} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {['News', 'Reviews', 'Guides', 'Deals', 'Esports', 'Features'].map(c => (
                <li key={c}>
                  <Link to={`/news?category=${c}`} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 GameVault. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-gray-600 text-sm hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-600 text-sm hover:text-gray-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
