import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col">
      <Navbar />
      <main className="flex-1 page-enter">
        {children}
      </main>
      <Footer />
    </div>
  );
}
