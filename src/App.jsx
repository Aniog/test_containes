import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <BrowserRouter>
      {/* Ambient background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute rounded-full opacity-30 blur-3xl"
          style={{ width: 500, height: 500, top: '-10%', left: '-5%', background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        />
        <div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{ width: 400, height: 400, top: '40%', right: '-8%', background: 'radial-gradient(circle, #db2777, transparent 70%)' }}
        />
        <div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{ width: 350, height: 350, bottom: '-5%', left: '30%', background: 'radial-gradient(circle, #2563eb, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex">
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 md:ml-60 px-4 md:px-8 py-6 pb-24 md:pb-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
