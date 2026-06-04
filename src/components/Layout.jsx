import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="paper-texture min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <footer className="border-t border-ink-DEFAULT/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ink-faint tracking-wider uppercase">
            MicroCosmos &mdash; The Microscopic World
          </p>
          <p className="font-serif text-xs italic text-ink-faint">
            &ldquo;Nature reveals her secrets through the lens of patience.&rdquo;
          </p>
        </div>
      </footer>
    </div>
  );
}