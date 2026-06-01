import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-space-950 text-slate-100 star-field relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
