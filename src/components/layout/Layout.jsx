import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import BubbleCanvas from './BubbleCanvas';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-abyss-900">
      <BubbleCanvas />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}