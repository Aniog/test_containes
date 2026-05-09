import { useState } from 'react';
import { Gamepad2, Search, Bell, Menu, X, Flame } from 'lucide-react';
import { PLATFORMS } from '../data/gameData';

const PlatformIcon = ({ platform }) => {
  const icons = {
    all: <Gamepad2 className="w-4 h-4" />,
    steam: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
      </svg>
    ),
    epic: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 0v24h18V0H3zm9 18.75L5.25 12 12 5.25 18.75 12 12 18.75z"/>
      </svg>
    ),
    nintendo: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.13 0C4.085 0 0 4.085 0 9.13v5.74C0 19.915 4.085 24 9.13 24h5.74C19.915 24 24 19.915 24 14.87V9.13C24 4.085 19.915 0 14.87 0H9.13zm-.65 5.5h2.5l4.5 7V5.5h2.5v13h-2.5l-4.5-7v7H8.48V5.5z"/>
      </svg>
    ),
    playstation: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.984 2.596v14.47l3.915 1.338V6.688c0-.69.304-1.151.794-.991.636.21.76.843.76 1.533v5.872c2.656 1.194 4.64-.105 4.64-3.245 0-3.27-1.126-4.803-4.64-6.088-1.092-.4-3.087-.927-5.469-1.173zM2 17.806l6.984 2.598v-2.6L4.59 16.42V14.2l4.394 1.384v-2.6L4.59 11.6V9.38l4.394 1.384V8.164L2 5.566v12.24z"/>
      </svg>
    ),
    xbox: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.102 5.481C2.781 6.842 2 8.63 2 10.6c0 3.314 1.79 6.22 4.48 7.8L12 12l-7.898-6.519zM12 2C9.8 2 7.8 2.8 6.3 4.1L12 9.8l5.7-5.7C16.2 2.8 14.2 2 12 2zm5.52 3.481L12 12l5.52 6.4C20.21 16.82 22 13.914 22 10.6c0-1.97-.781-3.758-2.102-5.119zM12 14.2l-5.52 6.4C7.8 21.2 9.8 22 12 22s4.2-.8 5.52-1.4L12 14.2z"/>
      </svg>
    ),
  };
  return icons[platform] || icons.all;
};

export default function Header({ activePlatform, onPlatformChange, searchQuery, onSearchChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const platformColors = {
    all: 'text-purple-400 border-purple-400',
    steam: 'text-[#66c0f4] border-[#66c0f4]',
    epic: 'text-[#0078f2] border-[#0078f2]',
    nintendo: 'text-[#e4000f] border-[#e4000f]',
    playstation: 'text-[#0070d1] border-[#0070d1]',
    xbox: 'text-[#52b043] border-[#52b043]',
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Game<span className="text-purple-400">Pulse</span>
              </span>
            </div>
          </div>

          {/* Desktop search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search games, news, deals..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search games, news, deals..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        )}

        {/* Platform tabs - desktop */}
        <div className="hidden md:flex items-center gap-1 pb-0 overflow-x-auto scrollbar-hide">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => onPlatformChange(p.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                activePlatform === p.id
                  ? `${platformColors[p.id]} bg-gray-800/50`
                  : 'text-gray-400 border-transparent hover:text-gray-200 hover:bg-gray-800/30'
              }`}
            >
              <PlatformIcon platform={p.id} />
              {p.label}
              {p.id === 'epic' && (
                <span className="flex items-center gap-0.5 text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                  <Flame className="w-3 h-3" /> Free
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 grid grid-cols-3 gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                onClick={() => { onPlatformChange(p.id); setMobileMenuOpen(false); }}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activePlatform === p.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <PlatformIcon platform={p.id} />
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
