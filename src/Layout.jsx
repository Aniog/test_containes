import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { ScrollRestoration } from 'react-router-dom';
import { Toaster } from 'sonner';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen Selection:bg-velmora-accent/20">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="bottom-right" richColors />
      <ScrollRestoration />
    </div>
  );
}
