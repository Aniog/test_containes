import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-brand-50 font-body">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
