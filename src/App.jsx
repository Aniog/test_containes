import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlatformStats from './components/PlatformStats';
import NewsSection from './components/NewsSection';
import DealsSection from './components/DealsSection';
import { Gamepad2, Github, Twitter } from 'lucide-react';

function App() {
  const [activePlatform, setActivePlatform] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header
        activePlatform={activePlatform}
        onPlatformChange={setActivePlatform}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* Hero */}
        <HeroSection activePlatform={activePlatform} />

        {/* Platform Stats */}
        <section>
          <h2 className="text-white text-xl font-bold mb-4">Platform Overview</h2>
          <PlatformStats activePlatform={activePlatform} onPlatformChange={setActivePlatform} />
        </section>

        {/* Deals */}
        <DealsSection activePlatform={activePlatform} searchQuery={searchQuery} />

        {/* News */}
        <NewsSection activePlatform={activePlatform} searchQuery={searchQuery} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Game<span className="text-purple-400">Pulse</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              Your one-stop hub for gaming news & deals across Steam, Epic, Nintendo, PlayStation, and Xbox.
            </p>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-gray-800">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-gray-800">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800/50 text-center text-gray-600 text-xs">
            © 2025 GamePulse. All trademarks belong to their respective owners.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
